import React from 'react'
import Navbars from '../Navbar/navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/footer'

function Layout() {
  return (
    <>
    <Navbars/>
    <Outlet/>
    <Footer/>
    </>

  )
}

export default Layout