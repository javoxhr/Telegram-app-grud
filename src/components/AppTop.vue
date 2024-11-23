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
        <div class="category-and-cart-btn-wrapper flex items-center justify-between">
            <div class="category-btns-wrapper flex items-center gap-[10px]">
                <button class="p-[5px] border-2 border-black rounded-[5px]">Burgers</button>
                <button class="p-[5px] border-2 border-black rounded-[5px]">Drinks</button>
                <button class="p-[5px] border-2 border-black rounded-[5px]">Desserts</button>
            </div>
            <button @click="store.cartShow = true" class="relative w-[45px] h-[45px] flex items-center justify-center bg-black text-white font-bold rounded-[15px]"><img src="../assets/images/svg/cart-icon-white.svg" alt=""><span class="w-[20px] h-[20px] rounded-full bg-red-500 flex items-center justify-center absolute top-[-8px] right-[-4px]">{{ store.cart.length }}</span></button>
        </div>
    </div>
</template>

<style></style>