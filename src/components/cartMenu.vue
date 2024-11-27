<script>
import { useStore } from "../store/store"
import { removeItem } from "../composables/removeItem"
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue';
import { XMarkIcon } from '@heroicons/vue/24/outline';

import { addQuanProduct } from "../composables/addQuantity"
import { remQuantity } from "../composables/remQuantity";

export default {
  components: {
    Dialog,
    DialogPanel,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    XMarkIcon,
  },

  data() {
    return {
      store: useStore(),
    };
  },

  computed: {
    totalPrice() {
      return this.store.cart.reduce((total, el) => total + el.price * el.quantity, 0);
    }
  },

  methods: {
    removeProduct(item) {
      removeItem(item)
    },

    addQuan(item) {
      addQuanProduct(item)
    },

    remQuan(item) {
      remQuantity(item)
    }
  },
};
</script>

<template>
  <TransitionRoot as="template" :show="store.cartShow">
    <Dialog class="relative z-10" @close="store.cartShow = false">
      <TransitionChild as="template" enter="ease-in-out duration-500" enter-from="opacity-0" enter-to="opacity-100"
        leave="ease-in-out duration-500" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500/75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-hidden relative">
        <div class="absolute inset-0 overflow-hidden">
          <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <TransitionChild as="template" enter="transform transition ease-in-out duration-500 sm:duration-700"
              enter-from="translate-x-full" enter-to="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700" leave-from="translate-x-0"
              leave-to="translate-x-full">
              <DialogPanel class="pointer-events-auto w-screen max-w-md">
                <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                  <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                    <div class="flex items-start justify-between">
                      <DialogTitle class="text-lg font-medium text-gray-900">Savat</DialogTitle>

                      <div class="ml-3 flex h-7 items-center">
                        <button type="button" class="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                          @click="store.cartShow = false">
                          <span class="absolute -inset-0.5" />
                          <span class="sr-only">Close panel</span>
                          <XMarkIcon class="size-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>

                    <div class="mt-8">
                      <div class="flow-root">
                        <ul role="list" class="-my-6 divide-y divide-gray-200">
                          <h2 v-if="!store.cart.length" class="text-[20px] text-center mt-[60%]">
                            Savatda mahsulot yo'q!
                          </h2>
                          <li v-for="product in store.cart" :key="product.id" class="flex py-6">
                            <div class="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <img :src="product.image" :alt="product.imageAlt" class="size-full object-cover" />
                            </div>

                            <div class="ml-4 flex flex-1 flex-col">
                              <div>
                                <div class="flex justify-between text-base font-medium text-gray-900">
                                  <h3>
                                    <a :href="product.href">{{ product.title }}</a>
                                  </h3>
                                  <p class="ml-4 w-[100px]">{{ product.price * product.quantity }} uzs</p>
                                </div>
                                <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p>
                              </div>
                              <div class="btns-add-and-rem-quan flex items-center gap-[8px] pb-[4px]">
                                <button
                                  class="pb-[5px] font-medium text-[25px] rounded-[3px] h-[20px] w-[35px] flex items-center justify-center bg-black text-white active:opacity-80"
                                  @click="remQuan(product)">-</button>
                                <span class="font-medium text-center text-[15px] w-[20px]">{{ product.quantity
                                  }}</span>
                                <button
                                  class="pb-[4px] font-medium text-[20px] active:opacity-80 rounded-[3px] h-[20px] w-[35px] flex items-center justify-center bg-black text-white"
                                  @click="addQuan(product)">+</button>
                              </div>
                              <div class="flex flex-1 items-end justify-between text-sm">
                                <p class="text-gray-500">Qty {{ product.quantity }}</p>
                                <div class="flex">
                                  <button type="button" class="font-medium text-red-600 hover:text-red-500"
                                    @click="removeProduct(product)">Remove</button>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div class="flex justify-between text-base font-medium text-gray-900">
                      <p>Umumiy narx</p>
                      <p>{{ totalPrice }} uzs</p>
                    </div>
                    <p class="mt-0.5 text-sm text-gray-500">To'lov paytida hisoblangan mahsulotlar</p>
                    <div class="mt-6">
                      <a href="#"
                        class="flex items-center justify-center rounded-md border border-transparent bg-black px-6 py-3 text-base font-medium text-white shadow-sm hover:opacity-80">Sotib
                        olish</a>
                    </div>
                    <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
                      <p>
                        Yoki {{ ' ' }}
                        <button type="button" class="font-medium text-black" @click="store.cartShow = false">
                          Xarid qilishni davom ettirish
                          <span aria-hidden="true"> &rarr;</span>
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>