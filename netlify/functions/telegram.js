// netlify/functions/telegram.js
export const handler = async (event) => {
  if (event.httpMethod !== 'POST') return { statusCode: 405, body: 'Method not allowed' };

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return { statusCode: 500, body: 'Missing env vars' };

  try {
    const { name = '', email = '', message = '', company = '' } = JSON.parse(event.body || '{}');
    if (company) return { statusCode: 200, body: JSON.stringify({ ok: true, skipped: true }) };

    if (name.trim().length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || message.trim().length < 10) {
      return { statusCode: 400, body: JSON.stringify({ ok: false, error: 'Invalid input' }) };
    }

    const text =
      `<b>New Portfolio Contact</b>\n` +
      `👤 <b>Name:</b> ${escapeHtml(name)}\n` +
      `✉️ <b>Email:</b> ${escapeHtml(email)}\n` +
      `📝 <b>Message:</b>\n${escapeHtml(message)}`;

    const tg = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text, parse_mode: 'HTML' })
    }).then(r => r.json());

    if (!tg.ok) return { statusCode: 502, body: JSON.stringify({ ok: false, error: tg.description }) };
    return { statusCode: 200, body: JSON.stringify({ ok: true }) };
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ ok: false, error: e.message }) };
  }
};

function escapeHtml(s){return String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;')}
