<template>
  <div v-if="product" class="min-h-screen pt-24 pb-16">
    <div class="container-custom">
      <!-- Back Button -->
      <button
        @click="$emit('navigate', 'shop')"
        class="flex items-center space-x-2 text-gray-600 hover:text-black mb-8 transition-colors"
      >
        <ArrowLeftIcon class="w-5 h-5" />
        <span>Back to Shop</span>
      </button>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Image Gallery -->
        <div class="space-y-4">
          <!-- Main Image -->
          <div class="glass-card aspect-[3/4] overflow-hidden rounded-2xl">
            <img
              :src="selectedImage"
              :alt="product.name"
              class="w-full h-full object-cover"
            />
          </div>

          <!-- Thumbnails -->
          <div class="grid grid-cols-4 gap-4">
            <button
              v-for="(image, index) in product.images"
              :key="index"
              @click="selectedImage = image"
              class="aspect-square rounded-lg overflow-hidden border-2 transition-all"
              :class="selectedImage === image ? 'border-black' : 'border-transparent hover:border-gray-300'"
            >
              <img
                :src="image"
                :alt="`${product.name} view ${index + 1}`"
                class="w-full h-full object-cover"
              />
            </button>
          </div>
        </div>

        <!-- Product Info -->
        <div class="space-y-6">
          <div>
            <h1 class="text-4xl md:text-5xl font-bold mb-4">{{ product.name }}</h1>
            <p class="text-3xl font-bold">₦{{ product.price.toLocaleString() }}</p>
          </div>

          <div class="border-t border-b border-gray-200 py-6">
            <p class="text-gray-700 leading-relaxed">{{ product.description }}</p>
          </div>

          <!-- Size Selection -->
          <div>
            <label class="block text-sm font-semibold mb-3">Select Size</label>
            <div class="flex flex-wrap gap-3">
              <button
                v-for="size in product.sizes"
                :key="size"
                @click="selectedSize = size"
                class="w-16 h-12 rounded-lg border-2 font-medium transition-all"
                :class="selectedSize === size
                  ? 'border-black bg-black text-white'
                  : 'border-gray-200 hover:border-gray-400'"
              >
                {{ size }}
              </button>
            </div>
          </div>

          <!-- Color Selection -->
          <div>
            <label class="block text-sm font-semibold mb-3">Select Color</label>
            <div class="flex flex-wrap gap-3">
              <button
                v-for="color in product.colors"
                :key="color"
                @click="selectedColor = color"
                class="px-6 py-3 rounded-lg border-2 font-medium transition-all"
                :class="selectedColor === color
                  ? 'border-black bg-black text-white'
                  : 'border-gray-200 hover:border-gray-400'"
              >
                {{ color }}
              </button>
            </div>
          </div>

          <!-- Quantity -->
          <div>
            <label class="block text-sm font-semibold mb-3">Quantity</label>
            <div class="flex items-center space-x-4">
              <button
                @click="quantity = Math.max(1, quantity - 1)"
                class="w-12 h-12 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors"
              >
                <MinusIcon class="w-5 h-5 mx-auto" />
              </button>
              <span class="text-xl font-semibold w-12 text-center">{{ quantity }}</span>
              <button
                @click="quantity++"
                class="w-12 h-12 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors"
              >
                <PlusIcon class="w-5 h-5 mx-auto" />
              </button>
            </div>
          </div>

          <!-- Add to Cart -->
          <div class="space-y-3 pt-4">
            <button
              v-if="product.inStock"
              @click="addToCart"
              class="w-full btn-primary flex items-center justify-center space-x-2"
              :disabled="!selectedSize || !selectedColor"
            >
              <ShoppingBagIcon class="w-5 h-5" />
              <span>Add to Cart</span>
            </button>
            <button
              v-else
              disabled
              class="w-full btn-primary opacity-50 cursor-not-allowed"
            >
              Out of Stock
            </button>

            <p v-if="!selectedSize || !selectedColor" class="text-sm text-gray-500 text-center">
              Please select size and color
            </p>
          </div>

          <!-- Product Details -->
          <div class="glass-card p-6 space-y-4">
            <div class="flex items-center justify-between">
              <span class="text-gray-600">Category</span>
              <span class="font-semibold">{{ product.category }}</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-gray-600">Availability</span>
              <span class="font-semibold" :class="product.inStock ? 'text-green-600' : 'text-red-600'">
                {{ product.inStock ? 'In Stock' : 'Out of Stock' }}
              </span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-gray-600">Shipping</span>
              <span class="font-semibold">Worldwide</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Success Message -->
      <transition name="fade">
        <div
          v-if="showSuccess"
          class="fixed bottom-8 right-8 glass-card p-6 flex items-center space-x-3 shadow-2xl"
        >
          <CheckCircleIcon class="w-6 h-6 text-green-600" />
          <span class="font-semibold">Added to cart!</span>
        </div>
      </transition>
    </div>
  </div>

  <!-- Product Not Found -->
  <div v-else class="min-h-screen pt-24 pb-16 flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-4xl font-bold mb-4">Product Not Found</h1>
      <button @click="$emit('navigate', 'shop')" class="btn-primary">
        Back to Shop
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import {
  ArrowLeftIcon,
  ShoppingBagIcon,
  MinusIcon,
  PlusIcon,
  CheckCircleIcon
} from '@heroicons/vue/24/outline';
import { router } from '../router/router';
import { useCart } from '../stores/cart';
import { products } from '../data';

const { addToCart: addToCartStore } = useCart();

const product = computed(() => {
  const id = router.getParams().id;
  return products.find(p => p.id === id);
});

const selectedImage = ref('');
const selectedSize = ref('');
const selectedColor = ref('');
const quantity = ref(1);
const showSuccess = ref(false);

onMounted(() => {
  if (product.value) {
    selectedImage.value = product.value.image;
  }
});

const addToCart = () => {
  if (!product.value || !selectedSize.value || !selectedColor.value) return;

  addToCartStore(product.value, selectedSize.value, selectedColor.value, quantity.value);

  showSuccess.value = true;
  setTimeout(() => {
    showSuccess.value = false;
  }, 3000);
};
</script>
