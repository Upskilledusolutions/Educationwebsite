import React from 'react'
import Navbar from './Homepage/Navbar'
import Footer from './Homepage/Footer'
import Advertisement from './Homepage/Advertisement'
import Header from './Homepage/Header'

export default function Layout({children}) {
  return (
    <div>
        <Advertisement />
        <Header />
        <Navbar />
        {children}
        <Footer/>
    </div>
  )
}
