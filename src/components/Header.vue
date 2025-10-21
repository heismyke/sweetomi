<template>
  <header class="fixed top-0 left-0 right-0 z-50 glass-nav">
    <nav class="container-custom py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <button
          @click="navigateTo('home')"
          class="text-2xl font-bold tracking-tight hover:opacity-70 transition-opacity"
        >
          SWEETOMI
        </button>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <button
            @click="navigateTo('home')"
            class="btn-ghost"
            :class="{ 'text-black font-semibold': currentView === 'home' }"
          >
            Home
          </button>
          <button
            @click="navigateTo('shop')"
            class="btn-ghost"
            :class="{ 'text-black font-semibold': currentView === 'shop' }"
          >
            Shop
          </button>
          <button
            @click="navigateTo('about')"
            class="btn-ghost"
            :class="{ 'text-black font-semibold': currentView === 'about' }"
          >
            About
          </button>
          <button
            @click="navigateTo('contact')"
            class="btn-ghost"
            :class="{ 'text-black font-semibold': currentView === 'contact' }"
          >
            Contact
          </button>
        </div>

        <!-- Cart Icon -->
        <div class="flex items-center space-x-4">
          <button
            @click="navigateTo('cart')"
            class="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ShoppingBagIcon class="w-6 h-6" />
            <span
              v-if="itemCount > 0"
              class="absolute -top-1 -right-1 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center"
            >
              {{ itemCount }}
            </span>
          </button>

          <!-- Mobile Menu Button -->
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <Bars3Icon v-if="!mobileMenuOpen" class="w-6 h-6" />
            <XMarkIcon v-else class="w-6 h-6" />
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <transition name="fade">
        <div v-if="mobileMenuOpen" class="md:hidden mt-4 pt-4 border-t border-gray-200">
          <div class="flex flex-col space-y-4">
            <button
              @click="navigateTo('home')"
              class="text-left py-2 hover:text-black transition-colors"
              :class="{ 'text-black font-semibold': currentView === 'home' }"
            >
              Home
            </button>
            <button
              @click="navigateTo('shop')"
              class="text-left py-2 hover:text-black transition-colors"
              :class="{ 'text-black font-semibold': currentView === 'shop' }"
            >
              Shop
            </button>
            <button
              @click="navigateTo('about')"
              class="text-left py-2 hover:text-black transition-colors"
              :class="{ 'text-black font-semibold': currentView === 'about' }"
            >
              About
            </button>
            <button
              @click="navigateTo('contact')"
              class="text-left py-2 hover:text-black transition-colors"
              :class="{ 'text-black font-semibold': currentView === 'contact' }"
            >
              Contact
            </button>
          </div>
        </div>
      </transition>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { ShoppingBagIcon, Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';
import { router } from '../router/router';
import { useCart } from '../stores/cart';
import type { ViewName } from '../types';

const { itemCount } = useCart();
const currentView = router.state.currentView;
const mobileMenuOpen = ref(false);

const navigateTo = (view: ViewName) => {
  router.navigate(view);
  mobileMenuOpen.value = false;
};
</script>
