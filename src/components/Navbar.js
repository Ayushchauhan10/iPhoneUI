import React from 'react';
import { FaWifi } from "react-icons/fa";
import { FaSignal } from "react-icons/fa";
import { IoIosBatteryFull } from "react-icons/io";

const Navbar = ({time,textColor}) => {
    if(textColor ==='')
    textColor='black';
  return (
    

    <div className={`w-full flex flex-row mt-3 text-${textColor} bg-transparent`}>
        <div className='font-semibold ml-[40px] text-sm w-[50px]'>
        {time}
        </div>
        <div className='flex   flex-row justify-center items-center gap-2 ml-[150px]'>
           <FaSignal className='text-sm ' />
           <FaWifi />
           <IoIosBatteryFull />
        </div>
        
    </div>
  )
}

export default Navbar