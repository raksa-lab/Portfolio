<template>
  <form @submit.prevent="submitForm" class="bg-gray-900 rounded-2xl p-8 border border-gray-700 shadow-2xl fade-in">
    <!-- Name -->
    <div class="mb-6">
      <label class="block text-white text-sm font-medium mb-2">Name *</label>
      <input v-model="form.name" type="text" required class="w-full px-4 py-3 bg-gray-800 text-white rounded-lg" />
    </div>

    <!-- Phone -->
    <div class="mb-6">
      <label class="block text-white text-sm font-medium mb-2">Phone *</label>
      <input v-model="form.phone" type="tel" required class="w-full px-4 py-3 bg-gray-800 text-white rounded-lg" />
    </div>

    <!-- Message -->
    <div class="mb-6">
      <label class="block text-white text-sm font-medium mb-2">Message *</label>
      <textarea v-model="form.message" rows="4" required class="w-full px-4 py-3 bg-gray-800 text-white rounded-lg"></textarea>
    </div>

    <!-- Buttons -->
    <div class="flex gap-4">
      <button type="submit" class="flex-1 bg-green-600 text-white py-3 rounded-lg">Send to Telegram</button>
      <button type="button" @click="resetForm" class="flex-1 bg-gray-700 text-white py-3 rounded-lg">Reset</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "TelegramContactForm",
  data() {
    return {
      form: { name: "", phone: "", message: "" },
      BOT_TOKEN: import.meta.env.VITE_TELEGRAM_BOT_TOKEN,
      CHAT_ID: import.meta.env.VITE_TELEGRAM_CHAT_ID,
    };
  },
  methods: {
    async submitForm() {
      const message = `👤 ${this.form.name}\n📱 ${this.form.phone}\n💬 ${this.form.message}`;
      await fetch(`https://api.telegram.org/bot${this.BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: this.CHAT_ID, text: message }),
      });
      this.resetForm();
    },
    resetForm() {
      this.form = { name: "", phone: "", message: "" };
    },
  },
};
</script>
