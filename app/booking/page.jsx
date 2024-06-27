import React from 'react'
import Booking from '../_components/Booking'
import Header from "../_components/Header";
import Footer from "../_components/Footer";

const page = () => {
  return (
    <div className='bg-semiblack h-screen w-full'>
      <Header />

      <Booking />
      <Footer />
    </div>
  )
}

export default page