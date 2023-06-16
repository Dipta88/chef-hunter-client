import React from 'react';
import banner from '../../images/banner.jpg'

const Banner = (props) => {
   

    return (
      <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={banner} alt='banner' className="max-w-lg rounded-xl shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Welcome to Madchef</h1>
      <p className="py-6">We Provide the best food and best environment, You will enjoy every bit of the experience</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
  
    );
};

export default Banner;