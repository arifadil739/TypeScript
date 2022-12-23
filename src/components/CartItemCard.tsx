import { Button, CardMedia, Input, Typography } from '@mui/material'
import { Box, styled } from '@mui/system'
import React from 'react'
import PropTypes from 'prop-types'
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';

const CartProductCard = styled(Box)({
    width:"85%",
    display : "grid",
    gridTemplateColumns: "1fr 2fr 1fr 1fr 1fr"
})
const CartItemCard = (props) => {
    const {singleItem,cartProducts,removeItem,decQuant,increaseQuantityFromCart,id} = props 
    console.log(singleItem)
  return (<>



    <CartProductCard sx={{display: 'flex',justifyContent: 'space-between',alignItems: 'center', width:"70%"}} marginX='auto' >
        <Box>
            <CardMedia sx={{marginLeft:'10px'}}
            component = "img"
            height="150px"
            width="100%"
            image={singleItem.product.image}
            />
        </Box>
        <Box sx={{width:"150px"}} >{singleItem.product.title}</Box>
        <Box>{singleItem.product.category}</Box>
        <Box>{singleItem.product.price}</Box>
        <Box sx={{display:'flex'}}>
            <Box  sx={{display:'flex', justifyContent:'space-between' }}>
                <Button onClick={()=>increaseQuantityFromCart(singleItem.product.id,singleItem.product.price)}> <ArrowUpwardOutlinedIcon /></Button>
                <Typography sx={{marginTop:'8px'}} variant='span'>{singleItem.qty}</Typography>
                <Button onClick={()=>decQuant(singleItem.product.id,singleItem.product.price,singleItem.qty)}><ArrowDownwardOutlinedIcon /> </Button>
            </Box>
            <Box>
                <Button onClick={()=>removeItem(id)} variant="contained" startIcon={<DeleteIcon />}>Remove</Button>
            </Box>
        </Box>
    </CartProductCard>
  </>)
}
CartProductCard.propTypes={
    singleItem: PropTypes.object,
    cartProducts:PropTypes.object,
    removeItem:PropTypes.func,
    decQuant:PropTypes.func,
    increaseQuantityFromCart:PropTypes.func,
    id:PropTypes.number
}
export default CartItemCard