import React from 'react'
import { Content } from '../Data/Data'
import banner from '../Image/About-banner.jpg'

const Shop = () => {
  return (
    <>
     <Content 
      image={banner} 
      title='about us' 
      heading={'Story of our restaurant'} 
      text1={'Quaerat debitis, vel, sapiente dicta sequi'} 
      text2={'labore porro pariatur harum expedita'} 
      link={'home'}
      page={'abous us'}/>
    </>
  )
}

export default Shop
