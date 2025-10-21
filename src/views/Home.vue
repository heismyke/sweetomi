<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative h-screen flex items-center justify-center overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-5">
        <div class="absolute inset-0" style="background-image: url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"></div>
      </div>

      <div class="container-custom relative z-10 text-center">
        <div class="animate-slide-up">
          <h1 class="hero-text mb-6 text-gradient">
            African Heritage<br />
            Modern Elegance
          </h1>
          <p class="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Handcrafted fashion celebrating the artistry and beauty of African design
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button @click="$emit('navigate', 'shop')" class="btn-primary">
              Explore Collection
            </button>
            <button @click="scrollToFeatured" class="btn-secondary">
              Featured Pieces
            </button>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDownIcon class="w-8 h-8 text-gray-400" />
      </div>
    </section>

    <!-- Featured Products -->
    <section ref="featuredSection" class="section-padding bg-gray-50">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4">Featured Collection</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of handcrafted African fashion pieces
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProductCard
            v-for="product in featuredProducts"
            :key="product.id"
            :product="product"
            @click="viewProduct(product)"
          />
        </div>

        <div class="text-center mt-12">
          <button @click="$emit('navigate', 'shop')" class="btn-primary">
            View All Products
          </button>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="section-padding">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div class="space-y-6">
            <h2 class="text-4xl md:text-5xl font-bold">Our Story</h2>
            <p class="text-lg text-gray-600 leading-relaxed">
              Sweetomi is more than a fashion brand. We celebrate African heritage through
              exquisite handcrafted designs that blend traditional artistry with contemporary elegance.
            </p>
            <p class="text-lg text-gray-600 leading-relaxed">
              Each piece is carefully crafted with authentic African fabrics including Ankara,
              Adire, Kente, and Aso Oke, telling a unique story of culture, tradition, and beauty.
            </p>
            <button @click="$emit('navigate', 'about')" class="btn-secondary">
              Learn More About Us
            </button>
          </div>

          <div class="glass-card aspect-square rounded-3xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800"
              alt="African Fashion"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4">Why Choose Sweetomi</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="glass-card p-8 text-center">
            <div class="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-6">
              <SparklesIcon class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-bold mb-3">Authentic Craftsmanship</h3>
            <p class="text-gray-600">
              Each piece is handcrafted using traditional techniques passed down through generations
            </p>
          </div>

          <div class="glass-card p-8 text-center">
            <div class="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-6">
              <HeartIcon class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-bold mb-3">Made with Love</h3>
            <p class="text-gray-600">
              Every design is created with passion, celebrating the beauty of African culture
            </p>
          </div>

          <div class="glass-card p-8 text-center">
            <div class="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-6">
              <TruckIcon class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-bold mb-3">Worldwide Shipping</h3>
            <p class="text-gray-600">
              We deliver our beautiful creations to fashion lovers around the globe
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { ChevronDownIcon, SparklesIcon, HeartIcon, TruckIcon } from '@heroicons/vue/24/outline';
import ProductCard from '../components/ProductCard.vue';
import { products } from '../data';
import type { Product } from '../types';
import { router } from '../router/router';

const featuredSection = ref<HTMLElement | null>(null);

const featuredProducts = computed(() => products.filter(p => p.featured));

const scrollToFeatured = () => {
  featuredSection.value?.scrollIntoView({ behavior: 'smooth' });
};

const viewProduct = (product: Product) => {
  router.navigate('product', { id: product.id });
};
</script>
