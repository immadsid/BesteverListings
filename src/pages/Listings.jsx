import React from 'react'
import Header from '../components/listings/Header'
import HeroSection from '../components/listings/HeroSection'
import Sidebar from '../components/listings/Sidebar'

const Listings = () => {
  return (
    <div>
      <Header />
      <div className='flex mt-10'>
        <Sidebar />
        <HeroSection />
      </div>
    </div>
  )
}

export default Listings