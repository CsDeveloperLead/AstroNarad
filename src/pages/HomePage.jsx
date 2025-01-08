import React from "react";
import bg2 from '../assets/bg2.png';
import chakra from '../assets/chakra.png';
import Slider from "../components/Slider";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <div className="w-full p-4">
        <Navbar/>
      </div>
      <div className="w-full flex justify-center p-4">
        <div className="w-full md:w-[75%] h-full flex flex-col md:flex-row gap-6 md:gap-0">
        
          <div className="md:w-[65%] w-full flex justify-center  flex-col gap-4 text-center md:text-left">
            <h1 className='text-[#c93d03] text-sm md:text-2xl uppercase font-bold font-playfair'>Ask one Question for free</h1>
            <h1 className='text-black text-2xl md:text-7xl font-bold font-playfair'>Learn More About Your Destiny</h1>
            <h3 className="text-sm md:text-lg px-2 md:px-0  font-playfair">
              Fusce sit amet velit eleifend, iaculis velit quis, malesuada lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h3>
            <button className='bg-[#fa4f09] w-1/2 md:w-1/3 rounded-3xl px-4 py-2 text-white text-sm md:text-base'>
              Get started
            </button>
          </div>

          <div className="md:w-[35%] w-full flex justify-center items-center">
            <div className='relative w-2/3 md:w-3/4 h-full '>
              <img className='w-full h-full object-cover' src={bg2} alt='photo' />
              <div className='absolute w-[200px]  md:w-[400px] z-50 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'>
                <img className='w-full h-full animate-spin-slow' src={chakra} alt="chakra" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full  p-4">
        <Slider />
      </div>
    </div>
  );
};

export default HomePage;
