import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { FaOpencart } from "react-icons/fa"
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <Box sx={{ flexGrow: 1 }} className="navbar-menu">
            <AppBar position="static" sx={{zIndex:99}}>
                <Toolbar>
                 
                    <Typography variant="h6"  sx={{ flexGrow: 1, }}>
                        <NavLink style={{backgroundColor:"transparent"}}  to="/" ><FaOpencart /> Quick-Kart</NavLink>
                    </Typography>
                <Button color="inherit" to="/"  style={({ isActive }) => { return { backgroundColor: isActive ? '#00008B' : '' } }} component={NavLink}  end>Home</Button>
                <Button color="inherit" to="/login"  style={({ isActive }) => { return { backgroundColor: isActive ? '#00008B' : '' } }} component={NavLink}>Login</Button>
                <Button color="inherit" to="/registration"  style={({ isActive }) => { return { backgroundColor: isActive ? '#00008B' : '' } }} component={NavLink}>Registration</Button>

            </Toolbar>
        </AppBar>
  </Box >
  )
}

export default Navbar