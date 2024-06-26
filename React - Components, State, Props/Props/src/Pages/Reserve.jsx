import React from 'react'
import { Content } from '../Data/Data'
import banner from '../Image/About-banner.jpg'

const Reserve = () => {
  return (
    <>
      <Content 
      image={banner} 
      title='table reservation' 
      heading={'Reservation'} 
      text1={'Quaerat debitis, vel, sapiente dicta sequi'} 
      text2={'labore porro pariatur harum expedita'} 
      link={'home'}
      page={'reservation'}/>
    </>
  )
}

export default Reserve
