<template>
  <div class="product-card glass-card p-4 cursor-pointer group" @click="$emit('click', product)">
    <!-- Image Container -->
    <div class="aspect-[3/4] overflow-hidden rounded-xl mb-4 bg-gray-100">
      <img
        :src="product.image"
        :alt="product.name"
        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        loading="lazy"
      />
    </div>

    <!-- Product Info -->
    <div class="space-y-2">
      <div class="flex items-start justify-between">
        <h3 class="font-semibold text-lg line-clamp-2 flex-1">
          {{ product.name }}
        </h3>
      </div>

      <p class="text-gray-600 text-sm line-clamp-2">
        {{ product.description }}
      </p>

      <!-- Colors -->
      <div class="flex items-center space-x-2">
        <div
          v-for="(color, index) in product.colors.slice(0, 3)"
          :key="index"
          class="w-4 h-4 rounded-full border border-gray-300"
          :title="color"
          :style="{ backgroundColor: getColorHex(color) }"
        />
        <span v-if="product.colors.length > 3" class="text-xs text-gray-500">
          +{{ product.colors.length - 3 }}
        </span>
      </div>

      <!-- Price and Stock -->
      <div class="flex items-center justify-between pt-2">
        <span class="text-xl font-bold">
          ₦{{ product.price.toLocaleString() }}
        </span>
        <span
          v-if="!product.inStock"
          class="text-xs text-red-500 font-medium"
        >
          Out of stock
        </span>
      </div>
    </div>

    <!-- Quick Add Button (appears on hover) -->
    <button
      v-if="product.inStock"
      class="w-full mt-4 btn-primary opacity-0 group-hover:opacity-100 transition-opacity"
      @click.stop="$emit('quick-add', product)"
    >
      Quick Add
    </button>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '../types';

defineProps<{
  product: Product;
}>();

defineEmits<{
  (e: 'click', product: Product): void;
  (e: 'quick-add', product: Product): void;
}>();

const getColorHex = (colorName: string): string => {
  const colorMap: Record<string, string> = {
    'Indigo': '#4B5563',
    'Brown': '#92400E',
    'Green': '#065F46',
    'Multi-color': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'Gold': '#F59E0B',
    'Red': '#DC2626',
    'Royal Blue': '#1E40AF',
    'Black': '#000000',
    'White': '#FFFFFF',
    'Orange': '#EA580C',
    'Silver': '#D1D5DB',
    'Purple': '#7C3AED',
    'Blue': '#2563EB',
    'Yellow': '#EAB308',
    'Pink': '#EC4899',
    'Earth Brown': '#78350F',
    'Teal': '#0D9488',
  };

  return colorMap[colorName] || '#6B7280';
};
</script>
