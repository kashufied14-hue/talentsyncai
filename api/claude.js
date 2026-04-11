export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).end();

  const { messages, system } = req.body || {};
  const userMsg = messages?.[messages.length - 1]?.content || '';
  let prompt = system ? `${system}\n\n${userMsg}` : userMsg;
  if (prompt.length > 6000) prompt = prompt.slice(0, 6000);

  const r = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { maxOutputTokens: 800, temperature: 0.2 }
      })
    }
  );

  const d = await r.json();
  if (!r.ok) return res.status(500).json({ error: d?.error?.message || 'API error' });

  let text = d?.candidates?.[0]?.content?.parts?.[0]?.text || '';
  text = text.replace(/```json\n?/gi, '').replace(/```\n?/g, '').trim();
  res.status(200).json({ content: [{ type: 'text', text }], usage: { output_tokens: text.length } });
}
