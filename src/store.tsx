import { configureStore } from "@reduxjs/toolkit";
import CartItems from "./components/CartItems";
import productReducer from './features/productSlice' 
import cartReducer from './features/cartSlice'
export const store = configureStore({
    reducer:{
        products : productReducer,
        cartProducts : cartReducer   
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
