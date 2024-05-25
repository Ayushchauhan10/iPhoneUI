import React from 'react';
import Navbar from '../Navbar';
import { useEffect } from 'react';
import { useState } from 'react';

const Map = () => {
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
    <div className='flex flex-col justify-start items-center gap-2  bg-white w-full h-[700px] py-2'>
         <Navbar time={currentTimeWithSeconds}/>

      <div className=' flex flex-col items-center justify-end h-[200px] '>
       Map
      </div>
    </div>
  );
};

export default Map;



// <iframe
//   width="600"
//   height="450"
//   style="border:0"
//   loading="lazy"
//   allowfullscreen
//   referrerpolicy="no-referrer-when-downgrade"
//   src="https://www.google.com/maps/embed/v1/place?key=API_KEY
//     &q=Space+Needle,Seattle+WA">
// </iframe>