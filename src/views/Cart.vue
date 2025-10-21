<template>
  <div class="min-h-screen pt-24 pb-16">
    <div class="container-custom">
      <h1 class="text-4xl md:text-5xl font-bold mb-12">Shopping Cart</h1>

      <!-- Cart Items -->
      <div v-if="cart.items.length > 0" class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Items List -->
        <div class="lg:col-span-2 space-y-6">
          <div
            v-for="(item, index) in cart.items"
            :key="index"
            class="glass-card p-6"
          >
            <div class="flex gap-6">
              <!-- Image -->
              <div class="w-32 h-40 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                <img
                  :src="item.product.image"
                  :alt="item.product.name"
                  class="w-full h-full object-cover"
                />
              </div>

              <!-- Details -->
              <div class="flex-1 flex flex-col justify-between">
                <div>
                  <h3 class="font-bold text-lg mb-2">{{ item.product.name }}</h3>
                  <p class="text-gray-600 text-sm mb-3">{{ item.product.description }}</p>
                  <div class="flex gap-4 text-sm">
                    <span class="text-gray-600">
                      <span class="font-semibold">Size:</span> {{ item.selectedSize }}
                    </span>
                    <span class="text-gray-600">
                      <span class="font-semibold">Color:</span> {{ item.selectedColor }}
                    </span>
                  </div>
                </div>

                <div class="flex items-center justify-between mt-4">
                  <!-- Quantity Controls -->
                  <div class="flex items-center space-x-3">
                    <button
                      @click="updateQuantity(index, item.quantity - 1)"
                      class="w-8 h-8 rounded border border-gray-200 hover:bg-gray-100 transition-colors"
                    >
                      <MinusIcon class="w-4 h-4 mx-auto" />
                    </button>
                    <span class="w-8 text-center font-semibold">{{ item.quantity }}</span>
                    <button
                      @click="updateQuantity(index, item.quantity + 1)"
                      class="w-8 h-8 rounded border border-gray-200 hover:bg-gray-100 transition-colors"
                    >
                      <PlusIcon class="w-4 h-4 mx-auto" />
                    </button>
                  </div>

                  <!-- Price and Remove -->
                  <div class="flex items-center gap-6">
                    <span class="text-xl font-bold">
                      ₦{{ (item.product.price * item.quantity).toLocaleString() }}
                    </span>
                    <button
                      @click="removeFromCart(index)"
                      class="text-gray-400 hover:text-red-600 transition-colors"
                    >
                      <TrashIcon class="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Order Summary -->
        <div class="lg:col-span-1">
          <div class="glass-card p-6 sticky top-24">
            <h2 class="text-2xl font-bold mb-6">Order Summary</h2>

            <div class="space-y-4 mb-6">
              <div class="flex justify-between">
                <span class="text-gray-600">Subtotal</span>
                <span class="font-semibold">₦{{ cart.total.toLocaleString() }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Shipping</span>
                <span class="font-semibold">Calculated at checkout</span>
              </div>
              <div class="border-t border-gray-200 pt-4 flex justify-between text-lg">
                <span class="font-bold">Total</span>
                <span class="font-bold">₦{{ cart.total.toLocaleString() }}</span>
              </div>
            </div>

            <button class="w-full btn-primary mb-3">
              Proceed to Checkout
            </button>
            <button
              @click="$emit('navigate', 'shop')"
              class="w-full btn-secondary"
            >
              Continue Shopping
            </button>

            <!-- Trust Badges -->
            <div class="mt-6 pt-6 border-t border-gray-200 space-y-3">
              <div class="flex items-center gap-3 text-sm text-gray-600">
                <ShieldCheckIcon class="w-5 h-5 flex-shrink-0" />
                <span>Secure checkout</span>
              </div>
              <div class="flex items-center gap-3 text-sm text-gray-600">
                <TruckIcon class="w-5 h-5 flex-shrink-0" />
                <span>Free shipping over ₦50,000</span>
              </div>
              <div class="flex items-center gap-3 text-sm text-gray-600">
                <ArrowPathIcon class="w-5 h-5 flex-shrink-0" />
                <span>30-day return policy</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty Cart -->
      <div v-else class="text-center py-16">
        <div class="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <ShoppingBagIcon class="w-16 h-16 text-gray-400" />
        </div>
        <h2 class="text-3xl font-bold mb-4">Your cart is empty</h2>
        <p class="text-gray-600 mb-8">Start adding beautiful pieces to your collection</p>
        <button @click="$emit('navigate', 'shop')" class="btn-primary">
          Explore Collection
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  ShoppingBagIcon,
  MinusIcon,
  PlusIcon,
  TrashIcon,
  ShieldCheckIcon,
  TruckIcon,
  ArrowPathIcon
} from '@heroicons/vue/24/outline';
import { useCart } from '../stores/cart';

const { cart, updateQuantity, removeFromCart } = useCart();
</script>
