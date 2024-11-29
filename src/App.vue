<script>
export default {
  data() {
    return {

    }
  },

  methods: {
    scrollToTop() {
      const scrollToTopButton = document.getElementById('scrollToTop');

      function toggleButtonVisibility() {
        if (window.scrollY > 100) {
          scrollToTopButton.style.display = 'block';
        } else {
          scrollToTopButton.style.display = 'none';
        }
      }

      scrollToTopButton.addEventListener('click', function () {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      });

      window.addEventListener('scroll', toggleButtonVisibility);
    }
  },

  mounted() {
    this.scrollToTop()
  }
}
</script>

<template>
  <div class="app mt-[20px]">
    <button id="scrollToTop" style="display: none;"
      class="w-[40px] flex items-center justify-center rounded-full fixed right-[13px] bottom-[13px] z-10 pb-[3px]  h-[40px] bg-black text-white font-medium text-[25px]"><img
        src="./assets/images//svg/arrow.svg" alt=""></button>
    <div class="container">
      <router-view />
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
  padding: 0 10px;

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

#scrollToTop {
  animation: got-top .2s forwards;
}

@keyframes got-top {
  from {
    right: -20px;
  }
  to {
    right: 13px;
  }
}
</style>