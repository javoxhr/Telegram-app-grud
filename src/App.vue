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
  <div>
    <div class="flex flex-wrap justify-center gap-[25px]">
      <productCard v-for="item in 20" :key="item"/>
    </div>
  </div>
</template>

<style>

</style>