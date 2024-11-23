import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useStore = defineStore('user', () => {
  const cartShow = ref(false)

  return {
    cartShow
  };
});
