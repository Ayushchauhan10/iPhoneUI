import React, { useState } from 'react';
import { BsApple } from "react-icons/bs";
import { FaPowerOff } from "react-icons/fa";
import {  useNavigate } from "react-router-dom"
const LockScreen = () => {
   const [power, setPower] = useState(0);
   
   const navigate = useNavigate()
   const handlePowerButton = () => {
       console.log("Power button clicked"); 
       setPower(true);
          setTimeout(() => {
            navigate('/switchOn')
           }, 2000);
   }


  
  return (
    <div className='flex w-full h-full bg-black items-center justify-center text-white '
    >
       {
         power ?
         <BsApple className='text-[90px] animate-pulse'/>
         : 
         <div className='powerButton flex flex-col justify-center items-center  backdrop-brightness-50'>
           <button onClick={() => handlePowerButton()} >
            <FaPowerOff className='text-[90px] animate-pulse' />
            </button>
           <div>Click power button to <br/> Switch ON the iPhone</div>
         </div>
       }
    </div>
  );
}

export default LockScreen;
