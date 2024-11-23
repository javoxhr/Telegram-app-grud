<script>
import notImg from "../assets/images/jpg/not-img.jpg"
export default {
    data() {
        return {
            notImg
        }
    },
    props: {
        product: {
            Object
        }
    }
}
</script>

<template>
    <div>
        <div class="product flex flex-col items-start w-44 rounded-xl p-4 relative"
            style="box-shadow: 1px 3px 7px 5px #ececec;">
            <div class="image-wrap flex items-center justify-center w-full">
                <img class="item-img w-24" v-if="product?.images[1]" :src="product?.images[0]" alt="">
                <img class="item-img w-24" v-if="!product?.images[1]" :src="notImg" alt="">
            </div>
            <div class="text-wrapper flex flex-col gap-1 mt-2">
                <h3 class="product-title text-[20px] font-medium">{{ product?.title }}</h3>
                <span class="product-price font-medium text-[18px]">18 000 uzs</span>
            </div>
            <button
                class="buy-now w-full py-2 rounded font-semibold bg-transparent border border-black text-gray-600 mt-4 flex flex-column justify-center cursor-pointer">
                <img src="../assets/images/svg/cart-icon.svg" alt="">
            </button>
        </div>
    </div>
</template>

<style>
.product-title {
    width: 120px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.item-img {
    width: 100%;
    border-radius: 6px;
}
</style>