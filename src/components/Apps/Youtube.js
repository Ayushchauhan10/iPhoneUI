import React from 'react';
import Navbar from '../Navbar';
import { useEffect } from 'react';
import { useState } from 'react';

const Youtube = () => {
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
    <div className='flex flex-col items-center gap-2 justify-start bg-black w-full h-[700px] py-2'>
         <Navbar time={currentTimeWithSeconds} textColor="white"/>

      <div className='bg-black'>
        <iframe
        title="YouTube"
        src="https://youtubereact-xpfk.onrender.com/"
        className='w-[350px] h-[650px]'
      />
      </div>
    </div>
  );
};

export default Youtube;
