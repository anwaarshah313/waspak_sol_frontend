import React from 'react'
import HeroSection from './heroSection/HeroSection'
import Product from './ProductSection/Product'
import WhyUs from './WhyUsSection/WhyUs'
import Services from './ServicesSection/Services'

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <Product/>
      <WhyUs/>
      <Services/>
    </div>
  )
}
