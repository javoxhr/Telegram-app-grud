import { useStore } from "../store/store";
import { toRaw } from "vue";

export const removeItem = (product) => {
    const store = useStore();
    const rawCart = toRaw(store.cart);
    const itemIndex = rawCart.findIndex(el => el.id === product.id);

    if (itemIndex !== -1) {
        store.cart[itemIndex].quantity = 0;
        store.cart.splice(itemIndex, 1);
        localStorage.setItem("cart", JSON.stringify(store.cart));
    }
};
