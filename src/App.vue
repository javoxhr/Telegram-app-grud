<script>
export default {
  data() {
    return {
      
    }
  }
}
</script>

<template>
  <div class="app mt-[20px]">
    <div class="container">
      <router-view/>
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