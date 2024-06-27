import React from 'react';
import HomeSlider from '../../Images/Home_Slider.jpg'; 

const Home = () => {
  return (
    <section className='container'>
      <div >
        
       
        
        <div className='absolute ms-16 mt-lg-40 mt-36 flex align-super'>
          <div className=''>
          <span className='bg-lime-500 py-2 px-4 mb-5 text-slate-100 font-semibold rounded-md'>Weekend Dicount</span>
          <h1 className='font-bold text-sky-700 text-5xl mt-4 leading-13'>Get the best quality <br /> products at the lowest <br /> prices</h1>
          <p className='mt-5 text-gary-950 text-xl w-96 text-sm-36'>We have prepaared special discounts for you on oraganix breackfast prooducats.</p>
          <button className='bg-sky-700 text-white py-2 px-4 font-semibold mt-4 rounded-md'>Shop Now</button>
          </div>
          
        </div>
        <div className='realtive'>
        <img src={HomeSlider} alt="Home Slider Image" className='home-slider-image'/>
        </div>
      </div>
    </section>
  );
}

export default Home;
