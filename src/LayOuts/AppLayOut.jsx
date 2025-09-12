import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../ui/NavBar'
import Footer from '../ui/Footer'

function AppLayOut() {
  return (
    <div>
        <NavBar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default AppLayOut
