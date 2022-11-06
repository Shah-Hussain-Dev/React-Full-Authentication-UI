import React,{useState} from 'react'
import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
const Login = () => {
    const [user, setUser] = useState({
        email: '',
        password: '',
      
    })
    const navigate = useNavigate()
    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
        // console.log(user)
    }
    const onSubmit = (e) => {
        e.preventDefault()
       
        if(user.email && user.password){
           console.log("Login Success")
          
         
           toast.success("Login Success", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
          setTimeout(()=>{
            navigate('/dashboard')
          },3000)
    
        }else{
            console.log("All Fields are required!")
            toast.error("All Fields are required!", {
                position: toast.POSITION.BOTTOM_RIGHT,
                
              });
        }

    }
  return (
    <Grid container sx={{height:"90vh",width:"100%"}} className="login-container">  
   
    <Grid item sm={12} md={5} textAlign="center" px={6} className="login-form ">
 
   <Box component="form" display="flex" justifyContent="center" alignItems="center" className='welcome-text animate__animated animate__fadeInLeft' flexDirection="column">
     <img src="./images/logo.png" />
  
     <TextField onChange={handleChange} value={user.email} required margin="normal" name="email" label="Email" variant="outlined" fullWidth />
    <TextField onChange={handleChange} value={user.password} required margin="normal" name="password" label="Password" type="password" variant="outlined" fullWidth />
  
    <Button variant='contained' margin="normal" fullWidth onClick={onSubmit} sx={{ my: 3 }}>Submit</Button>
 <Button   margin="normal" component={NavLink} to="/forgot-password"  >Forgot Password ?</Button>

   </Box>
    </Grid>
    <Grid item sm={12} md={7} className="login animate__animated animate__fadeInRight">
    </Grid>
    <ToastContainer autoClose={2000}/>
</Grid>
  )
}

export default Login