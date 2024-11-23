import { useStore } from "../store/store";
import { toRaw } from "vue";

export const addQuanProduct = (product)=> {
    const store = useStore()
    const item = toRaw(store.cart).find(el => el.id == product.id)
    let index = store.cart.indexOf(item)
    if(store.cart[index].quantity < 10) {
        store.cart[index].quantity++
        console.log('help')
    }
    localStorage.setItem("cart", JSON.stringify(store.cart))
}