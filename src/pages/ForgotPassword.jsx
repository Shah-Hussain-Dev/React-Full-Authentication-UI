import React from 'react'
import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'

const ForgotPassword = () => {
  return (
    <Grid container sx={{height:"90vh",width:"100%"}}>  

    <Grid item sm={12} md={5} textAlign="center" px={6} >
 
   <Box component="form" display="flex" justifyContent="center" alignItems="center" className='welcome-text' flexDirection="column">
     <img src="./images/logo.png" />
     <Typography variant='h4' fontWeight="bold" sx={{my:2}}>Enter your registered email  </Typography>
   <TextField required margin="normal" id="email" label="Email" variant="outlined" fullWidth />
  
 <Button variant='contained'  margin="normal" fullWidth sx={{my:3}}>Send</Button>
 <Button   margin="normal" component={NavLink} to="/"  >Back to Home</Button>

   </Box>
    </Grid>
    <Grid item sm={12} md={7} className="forgot-password">
    </Grid>
</Grid>
  )
}

export default ForgotPassword