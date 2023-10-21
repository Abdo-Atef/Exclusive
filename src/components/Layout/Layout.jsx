import React from 'react'
import NavBar from './NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'

export default function Layout() {
  return <>
    <NavBar />
    <div className="container MainParent">
      <Outlet></Outlet>
    </div>
    <Footer />
  </>
}
