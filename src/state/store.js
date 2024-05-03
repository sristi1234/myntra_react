import { configureStore } from "@reduxjs/toolkit"
import cartSlice from "./store/cartSlice"
import productSlice from "./store/productSlice"




export const  store = configureStore({reducer: {
    cart : cartSlice,
    products : productSlice
}})