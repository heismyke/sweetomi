<template>
  <div class="min-h-screen pt-24 pb-16">
    <!-- Hero Section -->
    <section class="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div class="container-custom text-center">
        <h1 class="text-5xl md:text-7xl font-bold mb-6 text-gradient">About Sweetomi</h1>
        <p class="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
          Celebrating African heritage through exquisite handcrafted fashion
        </p>
      </div>
    </section>

    <!-- Story Section -->
    <section class="section-padding">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div class="glass-card aspect-square rounded-3xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800"
              alt="African Fashion Design"
              class="w-full h-full object-cover"
            />
          </div>

          <div class="space-y-6">
            <h2 class="text-4xl font-bold">Our Story</h2>
            <p class="text-lg text-gray-700 leading-relaxed">
              Sweetomi was born from a passion for preserving and celebrating the rich traditions
              of African craftsmanship. Founded in Africa, our brand represents more than just
              fashion—it's a celebration of heritage, culture, and the timeless artistry passed
              down through generations.
            </p>
            <p class="text-lg text-gray-700 leading-relaxed">
              Every piece in our collection is thoughtfully designed and handcrafted using authentic
              African fabrics including Ankara, Adire, Kente, Aso Oke, and traditional batik prints.
              We work directly with skilled artisans who pour their expertise and love into every stitch.
            </p>
            <p class="text-lg text-gray-700 leading-relaxed">
              Our mission is to bring the beauty of African fashion to the world while supporting
              local communities and preserving traditional crafting techniques for future generations.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4">Our Values</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            The principles that guide everything we create
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="glass-card p-8">
            <div class="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-6">
              <HeartIcon class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-2xl font-bold mb-4">Authenticity</h3>
            <p class="text-gray-700 leading-relaxed">
              We honor traditional African craftsmanship and use only authentic fabrics and
              techniques that have been perfected over centuries.
            </p>
          </div>

          <div class="glass-card p-8">
            <div class="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-6">
              <SparklesIcon class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-2xl font-bold mb-4">Quality</h3>
            <p class="text-gray-700 leading-relaxed">
              Each piece is meticulously handcrafted with attention to every detail, ensuring
              exceptional quality that stands the test of time.
            </p>
          </div>

          <div class="glass-card p-8">
            <div class="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-6">
              <UsersIcon class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-2xl font-bold mb-4">Community</h3>
            <p class="text-gray-700 leading-relaxed">
              We support local artisan communities, providing fair wages and helping preserve
              traditional crafts for future generations.
            </p>
          </div>

          <div class="glass-card p-8">
            <div class="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-6">
              <GlobeAltIcon class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-2xl font-bold mb-4">Sustainability</h3>
            <p class="text-gray-700 leading-relaxed">
              We prioritize eco-friendly practices and sustainable sourcing to protect our
              planet while creating beautiful fashion.
            </p>
          </div>

          <div class="glass-card p-8">
            <div class="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-6">
              <StarIcon class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-2xl font-bold mb-4">Excellence</h3>
            <p class="text-gray-700 leading-relaxed">
              We strive for excellence in every aspect of our business, from design to
              customer service, ensuring a premium experience.
            </p>
          </div>

          <div class="glass-card p-8">
            <div class="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-6">
              <BookOpenIcon class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-2xl font-bold mb-4">Heritage</h3>
            <p class="text-gray-700 leading-relaxed">
              Each design tells a story, connecting modern fashion with ancient traditions
              and celebrating Africa's rich cultural tapestry.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding">
      <div class="container-custom">
        <div class="glass-card p-12 md:p-16 text-center rounded-3xl">
          <h2 class="text-4xl md:text-5xl font-bold mb-6">Experience African Elegance</h2>
          <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover our curated collection of handcrafted African fashion pieces
          </p>
          <button @click="$emit('navigate', 'shop')" class="btn-primary">
            Explore Collection
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import {
  HeartIcon,
  SparklesIcon,
  UsersIcon,
  GlobeAltIcon,
  StarIcon,
  BookOpenIcon
} from '@heroicons/vue/24/outline';
</script>
