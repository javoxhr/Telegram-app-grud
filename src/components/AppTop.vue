<script>
import {useStore} from "../store/store"

export default {
    data() {
        return {
            store: useStore(),
        }
    }
}
</script>

<template>
    <div>
        <h1 class="text-[30px] text-center pb-[20px] mt-[-10px] font-medium">Web App Name</h1>
        <div class="category-and-cart-btn-wrapper flex items-center justify-between">
            <div class="category-btns-wrapper flex items-center gap-[10px]">
                <router-link to="/" class="p-[5px] bg-black text-white border-2 border-black rounded-[5px]">Kiyimlar</router-link>
                <router-link to="/" class="p-[5px] border-2 border-black rounded-[5px]">Smartfonalar</router-link>
                <router-link to="/" class="p-[5px] border-2 border-black rounded-[5px]">Soatlar</router-link>
            </div>
            <button @click="store.cartShow = true" :class="{'text-[10px]': store.cart.length > 9}" class="relative w-[45px] text-[12px] h-[45px] flex items-center justify-center bg-black text-white font-bold rounded-[15px]"><img src="../assets/images/svg/cart-icon-white.svg" alt=""><span class="w-[20px] h-[20px] rounded-full bg-red-500 flex items-center justify-center absolute top-[-8px] right-[-4px]">{{ store.cart.length }}</span></button>
        </div>
    </div>
</template>

<style>
.category-btns-wrapper {
    width: 285px;
    overflow-x: auto;
    overflow-y: hidden;
    padding-right: 10px;
    border-radius: 5px;
}

.category-btns-wrapper::-webkit-scrollbar {
    display: none;
}
</style>