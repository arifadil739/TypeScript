import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';

const Header = (props) => {
  const {len} = props
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return <>
    <AppBar sx={{boxSizing:"border-box"}} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              cursor:"pointer"
            }}
          >FakeShop
            
            
            </Typography>
          
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Link to='/listing'><Button  sx={{ my: 2, color: 'white', display: 'block' }}>Products</Button></Link>
            <Link to='/add'><Button sx={{ my: 2, color: 'white', display: 'block' }}>Add Products</Button></Link>            
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open Cart">
              <IconButton sx={{ p: 0 }}>
                <Link  to = "/cart">
                <Box sx={{color:'white',marginRight:"50px"}}>{len}
                    <AddShoppingCartOutlinedIcon  fontSize="large" sx={{color: "white"}}/>
                </Box>
                </Link>
                
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  

    {/* <div className="ui fixed menu">
        <div className="ui container center d-flex justify-content-between">
            <h2>FakeShop</h2>
            <Link to='/add' className="btn btn-primary mb-2">Add Products</Link>
        </div>
        <div>{len}</div>
        <Link to='/cart'><i className="shopping cart icon big "></i></Link>
    </div> */}
  </>;
};
Header.propTypes = {
  Header: PropTypes.number
}

export default Header;
