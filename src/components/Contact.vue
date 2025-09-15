<template>
  <section
    id="contact"
    class="py-16 px-4 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500"
  >
    <div class="max-w-3xl mx-auto text-center mb-10">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
        Contact Me
      </h2>
      <p class="text-gray-600 dark:text-gray-300 mt-2">
        I’d love to hear from you! Fill the form below.
      </p>
    </div>

    <!-- Form Card -->
    <div
      class="bg-white dark:bg-gray-900 p-6 md:p-8 rounded-xl shadow-lg max-w-lg mx-auto w-full transition-colors duration-500"
    >
      <form @submit.prevent="sendToTelegram" class="space-y-6">
        <!-- Name -->
        <div>
          <label
            class="block text-left text-gray-700 dark:text-gray-300 font-medium mb-2"
          >
            Name <span class="text-red-500">*</span>
          </label>
          <input
            v-model="form.name"
            type="text"
            placeholder="Enter your full name"
            required
            class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 transition-colors duration-300"
          />
        </div>

        <!-- Phone -->
        <div>
          <label
            class="block text-left text-gray-700 dark:text-gray-300 font-medium mb-2"
          >
            Phone Number <span class="text-red-500">*</span>
          </label>
          <input
            v-model="form.phone"
            type="tel"
            placeholder="092378159"
            required
            class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 transition-colors duration-300"
          />
        </div>

        <!-- Message -->
        <div>
          <label
            class="block text-left text-gray-700 dark:text-gray-300 font-medium mb-2"
          >
            Message <span class="text-red-500">*</span>
          </label>
          <textarea
            v-model="form.message"
            placeholder="Tell us what you need help with..."
            rows="4"
            minlength="10"
            maxlength="500"
            required
            class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 transition-colors duration-300"
          ></textarea>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Minimum 10 characters
            <span class="float-right">{{ form.message.length }}/500</span>
          </p>
        </div>

        <!-- Buttons -->
        <div class="flex flex-col md:flex-row gap-4">
          <button
            type="submit"
            :disabled="loading"
            class="flex-1 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold shadow-md flex items-center justify-center gap-2 disabled:opacity-50 transition"
          >
            <span v-if="!loading">📨 Send</span>
            <span v-else>⏳ Sending...</span>
          </button>

          <button
            type="button"
            @click="resetForm"
            class="flex-1 py-3 rounded-lg bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-100 font-semibold shadow-md flex items-center justify-center gap-2 transition"
          >
            🔄 Reset
          </button>
        </div>
      </form>

      <!-- Success & Error Messages -->
      <p
        v-if="successMessage"
        class="mt-4 text-green-600 dark:text-green-400 text-center font-medium"
      >
        {{ successMessage }}
      </p>
      <p
        v-if="errorMessage"
        class="mt-4 text-red-600 dark:text-red-400 text-center font-medium"
      >
        {{ errorMessage }}
      </p>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from "vue";

const form = reactive({
  name: "",
  phone: "",
  message: "",
});

const loading = ref(false);
const successMessage = ref("");
const errorMessage = ref("");

// ⚡ Replace these with your actual Bot Token and Chat ID
const TELEGRAM_BOT_TOKEN = "7841625290:AAG-DqsUf4JEWIVR4U12brC6sT56qJ7Rymw";
const TELEGRAM_CHAT_ID = "6866163517";

async function sendToTelegram() {
  if (form.message.length < 10) {
    errorMessage.value = "Message must be at least 10 characters.";
    return;
  }

  loading.value = true;
  errorMessage.value = "";
  successMessage.value = "";

  const text = `
*📩 New Contact Form Submission*
*Name:* ${form.name}
*Phone:* ${form.phone}
*Message:*
${form.message}
`;

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: text,
          parse_mode: "Markdown",
        }),
      }
    );

    if (response.ok) {
      successMessage.value = "✅ Sent successfully!";
      resetForm();
    } else {
      throw new Error("Failed to send message.");
    }
  } catch (error) {
    errorMessage.value = "❌ Error sending message. Please try again.";
  } finally {
    loading.value = false;
  }
}

function resetForm() {
  form.name = "";
  form.phone = "";
  form.message = "";
}
</script>

<style scoped>
section {
  min-height: 100vh;
  transition: background-color 0.5s;
}
</style>
