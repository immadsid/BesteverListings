import React from 'react'
import Plan from '../components/pricing/Plan'
import Price from '../components/pricing/Price'
import Newsletter from '../components/Newsletter'

const Pricing = () => {
  return (
    <div className="sm:mx-[183px] mx-[30px]">
        <Price />
        <Plan />
        <Newsletter />
    </div>
  )
}

export default Pricing