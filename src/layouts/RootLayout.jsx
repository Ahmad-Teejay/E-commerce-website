import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

function RootLayout() {
  return (
    <div>
        <Navbar/>
        <div className='flex justify-center mt-5'>

        <Outlet/>

        </div>
        <Footer />
    </div>
  )
}

export default RootLayout