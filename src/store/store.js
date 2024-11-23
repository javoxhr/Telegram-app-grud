import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useStore = defineStore('user', () => {
  const cartShow = ref(false)
  const cart = ref([])
  return {
    cartShow,
    cart
  };
});
