// import * as React from 'react';
// import { Button, CardMedia, Input, Typography } from '@mui/material'
// import { Box} from '@mui/system'
// import { styled } from '@mui/material/styles';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import PropTypes from 'prop-types'
// import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
// import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   '&:nth-of-type(odd)': {
//     backgroundColor: theme.palette.action.hover,
//   },
//   // hide last border
//   '&:last-child td, &:last-child th': {
//     border: 0,
//   },
// }));





// export default function CartTable(props) {
//     const {singleItem,cartProducts,removeItem,decQuant,increaseQuantityFromCart,id} = props
//   return (<>
// <TableContainer sx={{width:'80%',marginX:'auto',marginTop:'30px'}} component={Paper}>
//       <Table sx={{ minWidth: 700 }} aria-label="customized table">
//         <TableHead>
//           <TableRow>
//             <StyledTableCell>Product</StyledTableCell>
//             <StyledTableCell align="right">Title</StyledTableCell>
//             <StyledTableCell align="right">Category</StyledTableCell>
//             <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
//             <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
          
//             <StyledTableRow key='asd'>
//               <StyledTableCell component="th" scope="row">
//               <CardMedia
//                 component = "img"
//                 height="150px"
//                 width="100%"
//                 image={singleItem.product.image}
//                 />
//               </StyledTableCell>
//               <StyledTableCell align="right">{singleItem.product.title}</StyledTableCell>
//               <StyledTableCell align="right">{singleItem.product.category}</StyledTableCell>
//               <StyledTableCell align="right">{singleItem.product.price}</StyledTableCell>
//               <StyledTableCell align="right"><Box sx={{display:'flex'}}>
//             <Box  sx={{display:'flex', justifyContent:'space-between' }}>
//                 <Button onClick={()=>increaseQuantityFromCart(singleItem.product.id,singleItem.product.price)}> <ArrowUpwardOutlinedIcon /></Button>
//                 <Typography  variant='span'>{singleItem.qty}</Typography>
//                 <Button onClick={()=>decQuant(singleItem.product.id,singleItem.product.price,singleItem.qty)}><ArrowDownwardOutlinedIcon /> </Button>
//             </Box>
//             <Box>
//                 <Button onClick={()=>removeItem(id)} variant="danger">Remove</Button>
//             </Box>
//         </Box></StyledTableCell>
//             </StyledTableRow>
          
//         </TableBody>
//       </Table>
//     </TableContainer>
//     </>);
// }

// CartTable.propTypes={
//     singleItem: PropTypes.object,
//     cartProducts:PropTypes.object,
//     removeItem:PropTypes.func,
//     decQuant:PropTypes.func,
//     increaseQuantityFromCart:PropTypes.func,
//     id:PropTypes.number
// }