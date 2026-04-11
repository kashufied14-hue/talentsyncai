export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).end();

  try {
    const { messages, system } = req.body;

    // Build prompt from messages + system
    let prompt = '';
    if (system) prompt += system + '\n\n';
    if (messages && messages.length > 0) {
      prompt += messages[messages.length - 1].content;
    }

    // Tell Gemini to respond ONLY with JSON when the prompt contains "JSON"
    const isJsonRequest = prompt.includes('JSON') || prompt.includes('json');
    if (isJsonRequest) {
      prompt += '\n\nIMPORTANT: Respond with ONLY valid JSON. No markdown, no backticks, no explanation. Start your response directly with { or [';
    }

    const geminiRes = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: { 
            maxOutputTokens: 1000,
            temperature: 0.3
          }
        })
      }
    );

    const geminiData = await geminiRes.json();
    
    if (!geminiRes.ok) {
      return res.status(500).json({ error: geminiData?.error?.message || 'Gemini API error' });
    }

    let text = geminiData?.candidates?.[0]?.content?.parts?.[0]?.text || '';
    
    // Strip any markdown code fences if present
    text = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();

    // Return in Anthropic-compatible format so frontend works unchanged
    res.status(200).json({
      content: [{ type: 'text', text }],
      usage: { output_tokens: text.length }
    });

  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
