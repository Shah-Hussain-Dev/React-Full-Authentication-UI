import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { NavLink } from 'react-router-dom'
const Registration = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        confirm_password: '',
    })
    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
        // console.log(user)
    }
    const onSubmit = (e) => {
        e.preventDefault()
       
        if(user.name && user.email && user.password && user.confirm_password){
            if(user.password === user.confirm_password){
                console.log(user)
                setUser({     name: '',
                old_password: '',
                new_password: '',
                confirm_password: '',})
                toast.success("Registration  successfully !", {
                    position: toast.POSITION.BOTTOM_LEFT,
                    
                  });
            }else{
                console.log("Password and Confirm Password does not match")
                toast.warning("Password and Confirm Password does not match", {
                    position: toast.POSITION.BOTTOM_LEFT,
                    
                  });
            }
    
        }else{
            console.log("fill all the fields")
            toast.error("fill all the fields", {
                position: toast.POSITION.BOTTOM_LEFT,
                
              });
        }

    }
    return (
        <>
            {/* <Grid item sm={12} md={7} className="change-password">
            </Grid> */}
            <Grid item sm={12} md={7}  px={6}  mt={3} sx={{margin:" auto"}}>

                <Box component="form" display="flex" justifyContent="start" alignItems="center" className='welcome-text' flexDirection="column">
                    <img src="../images/logo.png" className='logo-image-dashboard animate__animated animate__fadeInRight' />
                    <Typography variant='h4' fontWeight="bold" sx={{my:2}} className="animate__animated animate__fadeInRight">Change Your Password  </Typography>
                    <TextField onChange={handleChange} value={user.old_password} required margin="normal" name="old_password" label="Old Password" type="password" variant="outlined" fullWidth className='animate__animated animate__fadeInRight' />
                    <TextField onChange={handleChange} value={user.new_password} required margin="normal" name="new_password" label="New Password" type="password" variant="outlined" fullWidth className='animate__animated animate__fadeInRight' />
                    <TextField onChange={handleChange} value={user.confirm_password} required margin="normal" name="confirm_password" label="Confirm Password" type="password" variant="outlined" fullWidth className='animate__animated animate__fadeInRight' />
                    <Button variant='contained' margin="normal" fullWidth className='animate__animated animate__fadeInRight' onClick={onSubmit} sx={{ my: 3 }}>Submit</Button>
                </Box>
                <ToastContainer autoClose={2000}/>
            </Grid>
        </>
    )
}

export default Registration