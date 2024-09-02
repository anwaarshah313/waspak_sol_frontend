import React from 'react'
import HeroSection from './heroSection/HeroSection'
import Product from './ProductSection/Product'
import WhyUs from './WhyUsSection/WhyUs'
import Services from './ServicesSection/Services'
import Testimonials from './Testimonials/Testimonials'
import Test from '../../Test'

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <Product/>
      <WhyUs/>
      <Services/>
      <Testimonials/>
      {/* <Test/> */}
    </div>
  )
}
