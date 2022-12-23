import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addQuantity, clearAllProducts, decreaseQuantity, removeProduct, totalBill, updateCart } from "../features/cartSlice";
import CartTable from "../material-components/CartTable";
import CartItemCard from "./CartItemCard";

import { Button, CardMedia, Input, Typography, useMediaQuery } from '@mui/material'
import { Box} from '@mui/system'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import PropTypes from 'prop-types'
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import TableRows from "../material-components/TableRows";



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));


const Cart = () => {
  const matches375px = useMediaQuery('(max-width:375px)')
  const matches900px = useMediaQuery('(max-width:900px)')
  const dispatch = useDispatch()
  const cartProducts = useSelector((state)=>state.cartProducts.cartProducts)
  const allProducts = useSelector((state)=> state.cartProducts)
  const totalPrice = useSelector((state)=> state.cartProducts.totalBillPrice)

  const increaseQuantityFromCart = (productID,price)=>{
    dispatch(addQuantity([productID,price]))
  }
  const decQuant = (productID,price,qty)=>{ 
    if(qty>1){
      dispatch(decreaseQuantity([productID,price]))
    }    
  }
  const removeItem = (productID)=>{
    const updatedCart = cartProducts.filter((singleElement , index)=>{
      return productID !== index
    })
    dispatch(removeProduct(updatedCart))
  }
  
  
  const items = cartProducts.map((singleItem,id)=>{
    return(<>

      <TableRows key={id} id={id} singleItem={singleItem} cartProducts={cartProducts} removeItem={removeItem}  decQuant={decQuant} increaseQuantityFromCart={increaseQuantityFromCart} />
          {/* <CartTable key={id} id={id} singleItem={singleItem} cartProducts={cartProducts} removeItem={removeItem}  decQuant={decQuant} increaseQuantityFromCart={increaseQuantityFromCart} /> */}
          {/* <CartItemCard key={id} id={id} singleItem={singleItem} cartProducts={cartProducts} removeItem={removeItem}  decQuant={decQuant} increaseQuantityFromCart={increaseQuantityFromCart} /> */}
          {/* <hr className="my-4" /> */}
        </>)
        
  })

  return ( <>
          <TableContainer  sx={{ width:`${matches900px||matches375px?'100vw':'80vw'}` ,marginX:'auto',marginTop:'30px'}} component={Paper}>
              <Table  aria-label="customized table">
                <TableHead >
                  <TableRow   >
                    <StyledTableCell  align="center" >Product</StyledTableCell>
                    <StyledTableCell  align="center">Title</StyledTableCell>
                    <StyledTableCell align="center">Category</StyledTableCell>
                    <StyledTableCell align="right">Rate</StyledTableCell>
                    <StyledTableCell align="center">Inc/Dec</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                    {items}
                </TableBody>
              </Table>
          </TableContainer>
          <Box marginX='auto' sx={{width:'75%', display:'flex', justifyContent:'space-between'}}>
            <Link to='/listing'><Button sx={{marginTop:'10px'}} variant="outlined">Back To Shop</Button></Link>
            <Typography sx={{marginTop:'5px'}}>Total Price: {totalPrice}</Typography>
          </Box>                            

    </>
  );
};

export default Cart;