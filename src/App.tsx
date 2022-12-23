import Header from "./components/Header";
import ProductListing from "./components/ProductListing";
import './App.css'
import { Routes, Route } from "react-router-dom";
import Cart from "./components/CartItems";
import { useDispatch, useSelector } from "react-redux";
import AddNewProducts from "./components/AddNewProducts";
import { products } from "./utils/data";
import { setProducts } from "./features/productSlice";
import { theme } from './material-themes/Theme';
import { ThemeProvider } from '@mui/material/styles';
// import CartTable from './material-components/CartTable'
function App() {
  const dispatch = useDispatch();
  dispatch(setProducts(products));
  const len = useSelector(state=>state.cartProducts.cartProducts)    
  return (<>
  <ThemeProvider theme={theme}> 
  <div className="App">

    <Header len={len?len.length:0}/>
    <Routes>
      <Route index path="/listing" element={<ProductListing />}/> 
      <Route path="/cart" element={<Cart />}/> 
      <Route path="/add" element={<AddNewProducts />}/>
      {/* <Route path="/crd" element={<Cart />}/> */}
      {/* <Route path='/table' element={<CartTable />} /> */}
      
    </Routes>
    
  </div>
  </ThemeProvider>
  </>)
}
export default App;
