<template>
  <div class="min-h-screen pt-24 pb-16">
    <div class="container-custom">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-5xl md:text-6xl font-bold mb-4">Shop Collection</h1>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Explore our complete range of handcrafted African fashion
        </p>
      </div>

      <!-- Filters -->
      <div class="glass-card p-6 mb-12">
        <div class="flex flex-col md:flex-row items-center justify-between gap-4">
          <!-- Category Filter -->
          <div class="flex flex-wrap items-center gap-2">
            <button
              v-for="category in categories"
              :key="category"
              @click="selectedCategory = category"
              class="px-6 py-2 rounded-full transition-all duration-300"
              :class="selectedCategory === category
                ? 'bg-black text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100'"
            >
              {{ category }}
            </button>
          </div>

          <!-- Sort -->
          <select
            v-model="sortBy"
            class="px-4 py-2 rounded-full border border-gray-200 bg-white focus:ring-2 focus:ring-black focus:border-transparent"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Name: A-Z</option>
          </select>
        </div>
      </div>

      <!-- Products Grid -->
      <div v-if="filteredProducts.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <ProductCard
          v-for="product in filteredProducts"
          :key="product.id"
          :product="product"
          @click="viewProduct(product)"
        />
      </div>

      <!-- Empty State -->
      <div v-else class="text-center py-16">
        <div class="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <MagnifyingGlassIcon class="w-12 h-12 text-gray-400" />
        </div>
        <h3 class="text-2xl font-bold mb-2">No products found</h3>
        <p class="text-gray-600 mb-6">Try adjusting your filters</p>
        <button @click="selectedCategory = 'All'" class="btn-primary">
          View All Products
        </button>
      </div>

      <!-- Results Count -->
      <div v-if="filteredProducts.length > 0" class="text-center mt-12 text-gray-600">
        Showing {{ filteredProducts.length }} {{ filteredProducts.length === 1 ? 'product' : 'products' }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline';
import ProductCard from '../components/ProductCard.vue';
import { products, categories } from '../data';
import type { Product } from '../types';
import { router } from '../router/router';

const selectedCategory = ref('All');
const sortBy = ref('featured');

const filteredProducts = computed(() => {
  let filtered = products;

  // Filter by category
  if (selectedCategory.value !== 'All') {
    filtered = filtered.filter(p => p.category === selectedCategory.value);
  }

  // Sort
  const sorted = [...filtered];
  switch (sortBy.value) {
    case 'price-low':
      sorted.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      sorted.sort((a, b) => b.price - a.price);
      break;
    case 'name':
      sorted.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'featured':
      sorted.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
      break;
  }

  return sorted;
});

const viewProduct = (product: Product) => {
  router.navigate('product', { id: product.id });
};
</script>
