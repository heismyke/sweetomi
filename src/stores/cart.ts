import { reactive, computed } from 'vue';
import type { Cart, Product } from '../types';

const cart = reactive<Cart>({
  items: [],
  total: 0,
});

const updateTotal = () => {
  cart.total = cart.items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
};

export const useCart = () => {
  const addToCart = (product: Product, selectedSize: string, selectedColor: string, quantity: number = 1) => {
    const existingItem = cart.items.find(
      item =>
        item.product.id === product.id &&
        item.selectedSize === selectedSize &&
        item.selectedColor === selectedColor
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.items.push({
        product,
        quantity,
        selectedSize,
        selectedColor,
      });
    }

    updateTotal();
    saveCart();
  };

  const removeFromCart = (index: number) => {
    cart.items.splice(index, 1);
    updateTotal();
    saveCart();
  };

  const updateQuantity = (index: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(index);
    } else if (cart.items[index]) {
      cart.items[index].quantity = quantity;
      updateTotal();
      saveCart();
    }
  };

  const clearCart = () => {
    cart.items = [];
    cart.total = 0;
    saveCart();
  };

  const saveCart = () => {
    localStorage.setItem('sweetomi-cart', JSON.stringify(cart));
  };

  const loadCart = () => {
    const saved = localStorage.getItem('sweetomi-cart');
    if (saved) {
      const parsed = JSON.parse(saved);
      cart.items = parsed.items || [];
      updateTotal();
    }
  };

  const itemCount = computed(() => {
    return cart.items.reduce((sum, item) => sum + item.quantity, 0);
  });

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    loadCart,
    itemCount,
  };
};
