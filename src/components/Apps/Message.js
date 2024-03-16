import React from 'react'
import wallpaper from '../../images/wallpaper.jpeg'
import { useState,useEffect } from 'react';
import Navbar from '../Navbar'
import UserPicWithText from './UserPicWithText';
import { RiEditBoxLine } from "react-icons/ri";

const Message = () => {
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
    <div className='flex  flex-col  items-center justify-start w-full text-white  h-full' 
    style={{backgroundImage: `url(${wallpaper})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center'}}>
        <div className='w-full'>
            <Navbar time={currentTimeWithSeconds}/>
        </div> 
        <div className='bg-white/25 top-[80px] absolute backdrop-blur-lg flex flex-col gap-2 px-4 w-[300px] h-[550px] py-5  rounded-2xl'>
            <div className='text-2xl font-extrabold flex flex-row items-center justify-between'>
                <div className=''>Messages</div>
                <RiEditBoxLine/>
            </div>
            <div className='overflow-y-auto'>
                {Array.from({ length: 20 }).map((_, i) => (
                    <UserPicWithText key={i} />
                ))}
            </div>

        </div>


    </div>
  )
}

export default Message






