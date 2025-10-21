<template>
  <div class="min-h-screen pt-24 pb-16">
    <div class="container-custom">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1 class="text-5xl md:text-6xl font-bold mb-4">Get In Touch</h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Form -->
        <div class="glass-card p-8">
          <h2 class="text-2xl font-bold mb-6">Send us a message</h2>

          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <label class="block text-sm font-semibold mb-2">Name</label>
              <input
                v-model="form.name"
                type="text"
                required
                class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                placeholder="Your name"
              />
            </div>

            <div>
              <label class="block text-sm font-semibold mb-2">Email</label>
              <input
                v-model="form.email"
                type="email"
                required
                class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label class="block text-sm font-semibold mb-2">Phone (optional)</label>
              <input
                v-model="form.phone"
                type="tel"
                class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                placeholder="+234 xxx xxx xxxx"
              />
            </div>

            <div>
              <label class="block text-sm font-semibold mb-2">Subject</label>
              <input
                v-model="form.subject"
                type="text"
                required
                class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                placeholder="How can we help?"
              />
            </div>

            <div>
              <label class="block text-sm font-semibold mb-2">Message</label>
              <textarea
                v-model="form.message"
                required
                rows="6"
                class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent transition-all resize-none"
                placeholder="Tell us more..."
              ></textarea>
            </div>

            <button type="submit" class="w-full btn-primary">
              Send Message
            </button>
          </form>

          <!-- Success Message -->
          <transition name="fade">
            <div
              v-if="showSuccess"
              class="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3"
            >
              <CheckCircleIcon class="w-6 h-6 text-green-600 flex-shrink-0" />
              <p class="text-green-800">Thank you! We'll get back to you soon.</p>
            </div>
          </transition>
        </div>

        <!-- Contact Info -->
        <div class="space-y-8">
          <!-- Info Cards -->
          <div class="glass-card p-6">
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-black rounded-xl flex items-center justify-center flex-shrink-0">
                <EnvelopeIcon class="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 class="font-bold mb-1">Email</h3>
                <p class="text-gray-600">hello@sweetomi.com</p>
                <p class="text-gray-600">support@sweetomi.com</p>
              </div>
            </div>
          </div>

          <div class="glass-card p-6">
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-black rounded-xl flex items-center justify-center flex-shrink-0">
                <PhoneIcon class="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 class="font-bold mb-1">Phone</h3>
                <p class="text-gray-600">+234 xxx xxx xxxx</p>
                <p class="text-sm text-gray-500 mt-1">Mon-Fri 9am-6pm WAT</p>
              </div>
            </div>
          </div>

          <div class="glass-card p-6">
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-black rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPinIcon class="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 class="font-bold mb-1">Location</h3>
                <p class="text-gray-600">Lagos, Nigeria</p>
                <p class="text-sm text-gray-500 mt-1">Serving customers worldwide</p>
              </div>
            </div>
          </div>

          <!-- Social Links -->
          <div class="glass-card p-6">
            <h3 class="font-bold mb-4">Follow Us</h3>
            <div class="flex space-x-4">
              <a href="#" class="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center hover:bg-gray-800 transition-colors">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                  <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" class="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center hover:bg-gray-800 transition-colors">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" class="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center hover:bg-gray-800 transition-colors">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- FAQ Link -->
          <div class="glass-card p-6 text-center">
            <h3 class="font-bold mb-2">Have a question?</h3>
            <p class="text-gray-600 mb-4">Check out our FAQ section for quick answers</p>
            <button class="btn-secondary">View FAQs</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  CheckCircleIcon
} from '@heroicons/vue/24/outline';

const form = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
});

const showSuccess = ref(false);

const handleSubmit = () => {
  // Here you would normally send the form data to your backend
  console.log('Form submitted:', form.value);

  // Show success message
  showSuccess.value = true;

  // Reset form
  form.value = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

  // Hide success message after 5 seconds
  setTimeout(() => {
    showSuccess.value = false;
  }, 5000);
};
</script>
