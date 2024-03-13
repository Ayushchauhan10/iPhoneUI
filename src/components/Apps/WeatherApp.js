import React from 'react';
import Navbar from '../Navbar';
import { useEffect } from 'react';
import { useState } from 'react';

const WeatherApp = () => {
    const [currentTimeWithSeconds, setCurrentTimeWithSeconds] = useState('00:00:00');
    useEffect(() => {
      const interval = setInterval(() => {
          const now = new Date();
          const timeWithSeconds = now.toLocaleTimeString();
          setCurrentTimeWithSeconds(timeWithSeconds);
      }, 1000); 
  
      return () => clearInterval(interval); 
  }, []); 
  return (
    <div className='flex flex-col bg-sky-300 items-center gap-2 justify-center w-full h-full py-2 overflow-hidden'>
        <Navbar  time={currentTimeWithSeconds} textColor="black"/>
    <div className='bg-black h-full w-full'>
        <iframe
            title="Weather "
            src="https://weather-report-8x6l.onrender.com/"
            className='w-full   h-full '
        />
    </div>
    </div>
  );
};

export default WeatherApp;


