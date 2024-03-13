import React, { useState, useEffect } from 'react';
import wallpaper from '../images/wallpaper.jpeg'
import Navbar from './Navbar'
import LoginForm from './LoginForm';
import SignUp from './SignUp';
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const SwitchOn = () => {
    const [currentTimeWithSeconds, setCurrentTimeWithSeconds] = useState('00:00:00');
    const [currentTimeWithoutSeconds, setCurrentTimeWithoutSeconds] = useState('00:00');
    const [currentDate, setCurrentDate] = useState('00');
    const [currentDay, setCurrentDay] = useState('00');
    const [currentMonth, setCurrentMonth] = useState('January');
    const [isUser, setisUser] = useState(1);
    
    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const timeWithSeconds = now.toLocaleTimeString();
            const timeWithoutSeconds = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            const date = now.getDate();
            const day = now.toLocaleDateString('en-US', { weekday: 'long' });
            const month = now.toLocaleDateString('en-US', { month: 'long' });
            
            setCurrentTimeWithSeconds(timeWithSeconds);
            setCurrentTimeWithoutSeconds(timeWithoutSeconds);
            setCurrentDate(date);
            setCurrentDay(day);
            setCurrentMonth(month);
        }, 1000); 

        return () => clearInterval(interval); 
    }, []);  
  return (
    <div className='flex flex-col  items-center gap-8 w-full text-white  h-full' 
    style={{backgroundImage: `url(${wallpaper})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center'}}>
        <div className='w-full'>
            <Navbar time={currentTimeWithSeconds}/>
        </div>    

        <div className='flex text-[80px] flex-col px-4 items-center justify-end'>
            <span className='text-lg font-medium'>
                {currentDay +', '+ currentDate +' '+ currentMonth}
            </span>
            <div className='-mt-5 text-slate-200 font-semibold'>
                {currentTimeWithoutSeconds}
            </div>
        
        </div>    
        <div>
            {isUser? <LoginForm setisUser={setisUser}/>:<SignUp setisUser={setisUser}/>}
        </div> 
        <div className=' w-full h-[100px] -mt-2 flex flex-col gap-3 items-center justify-center'>
            <div className='text-xl'>OR </div>
            <Link to='/homeScreen'><div className='bg-white/25 backdrop-blur-lg  w-[250px] py-2 px-2 rounded-2xl gap-3 text-sm font-semibold text-center flex flex-row items-center justify-center'>Continue As A Guest <FaArrowAltCircleRight className='text-[20px]'/> </div></Link>
        </div>
    

    </div>
  )
}

export default SwitchOn