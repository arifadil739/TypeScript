import { createSlice } from "@reduxjs/toolkit"

const getLocalStorageData = ()=>{
    let localData = localStorage.getItem("CART")
    if(localData){
        return JSON.parse(localData)
    }else{
        return []
    }

}
const initialState = {
    // cartProducts:[],
    cartProducts: getLocalStorageData(),
    totalQuantity: 0,
    totalBillPrice:0
}
const cartSlice = createSlice({
    name : 'cartProducts',
    initialState,
    reducers:{
        addToCart: (state , action)=>{
            // state.cartProducts.push(action.payload)
            state.cartProducts = [...state.cartProducts, action.payload];
            const totalPrice = state.cartProducts.reduce((a,b)=>a+b.price,0)
            state.totalBillPrice = totalPrice
        },
        addQuantity: (state , action)=>{
        const isProduct = state.cartProducts.find((el)=> el.product.id == action.payload[0])
        if(isProduct){
        let findIndex = state.cartProducts.findIndex(el => (el.product.id == isProduct.product.id))
        let products = [...state.cartProducts]
        let show = products[findIndex].qty += 1
        products[findIndex].price = action.payload[1] * show
        state.cartProducts = products

        const totalPrice = state.cartProducts.reduce((a,b)=>a+b.price,0)
            state.totalBillPrice = totalPrice
    }
        },
        decreaseQuantity:(state , action)=>{
            const isProduct = state.cartProducts.find((el)=> el.product.id == action.payload[0])
            if(isProduct){
            let findIndex = state.cartProducts.findIndex(el => (el.product.id == isProduct.product.id))
            let products = [...state.cartProducts]
            let show = products[findIndex].qty -= 1

            products[findIndex].price = action.payload[1] * show
            state.cartProducts = products
            const totalPrice = state.cartProducts.reduce((a,b)=>a+b.price,0)
                state.totalBillPrice = totalPrice
            }
        },
        removeProduct : (state,action)=>{
            state.cartProducts = action.payload
            const totalPrice = state.cartProducts.reduce((a,b)=> a+b.price,0)
            state.totalBillPrice = totalPrice
            
        },
        
        clearAllProducts : (state,action)=>{
            state.cartProducts = action.payload
            state.totalBillPrice = 0
        },
        totalBill: (state,action)=>{
            state.totalBillPrice = action.payload
        }


    }
})

export const {addToCart,
              addQuantity,
              decreaseQuantity,
              addTotalQuantity,
              totalBill,
              removeProduct,
              clearAllProducts} = cartSlice.actions

export default cartSlice.reducer