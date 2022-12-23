import React from 'react'
import { Button, CardMedia, Typography, useMediaQuery } from '@mui/material'
import { Box} from '@mui/system'
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import PropTypes from 'prop-types'
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import DeleteIcon from '@mui/icons-material/Delete';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      [theme.breakpoints.down('md')]: {
        fontSize:8,
        padding:0
      },
    },
  }));
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&.MuiTableCell-root':{
      // fontSize:8
    },
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
const TableRows = (props) => {
  const matches375px = useMediaQuery('(max-width:375px)')
  const matches600px = useMediaQuery('(max-width:600px)')
  
    const {singleItem,cartProducts,removeItem,decQuant,increaseQuantityFromCart,id} = props
  return (<>
  
  <StyledTableRow key={id}>
              <StyledTableCell sx={{maxWidth:'120px'}} component="th" scope="row">
              <CardMedia sx={{width:'100%',minHeight:"100px"}}
                component = "img"
                
                image={singleItem.product.image}
                />
              </StyledTableCell>
              <StyledTableCell   align="center">{singleItem.product.title}</StyledTableCell>
              <StyledTableCell align="right">{singleItem.product.category}</StyledTableCell>
              <StyledTableCell align="right">{singleItem.product.price}</StyledTableCell>
              <StyledTableCell align="right"><Box sx={{display:'flex'}}>
            <Box  sx={{display:'flex', justifyContent:'space-between' }}>
                <Button onClick={()=>increaseQuantityFromCart(singleItem.product.id,singleItem.product.price)}> <ArrowUpwardOutlinedIcon /></Button>
                <Typography sx={{paddingTop:'7px'}}  variant='span'>{singleItem.qty}</Typography>
                <Button onClick={()=>decQuant(singleItem.product.id,singleItem.product.price,singleItem.qty)}><ArrowDownwardOutlinedIcon /> </Button>
            </Box>
            <Box>
                <Button sx={matches600px ? {fontSize:'8px', width:'70px'} : {}} onClick={()=>removeItem(id)} variant="contained" startIcon={<DeleteIcon sx={matches600px ? {fontSize:'12px'} : {fontSize:'20px'}}  />}>Remove</Button>
            </Box>
        </Box></StyledTableCell>
            </StyledTableRow>
  </>)
}
TableRows.propTypes={
    singleItem: PropTypes.object,
    cartProducts:PropTypes.object,
    removeItem:PropTypes.func,
    decQuant:PropTypes.func,
    increaseQuantityFromCart:PropTypes.func,
    id:PropTypes.number
}
export default TableRows