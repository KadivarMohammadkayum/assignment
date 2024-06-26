import React from 'react'
import { Content} from '../Data/Data'
import banner from '../Image/About-banner.jpg'

const Home = () => {
 return (
  <>
      <Content 
      image={banner} 
      title='Home' 
      heading={'Home'} 
      text1={'Quaerat debitis, vel, sapiente dicta sequi'} 
      text2={'labore porro pariatur harum expedita'} 
      link={'menu'}
      page={'home'}/>
    </>
 )
}

export default Home
