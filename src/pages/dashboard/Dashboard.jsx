import React,{useState} from 'react'
import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import { NavLink, Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import ChangePassword from './ChangePassword'
import 'react-toastify/dist/ReactToastify.css'
import Sidebar from '../../components/Sidebar';

const Dashboard = () => {
    const location = useLocation();
   
  return (
    <Grid container sx={{height:"100vh",width:"100%"}} >  
    <Sidebar/>
    <Outlet/>
   
  
    <ToastContainer autoClose={2000}/>
</Grid>
  )
}

export default Dashboard