// sendMessage.js
import fetch from "node-fetch";
const BOT_TOKEN = "7841625290:AAG-DqsUf4JEWIVR4U12brC6sT56qJ7Rymw";
const CHAT_ID = "6866163517"; // e.g. 123456789
const API_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

async function sendMessage(text) {
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: text
      })
    });

    const data = await res.json();
    console.log("✅ Message sent:", data);
  } catch (err) {
    console.error("❌ Error:", err);
  }
}

// 🔹 Example: send a test message
sendMessage("Hello Raksa! 🚀 Your bot is working.");
