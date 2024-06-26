import React from 'react'
import '../App.css'
import { Content} from '../Data/Data'
import banner from '../Image/About-banner.jpg'

const Blog = () => {
  return (
    <>
      <Content 
      image={banner} 
      title='about us' 
      heading={'Our Blog'} 
      text1={'Quaerat debitis, vel, sapiente dicta sequi'} 
      text2={'labore porro pariatur harum expedita'} 
      link={'home'}
      page={'blog'}/>
    </>
  )
}

export default Blog
