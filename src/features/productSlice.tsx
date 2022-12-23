import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { products } from "../utils/data";


interface IProduct {
    id: number;
    name: string;
    price: number;
    description: string;
    price_from: string;
    price_to: string;
}

type InitialState = {
    products: IProduct[];
}

const initialState:InitialState = {
    products : []
}
const fetchAllProducts = products
const productSlice = createSlice({  
    name : "products",
    initialState,
    reducers: {
        setProducts: (state , action: PayloadAction<IProduct[]>)=>{
            state.products = action.payload
        },
        addNewProduct : (state,action : PayloadAction<IProduct>)=>{
            state.products = [...state.products,action.payload]
            console.log(state.products)
        } 
    }
})
export const  {setProducts, addNewProduct} = productSlice.actions 
export default productSlice.reducer