<template>
    <div id="app" class="min-h-screen bg-white">
        <Header />

        <main>
            <component :is="currentView" @navigate="handleNavigate" />
        </main>

        <Footer @navigate="handleNavigate" />
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import { router } from "./router/router";
import { useCart } from "./stores/cart";
import type { ViewName } from "./types";

// Components
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

// Views
import Home from "./views/Home.vue";
import Shop from "./views/Shop.vue";
import ProductDetail from "./views/ProductDetail.vue";
import Cart from "./views/Cart.vue";
import About from "./views/About.vue";
import Contact from "./views/Contact.vue";

const { loadCart } = useCart();

const views: Record<ViewName, any> = {
    home: Home,
    shop: Shop,
    product: ProductDetail,
    cart: Cart,
    about: About,
    contact: Contact,
};

const currentView = computed(() => views[router.state.currentView]);

const handleNavigate = (
    view: ViewName,
    params: Record<string, string> = {},
) => {
    router.navigate(view, params);
};

onMounted(() => {
    loadCart();
});
</script>

<style>
/* Global styles are in style.css */
</style>
