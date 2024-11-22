<script>
import productCard from "./components/productCard.vue";
export default {
  components: {
    productCard
  },
  data() {
    return {
      
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="crds-wrp flex flex-wrap justify-center gap-[25px]">
      <productCard v-for="item in 20" :key="item"/>
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

@media screen and (max-width: 500px) {
  .crds-wrp {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
}
</style>