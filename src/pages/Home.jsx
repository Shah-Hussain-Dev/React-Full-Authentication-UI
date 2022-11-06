import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { FaOpencart } from "react-icons/fa"
import { RiFingerprintLine } from "react-icons/ri"
import { NavLink } from 'react-router-dom'
const Home = () => {
  return (
        <Grid container sx={{height:"90vh",width:"100%"}}>  
            <Grid item sm={12} md={7} className="welcome-section animate__animated animate__zoomIn" >
            </Grid>
            <Grid item sm={12} md={5}   >
           <Box display="flex" justifyContent="center" alignItems="center" className='welcome-text ' flexDirection="column">
           <Typography variant='h4' fontWeight="bold"  className='animate__animated animate__fadeInUp'>Welcome to Quick-Kart <FaOpencart/></Typography>
           <Typography variant='p' fontWeight="bold"  className='animate__animated animate__fadeInUp'>Secure and trusted Shopping Website <RiFingerprintLine/></Typography>
           <img src="./images/logo.png" sx={{my:6}} className='animate__animated animate__fadeInUp'/>
           <Button variant='contained' sx={{my:3}} className='animate__animated animate__fadeInUp' component={NavLink} to="/registration" >Get Started</Button>
           </Box>
            </Grid>
        </Grid>
  )
}

export default Home