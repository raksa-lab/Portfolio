import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors({ origin: ['http://localhost:5173', 'https://your-domain.com'] })); // adjust

const { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } = process.env;

app.post('/api/telegram', async (req, res) => {
  try {
    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      return res.status(500).json({ ok: false, error: 'Missing env vars' });
    }

    const { name = '', email = '', message = '', company = '' } = req.body || {};
    if (company) return res.json({ ok: true, skipped: true });

    if (name.trim().length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || message.trim().length < 10) {
      return res.status(400).json({ ok: false, error: 'Invalid input' });
    }

    const text =
      `<b>New Portfolio Contact</b>\n` +
      `👤 <b>Name:</b> ${escapeHtml(name)}\n` +
      `✉️ <b>Email:</b> ${escapeHtml(email)}\n` +
      `📝 <b>Message:</b>\n${escapeHtml(message)}`;

    const tg = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text, parse_mode: 'HTML' })
    }).then(r => r.json());

    if (!tg.ok) return res.status(502).json({ ok: false, error: tg.description });
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ ok: false, error: e.message });
  }
});

app.listen(3000, () => console.log('API running on http://localhost:3000'));

function escapeHtml(s){return String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;')}
