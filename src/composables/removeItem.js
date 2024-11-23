import { useStore } from "..//store/store";
import { toRaw } from "vue";

export const removeItem = (product) => {
    const store = useStore();
    const item = toRaw(store.cart).find(el => el.id == product.id);

    if (!item) {
        console.log("Item not found in cart");
        return;
    }

    let index = store.cart.indexOf(item);
    if (store.cart[index].quantity == 1) {
        store.cart.splice(index, 1);
    } else {
        store.cart[index].quantity--;
    }

    localStorage.setItem("cart", JSON.stringify(store.cart));
}
