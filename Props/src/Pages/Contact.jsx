import React from 'react'
import { Content } from '../Data/Data'
import banner from '../Image/About-banner.jpg'

const Contact = () => {

  return (
    <>
      <Content
        image={banner}
        title='contact'
        heading={'Get in touch'}
        text1={'Quaerat debitis, vel, sapiente dicta sequi'}
        text2={'labore porro pariatur harum expedita'}
        link={'home'}
        page={'cotnact'} />

      <section>
        <div className='container1 position-relative bg-white'>
          <div className='contect_content'>
            <div className="contact">
              <div className="container">
                <div className="row">
                  <div className="col-12 text-center">
                    <p className='title content_title'>have a question?</p>
                    <h3 className='heading1'>Contact Us</h3>
                    <p className='text'>Quaerat debitis, vel, sapiente dicta sequi labore porro pariatur harum expedita.</p>
                  </div>
                  <div className="col-lg-12 text-center">
                    <div className='text-black'>
                      <p>contact</p>
                      <h2>Write us message</h2>
                      <p>Porro eveniet, autem ipsam vitae consequatur!</p>
                    </div>
                  </div>
                  {/* <div className="col-lg-12 text-center">
                    <form action="">
                      <div className="col-lg-6">
                        <input type="text" placeholder='First Name' />
                      </div>
                      <div className="col-lg-6"></div>
                      <div className="col-lg-6"></div>
                      <div className="col-lg-6"></div>
                      <div className="col-lg-12"></div>
                    </form>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="row">

          </div>
        </div>
        <div className="conatiner position-relative bg-white">
          <div className="row">
            <div className="col-lg-12 text-center">
              <form action="">
                <div className="row">
                  <div className="col-lg-6">
                    <input type="text" placeholder='First Name' required />
                  </div>
                  <div className="col-lg-6">
                    <input type="text" placeholder='Last Name' required />
                  </div>
                  <div className="col-lg-6">
                    <input type="tel" placeholder='Phone' required />
                  </div>
                  <div className="col-lg-6">
                    <input type="email" placeholder='Last Name' required />
                  </div>
                  <div className="col-lg-12">
                    <textarea placeholder='Massage' required rows={4}></textarea>
                  </div>
                </div>
              </form>
            </div>
          </div>

        </div>
      </section>
      <section>

      </section>
    </>
  )
}

export default Contact
