import React from 'react'
import logo from '../Image/logo-sm-white.png'
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import './Header.css'
import bg from '../Image/bg.jpg'
import { Button, Col, Row } from 'react-bootstrap';
import "../Components/Header.css"
 
const Footer = () => {
  return (
    <>
      <footer className='footer'>
        <img src={bg} alt="" className='bg-img' width={"100%"}/>
        <div className='container'>
          <div className="footer-top">
            <img src={logo} alt="" className='footer_logo w-25' />
            
          </div>
          <div className='spacer'></div>
          <div className="information">
            <Row className=''>
              <Col lg={4}>
                <h5>About us</h5>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque cupiditate dolorem deserunt, ad distinctio hic. Hic necessitatibus mollitia deserunt sequi.</p>
                <Button variant='link' className=''>OUR MENU</Button>
              </Col>
              <Col lg={4}>
                <h5>Contact info</h5>
                <ul>
                  <li>
                    <span className='label'>call</span>
                    <span className='text'> +91 4569382719</span>
                  </li>
                  <li>
                    <span className='label'>write</span>
                    <span className='text'> your.email.inbox@here.com</span>
                  </li>
                  <li>
                    <span className='label'>finds us</span>
                    <span className='text'> Canada, Toronto, North Avenue 31B</span>
                  </li>
                </ul>
                <Button variant='link' className=''>Contact us</Button>
              </Col>
              <Col lg={4}>
              <div className="social">
              <ul className='d-flex justify-content-around'>
                <li><FaInstagram/></li>
                <li><FaFacebookF/></li>
                <li><FaXTwitter/></li>
                <li><FaYoutube/></li>
              </ul>
            </div>
              </Col>
            </Row>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
