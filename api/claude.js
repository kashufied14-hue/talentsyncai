export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).end();

  const { messages, system } = req.body || {};
  const userMsg = messages?.[messages.length - 1]?.content || '';
  let prompt = system ? `${system}\n\n${userMsg}` : userMsg;
  if (prompt.length > 6000) prompt = prompt.slice(0, 6000);

  const r = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
      'HTTP-Referer': 'https://talentsyncai-indol.vercel.app',
      'X-Title': 'TalentSync AI'
    },
    body: JSON.stringify({
      model: 'meta-llama/llama-3.1-8b-instruct:free',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 1000,
      temperature: 0.2
    })
  });

  const d = await r.json();
  if (!r.ok) return res.status(500).json({ error: d?.error?.message || 'API error' });

  let text = d?.choices?.[0]?.message?.content || '';
  text = text.replace(/```json\n?/gi, '').replace(/```\n?/g, '').trim();
  res.status(200).json({ content: [{ type: 'text', text }], usage: { output_tokens: text.length } });
}
