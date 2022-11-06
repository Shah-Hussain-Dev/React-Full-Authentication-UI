import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const WelcomeDashboard = () => {
  return (
    <>
      <Grid item sm={12} md={9} className="dashboard-right" > 
    <Box component="form" display="flex" justifyContent="center" alignItems="center" flexDirection="column" className='welcome-text'>
    <Typography variant='h3' fontWeight="bold" sx={{mt:1}} className="animate__animated animate__zoomIn">Welcome to User Dashboard  </Typography>
    <img src="../images/dashboard.gif" alt="welcome dashboard" className='animate__animated animate__zoomIn'/>

    </Box>
    </Grid> 
    </>
  )
}

export default WelcomeDashboard