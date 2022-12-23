import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addQuantity} from "../features/cartSlice";
import productSlice, { setProducts } from "../features/productSlice";
import { products } from "../utils/data";
import SingleProductCard from "./SingleProductCard";

const ProductListing = () => {
   
  const dispatch = useDispatch();
  // dispatch(setProducts(products));
  
  const AllProducts = useSelector((state) => state.products.products);
  const cartProducts = useSelector((state) => state.cartProducts.cartProducts);
    const addCart = (product , price ) => {
        dispatch(addToCart({ product: product, qty: 1 , price:price }));
        
      };
    const addQty = (productID, price)=>{
        dispatch(addQuantity([productID, price]))
    }
    const findAProduct = (productID) => {
        const product = cartProducts?(cartProducts.find((el) => el.product.id == productID)):null;
        return product;
      };    
      
      useEffect(()=>{
        localStorage.setItem("CART", JSON.stringify(cartProducts))
    },[addToCart()])
      
  return (
    <>
    <Grid marginX="auto" sx={{marginTop:"30px", width:"80vw"}} container item spacing={1}>
        
    {AllProducts.map((product,id) => {
          return (
            <Grid  item xl={2.3} lg={3} md={4} sm={6} xs={12}>
            <SingleProductCard key={id} addQty={addQty} findAProduct={findAProduct} addCart={addCart} product={product}/>
            </Grid>
          );
        })
        }
        
    </Grid>

      {/* <div className="ui grid container">
       
      </div> */}
    </>
  );
};
// export const {addQty} = ProductListing
export default ProductListing;
