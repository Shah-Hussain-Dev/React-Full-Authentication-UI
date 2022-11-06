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
                email: '',
                password: '',
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
        <Grid container sx={{ height: "90vh", width: "100%" }}>
            <Grid item sm={12} md={7} className="registration animate__animated animate__fadeInLeft"  >
            </Grid>
            <Grid item sm={12} md={5} textAlign="center" px={6} >

                <Box component="form" display="flex" justifyContent="center" alignItems="center" className='welcome-text' flexDirection="column">
                    <img src="./images/logo.png" className='logo-image animate__animated animate__fadeInRight' />
                    <TextField onChange={handleChange} value={user.name}
                        name="name"
                        label="Name"
                        type="text" required margin="normal" variant="outlined" fullWidth className="animate__animated animate__fadeInRight"  />
                    <TextField onChange={handleChange} value={user.email} required margin="normal" name="email" label="Email" variant="outlined" fullWidth className="animate__animated animate__fadeInRight" />
                    <TextField onChange={handleChange} value={user.password} required margin="normal" name="password" label="Password" type="password" variant="outlined" fullWidth className="animate__animated animate__fadeInRight" />
                    <TextField onChange={handleChange} value={user.confirm_password} required margin="normal" name="confirm_password" label="Confirm Password" type="password" variant="outlined" fullWidth className="animate__animated animate__fadeInRight" />
                    <Button variant='contained' margin="normal" fullWidth className="animate__animated animate__fadeInRight" onClick={onSubmit} sx={{ my: 3 }}>Submit</Button>
                    <Button margin="normal" component={NavLink} to="/login"  className='animate__animated animate__fadeInRight'>Already have an Account?</Button>
                </Box>
                <ToastContainer autoClose={2000}/>
            </Grid>
        </Grid>
    )
}

export default Registration