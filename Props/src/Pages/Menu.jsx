import React from 'react'
import { Content } from '../Data/Data'
import banner from '../Image/About-banner.jpg'
// import menu from '../Data/menudata.json'

const Menu = () => {
  return (
    <>
      <Content
        image={banner}
        title={'menu'}
        heading={'Discover Our menu'}
        text1={'Quaerat debitis, vel, sapiente dicta sequi'}
        text2={'labore porro pariatur harum expedita'}
        link={'home'}
        page={'menu'} />
      </>
  )
}

export default Menu
