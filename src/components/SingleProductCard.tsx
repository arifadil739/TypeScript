import React from 'react'
// import { useDispatch, useSelector } from "react-redux";
// import { addToCart, addQuantity, addTotalQuantity} from "../features/cartSlice";
// import { setProducts } from "../features/productSlice";
// import { products } from "../utils/data";
import PropTypes from 'prop-types'
import { Box,CardMedia,Typography ,Button, CardActionArea, CardActions, Card, CardContent } from '@mui/material'
const SingleProductCard = (props) => {
    const {product,findAProduct,addCart,addQty} = props
    // const dispatch = useDispatch();
    // dispatch(setProducts(products));
    // const cartProducts = useSelector((state) => state.cartProducts.cartProducts);

    // const addCart = (id , price, img) => {
    //     dispatch(addToCart({ id: id, qty: 1 , price:price }));
    //   };
    //     const findAProduct = (productID) => {
    //     const product = cartProducts.find((el) => el.id == productID);
    //     return product;
    //   };

    // const addQty = (productID, price)=>{
    //     dispatch(addQuantity([productID, price]))
    // }
  return (<>
<Card sx={{ maxWidth: 260 , marginBottom:"50px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300px"
          image={product.image}
          alt="green iguana"
          sx={{padding:"28px 28px"}}        
        />
        <CardContent>
          <Typography sx={{height:"80px"}} gutterBottom variant="h6" component="div">
            {product.title}
          </Typography>
          <Typography variant="h5" color="text.primary">
            ${product.price}
          </Typography>
          <Box sx={{display:"flex", justifyContent:"space-between"}}>
            <Typography variant="h6" color="text.secondary">
              {product.category}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              {findAProduct(product.id) ?  'x'+ findAProduct(product.id).qty : ''}
            </Typography>
          </Box>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
      {findAProduct(product.id) ?
        <Button onClick={()=> {addQty(product.id, product.price)}}
         variant='contained' sx={{width:'100%',backgroundColor:"secondary.light"}}>Added</Button>  :

        <Button onClick={() => {addCart(product,product.price)}}
        variant='contained' sx={{width:'100%',backgroundColor:"secondary.main"}}>Add to Cart</Button>
      }
  
      </CardActions>
    </Card>


        {/* <div className="four column wide">
              <div className="ui link cards">
                <div className="card">
                  <div className="image">
                    <img src={product.image} alt="img" />
                  </div>
                  <div className="content">
                    <div className="header">{product.title}</div>
                    <div className="meta price">$ {product.price}</div>
                    <div className="meta">{product.category}</div>&nbsp;
                    <span>{ 
                    findAProduct(product.id) ?  'x'+ findAProduct(product.id).qty : ''}</span>
                    <div> </div>
                  </div>
                  {findAProduct(product.id) ? (<button
                    onClick={() => {addQty(product.id, product.price)}} 
                    className="ui primary button"
                  >Added
                  </button>) : (<button
                    onClick={() => {
                      addCart(product,product.price);
                    }}
                    className="ui primary button"
                  >Add To Cart
                  </button>)}
                </div>
              </div>
            </div> */}
  </>)
}
SingleProductCard.propTypes = {
    product: PropTypes.object,
    findAProduct: PropTypes.func,
    addCart:PropTypes.func
}

export default SingleProductCard