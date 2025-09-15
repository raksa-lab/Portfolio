<template>
  <div class="min-h-screen py-8 px-4 gradient-bg">
    <div class="max-w-2xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-8 fade-in">
        <h1 class="text-4xl font-bold text-white mb-2">Can Contact Me</h1>
      </div>

      <!-- Form -->
      <form @submit.prevent="submitForm" class="bg-gray-900 rounded-2xl p-8 border border-gray-700 shadow-2xl fade-in">
        <!-- Name Field -->
        <div class="mb-6">
          <label class="block text-white text-sm font-medium mb-2">
            Name <span class="text-red-400">*</span>
          </label>
          <input
            v-model="form.name"
            type="text"
            class="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:ring-2 focus:ring-green-500 focus:outline-none focus:border-transparent transition-all placeholder-gray-400"
            :class="{ 'ring-2 ring-red-500 border-red-500': errors.name }"
            @input="clearError('name')"
            placeholder="Enter your full name"
            required
          />
          <p v-if="errors.name" class="text-red-400 text-sm mt-1">{{ errors.name }}</p>
        </div>

        <!-- Phone Number Field -->
        <div class="mb-6">
          <label class="block text-white text-sm font-medium mb-2">
            Phone Number <span class="text-red-400">*</span>
          </label>
          <input
            v-model="form.phone"
            type="tel"
            class="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:ring-2 focus:ring-green-500 focus:outline-none focus:border-transparent transition-all placeholder-gray-400"
            :class="{ 'ring-2 ring-red-500 border-red-500': errors.phone }"
            @input="clearError('phone')"
            placeholder="092378159"
            required
          />
          <p v-if="errors.phone" class="text-red-400 text-sm mt-1">{{ errors.phone }}</p>
        </div>

        <!-- Message Field -->
        <div class="mb-6">
          <label class="block text-white text-sm font-medium mb-2">
            Message <span class="text-red-400">*</span>
          </label>
          <div class="relative">
            <textarea
              v-model="form.message"
              rows="4"
              class="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:ring-2 focus:ring-green-500 focus:outline-none focus:border-transparent transition-all resize-none placeholder-gray-400"
              :class="{ 'ring-2 ring-red-500 border-red-500': errors.message }"
              @input="clearError('message')"
              placeholder="Tell us what you need help with..."
              maxlength="500"
              required
            ></textarea>
            <div class="flex justify-between items-center mt-2">
              <p class="text-gray-400 text-sm">Minimum 10 characters</p>
              <p class="text-gray-400 text-sm">{{ form.message.length }}/500</p>
            </div>
          </div>
          <p v-if="errors.message" class="text-red-400 text-sm mt-1">{{ errors.message }}</p>
        </div>

        <!-- Buttons -->
        <div class="flex gap-4">
          <button
            type="submit"
            :disabled="isLoading"
            class="flex-1 bg-green-600 hover:bg-green-700 disabled:bg-green-400 disabled:cursor-not-allowed text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 transform hover:scale-105 flex items-center justify-center"
          >
            <span v-if="!isLoading" class="flex items-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
              </svg>
              Send to Telegram
            </span>
            <span v-else class="flex items-center justify-center">
              <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </span>
          </button>
          <button
            type="button"
            @click="resetForm"
            class="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900 transform hover:scale-105 flex items-center justify-center"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
            </svg>
            Reset Form
          </button>
        </div>

        <!-- Success/Error Messages -->
        <transition name="fade">
          <div v-if="submitMessage" class="mt-4 p-4 rounded-lg flex items-center" 
               :class="submitMessage.type === 'success' ? 'bg-green-900 text-green-200' : 'bg-red-900 text-red-200'">
            <svg v-if="submitMessage.type === 'success'" class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
            <svg v-else class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path>
            </svg>
            <span>{{ submitMessage.text }}</span>
          </div>
        </transition>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TelegramContactForm',
  data() {
    return {
      form: {
        name: '',
        phone: '',
        message: ''
      },
      errors: {},
      isLoading: false,
      submitMessage: null,
      // Your Telegram bot configuration
      BOT_TOKEN: '7841625290:AAG-DqsUf4JEWIVR4U12brC6sT56qJ7Rymw',
      CHAT_ID: '6866163517'
    }
  },
  methods: {
    clearError(field) {
      if (this.errors[field]) {
        this.$delete(this.errors, field)
      }
      if (this.submitMessage) {
        this.submitMessage = null
      }
    },

    validateForm() {
      this.errors = {}

      // Name validation
      if (!this.form.name.trim()) {
        this.errors.name = 'Name is required'
      }

      // Phone validation - Cambodian format
      const phoneRegex = /^0\d{8,9}$/
      const cleanPhone = this.form.phone.replace(/[\s-]/g, '')
      if (!cleanPhone) {
        this.errors.phone = 'Phone number is required'
      } else if (!phoneRegex.test(cleanPhone)) {
        this.errors.phone = 'Please enter a valid phone number (e.g., 092378159)'
      }

      // Message validation
      if (!this.form.message.trim()) {
        this.errors.message = 'Message is required'
      } else if (this.form.message.trim().length < 10) {
        this.errors.message = 'Message must be at least 10 characters'
      }

      return Object.keys(this.errors).length === 0
    },

    async submitForm() {
      if (!this.validateForm()) {
        return
      }

      this.isLoading = true
      this.submitMessage = null

      try {
        const message = `
🔔 New Contact Form Submission

👤 Name: ${this.form.name}
📱 Phone: ${this.form.phone}
💬 Message: ${this.form.message}

📅 Submitted: ${new Date().toLocaleString()}
        `.trim()

        const response = await fetch(`https://api.telegram.org/bot${this.BOT_TOKEN}/sendMessage`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: this.CHAT_ID,
            text: message,
            parse_mode: 'HTML'
          })
        })

        if (response.ok) {
          this.submitMessage = {
            type: 'success',
            text: 'Message sent successfully! We will get back to you soon.'
          }
          this.resetForm()
        } else {
          throw new Error('Failed to send message')
        }
      } catch (error) {
        console.error('Error sending message:', error)
        this.submitMessage = {
          type: 'error',
          text: 'Failed to send message. Please try again later.'
        }
      } finally {
        this.isLoading = false
      }
    },

    resetForm() {
      this.form = {
        name: '',
        phone: '',
        message: ''
      }
      this.errors = {}
      this.submitMessage = null
    }
  }
}
</script>

<style scoped>
.gradient-bg {
  background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
}

.fade-in {
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  from { 
    opacity: 0; 
    transform: translateY(20px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
}

.fade-enter-active, .fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Custom animations and effects */
.transform:hover {
  transform: scale(1.02);
}

/* Focus states */
input:focus, textarea:focus {
  box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.1);
}

/* Loading spinner animation */
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.animate-spin {
  animation: spin 1s linear infinite;
}

/* Button hover effects */
button:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

/* Success/Error message animations */
.bg-green-900 {
  border-left: 4px solid #10b981;
}

.bg-red-900 {
  border-left: 4px solid #ef4444;
}
</style>