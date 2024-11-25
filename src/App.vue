<script>
import { useStore } from './store/store'
import productCard from "./components/productCard.vue";
import cartMenu from "./components/cartMenu.vue";
import AppTop from './components/AppTop.vue';
export default {
  components: {
    productCard,
    cartMenu,
    AppTop
  },
  data() {
    return {
      products: {},
      store: useStore()
    }
  },

  methods: {
    getProduct() {
      fetch("https://api.escuelajs.co/api/v1/products").then((res) => res.json()).then((data) => {
        this.products = data
      })
    }
  },

  mounted() {
    this.getProduct()
  }
}
</script>

<template>
  <div class="app mt-[20px]">
    <div class="container">
      <AppTop />
      <cartMenu />

      <div class="crds-wrp flex flex-wrap justify-center gap-[25px] mt-[20px]">
        <productCard v-for="item in products" :key="item" :product="item" />
      </div>
    </div>
  </div>
</template>

<style>
html {
  background: #fff;
}

.container {
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 20px;

}

.crds-wrp {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px;
}

@media screen and (max-width: 500px) {
  .crds-wrp {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    justify-content: center;
  }
}
</style>