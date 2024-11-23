<script>
import { useStore } from "../store/store";
import { addToCart } from "../composables/addToCart";
import { addQuanProduct} from "../composables/addQuantity"
import { remQuantity } from "../composables/remQuantity";
import notImg from "../assets/images/jpg/not-img.jpg"
export default {
    props: {
        product: {
           type: Object
        }
    },
    data() {
        return {
            store: useStore(),
            notImg,
            productInfo: {
                title: this.product.title,
                price: this.product.price,
                image: this.product.images[0],
                id: this.product.id,
                quantity: 1,
            }
        }
    },
    computed: {
        checkCart() {
            const item = this.store.cart.find((el) => el.id == this.product.id);
            if (item) {
                console.log(true)
                return item;
            } else {
                console.log(false)
                return false;
            }
        }
    },
    methods: {
        addCart() {
            addToCart(this.productInfo)
        },

        addQuan(item) {
            addQuanProduct(item)
        },

        remQuan(item) {
            remQuantity(item)
        }
    },
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
            <button v-if="!checkCart" @click="checkCart, addCart()"
                class="buy-now w-full py-2 rounded font-semibold bg-black border border-black text-gray-600 mt-4 flex flex-column justify-center cursor-pointer">
                <img src="../assets/images/svg/cart-icon-white.svg" alt="">
            </button>

            <div class="btns-add-and-rem-quan flex items-center gap-[11px] mt-[17px] pb-[4px]" v-if="checkCart">
                <button @click="addQuan(product)" class="pb-[4px] font-medium text-[25px] active:opacity-80 rounded-[3px] h-[32px] w-[50px] flex items-center justify-center bg-black text-white">+</button>
                <span class="font-medium text-center text-[18px] w-[20px]">{{ checkCart?.quantity }}</span>
                <button @click="remQuan(product)" class="pb-[4px] font-medium text-[25px] rounded-[3px] h-[32px] w-[50px] flex items-center justify-center bg-black text-white active:opacity-80">-</button>
            </div>
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

.btns-add-and-rem-quan {
    animation: anim-for-btn .3s forwards;
}

@keyframes anim-for-btn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
</style>