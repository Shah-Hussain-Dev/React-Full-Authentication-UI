import { Box, Button, Grid, Typography } from '@mui/material'

import React from 'react'
import { NavLink } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <Grid container >
      <Grid item className='page-not-found' sx={{height:"80vh",width:"100%",my:4}}>
     <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column"> 
     <img src="./images/not-found.gif"/>  
     <Typography variant='h4' fontWeight="bold" sx={{my:2}}>Something Went Wrong  </Typography>

     <Button   margin="normal" variant='contained' component={NavLink} to="/login">Back to Website</Button>

     </Box>
       </Grid>
    </Grid>
  )
}

export default PageNotFound