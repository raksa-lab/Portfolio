// api/telegram.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) {
    return res.status(500).json({ ok: false, error: 'Missing env vars' });
  }

  try {
    const body = typeof req.body === 'object' ? req.body : JSON.parse(req.body || '{}');
    const { name = '', email = '', message = '', company = '' } = body;

    // honeypot (spam trap)
    if (company) return res.status(200).json({ ok: true, skipped: true });

    // basic validation (mirror your frontend rules)
    if (name.trim().length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || message.trim().length < 10) {
      return res.status(400).json({ ok: false, error: 'Invalid input' });
    }

    const text =
      `<b>New Portfolio Contact</b>\n` +
      `👤 <b>Name:</b> ${escapeHtml(name)}\n` +
      `✉️ <b>Email:</b> ${escapeHtml(email)}\n` +
      `📝 <b>Message:</b>\n${escapeHtml(message)}`;

    const tg = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text, parse_mode: 'HTML' }),
    }).then(r => r.json());

    if (!tg.ok) return res.status(502).json({ ok: false, error: tg.description });
    res.status(200).json({ ok: true });
  } catch (e) {
    res.status(500).json({ ok: false, error: e.message });
  }
}

function escapeHtml(s) {
  return String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
}
