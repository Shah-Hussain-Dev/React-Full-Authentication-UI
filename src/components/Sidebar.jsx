import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
     <Grid item sm={12} md={3} textAlign="center" px={6} className="dashboard-left" sx={{height:"100%"}}>
   <Box component="form" display="flex" justifyContent="start" alignItems="center" className='welcome-text' flexDirection="column" sx={{marginTop:'0px'}}>
   <Typography variant='h5' fontWeight="bold" sx={{my:2}}>Hi User Name </Typography>
   <Button color="inherit" to="/dashboard/home"  style={({ isActive }) => { return { backgroundColor: isActive ? '#00008B' : '' } }} component={NavLink} fullWidth sx={{color:"#fff",mb:"20px"}} >Dashboard</Button>
   <Button color="inherit" to="/dashboard/change-password"  style={({ isActive }) => { return { backgroundColor: isActive ? '#00008B' : '' } }} component={NavLink} fullWidth sx={{color:"#fff",mb:"20px"}}>Change Password</Button>
   <Button color="inherit" to="/" component={NavLink} fullWidth sx={{color:"#fff",mb:"20px"}} >Logout</Button>
   {/* <Button margin="normal" component={NavLink} style={({ isActive }) => { return { backgroundColor: isActive ? '#00008B' : '' } }} to="/dashboard/change-password" fullWidth sx={{color:"#fff"}}>Change Password</Button> */}
   </Box>
    </Grid>
    </>
  )
}

export default Sidebar