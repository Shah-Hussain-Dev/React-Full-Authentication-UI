
import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Registration from './pages/Registration'
import Dashboard from './pages/dashboard/Dashboard'
import PageNotFound from './pages/PageNotFound'
import ForgotPassword from './pages/ForgotPassword'
import ChangePassword from './pages/dashboard/ChangePassword'
import Layout from './pages/Layout'
import WelcomeDashboard from './pages/dashboard/WelcomeDashboard'
const App = () => {
  return (
    <BrowserRouter>
    {/* <Navbar/> */}
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/registration" element={<Registration/>}/>
      <Route path="/forgot-password" element={<ForgotPassword/>}/>
      </Route>
      <Route path="/dashboard" element={<Dashboard/>}>
      <Route path="/dashboard/home" element={<WelcomeDashboard/>}/>
      <Route path="/dashboard/change-password" element={<ChangePassword/>}/>
      </Route>
      <Route path="*" element={<PageNotFound/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App