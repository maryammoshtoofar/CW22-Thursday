import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./features/product";
import cartSlice from "./features/cart";

const store = configureStore({
  reducer: {
    products: productSlice,
    cart: cartSlice,
  },
});
export default store;
