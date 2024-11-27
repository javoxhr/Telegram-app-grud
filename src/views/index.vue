<script>
import { useStore } from '../store/store'
import productCard from "../components/productCard.vue";
import cartMenu from "../components/cartMenu.vue";
import AppTop from '../components/AppTop.vue';
import api from "../server/api"
export default {
    components: {
        productCard,
        cartMenu,
        AppTop,
    },
    data() {
        return {
            products: {},
            store: useStore()
        }
    },

    methods: {
        getProducts() {
            api.getproducts().then((res) => {
                this.products = res.data
                console.log(res)
            })
        }
    },

    created() {
        this.getProducts()
    }
}
</script>

<template>
    <div class="app mt-[20px]">
        <AppTop />
        <cartMenu />
        <div class="crds-wrp flex flex-wrap justify-center gap-[25px] mt-[20px]">
            <productCard v-for="item in products" :key="item" :product="item" />
        </div>
    </div>
</template>