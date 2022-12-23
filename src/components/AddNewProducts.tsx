import React, { useState } from 'react'
import { Box, MenuItem, Typography , Select , InputLabel , FormControl, Button } from '@mui/material'
import InputField from '../material-components/InputField'
import { nanoid } from "@reduxjs/toolkit";
import { display, styled } from '@mui/system';
import { json, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addNewProduct } from '../features/productSlice';
import axios from 'axios'

const FormBox = styled(Box)({
  width : '30vw',
  marginTop : '50px',
  display: 'flex',
  flexDirection: 'column'
  
})

const AddNewProducts = () => {
  const navigate = useNavigate();
  const [error,setError] = useState()
 
  const [product,setProduct] = useState([])
  const [tempText,setTempText] = useState({
    id : nanoid(),
    title : "",
    price : "",
    description : "",
    category : "",
    image : ""
  })

  const handleChange = (e)=>{
    const value = e.target.value
    const name = e.target.name

    setTempText((preValue)=>{
      return{
        ...preValue , [name] : value
      }
    })
  }
  const dispatch = useDispatch()
  const handleSubmit = (e)=>{
    e.preventDefault() 
    if((tempText.title==""||tempText.price==""||tempText.description==""||tempText.category==""||tempText.image=="") ){
      alert("Empty Fields")
      // setError(true)
    } else {
      dispatch(addNewProduct(tempText))
      navigate('/listing')

      const response  = axios.post('/products',tempText)
      console.log(response)
    } 
  }
        
  

  return (
    <>
    <Typography  sx={{width:'25vw', marginTop:'100px'}} marginX='auto' variant='h3'>Add a new Product</Typography>
    
    <FormBox  marginX='auto' component="form">
         <InputField label={"Title"} name={'title'} value={tempText.title} handleChange={handleChange}  />
         <InputField label={"Price"} name={'price'} value={tempText.price} handleChange={handleChange}  />
         <InputField label={"Description"} name={'description'} value={tempText.description} handleChange={handleChange}  />
         <FormControl sx={{marginBottom:"20px"}} variant='standard'>
          <InputLabel>Category</InputLabel>
          <Select variant='standard' name='category' value={tempText.category} label="Category" onChange={handleChange}>
            <MenuItem  value="Men's Clothing">Men's Clothing</MenuItem>
            <MenuItem value="Jewellery">Jewellery</MenuItem>
            <MenuItem value="Electronics">Electronics</MenuItem>
            <MenuItem value="Kids">Kids</MenuItem>
          </Select>
        </FormControl>
         <InputField label={"Image"} name={'image'} value={tempText.image} handleChange={handleChange}  />
        <Button onClick={handleSubmit} type='submit'  sx={{marginTop: '20px'}} variant='contained'>Submit</Button>
    </FormBox>
    

      {/* <div className="new-prd">
        <h1 className="fw-bold text-black mb-5">Add A Product</h1>
        <form onSubmit={handleSubmit} type ="submit">
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input  style={{border:"1px solid green"}} className={`form-control ${tempText.title =="" ? "error" : "success"}`}  name="title" value={tempText.title} onChange={handleChange} placeholder="Enter Title" />
            {error&&<small style={{color:'red'}}>Empty Field</small>}
          </div>

          <div className="mb-3">
            <label className="form-label">Price</label>
            <input className={`form-control ${tempText.price ? "success" : "error"}`}  name="price" value={tempText.price}  onChange={handleChange} placeholder="Enter Price"  />
            {error&&<small style={{color:'red'}}>Empty Field</small>}
          </div>

          <div className="mb-3">
            <label className="form-label">Description</label>
            <input className={`form-control ${tempText.description ? "success" : "error"}`}   name="description" value={tempText.description} onChange={handleChange} type="text" placeholder="Enter Description" />
            {error&&<small style={{color:'red'}}>Empty Field</small>}
          </div>

          <div className="mb-3">
          <label className="form-label">Select Category</label>
          <select className={`form-control ${tempText.category ? "success" : "error"}`}  onChange={handleChange} name="category" >
            <option value={tempText.category} selected>Open this select menu</option>
            <option value="Men's Clothing">Men's Clothing</option>
            <option value="Jewellery">Jewellery</option>
            <option value="Electronics">Electronics</option>
            <option value="Kids">Kids</option>
          </select>
          {error&&<small style={{color:'red'}}>Empty Field</small>}
          </div>

          <div className="mb-3">
            <label className="form-label">Image</label>
            <input className={`form-control ${tempText.image ? "success" : "error"}`}  name="image" value={tempText.image} onChange={handleChange} placeholder="https://" type="text" />
            {error&&<small style={{color:'red'}}>Empty Field</small>}
          </div>
          

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div> */}
    
     </>
  );
};

export default AddNewProducts;
