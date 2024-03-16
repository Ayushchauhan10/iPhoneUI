import React from 'react'
import { IoAirplaneSharp } from "react-icons/io5";
import { FaForward } from "react-icons/fa";
import { FaBackward } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { IoIosWifi } from "react-icons/io";
import { GiAerialSignal } from "react-icons/gi";
import { FaBluetoothB } from "react-icons/fa";
import { IoMoon } from "react-icons/io5";
import { HiOutlineSquare2Stack } from "react-icons/hi2";
import { BsBrightnessHighFill } from "react-icons/bs";
import { IoIosTimer } from "react-icons/io";
import { BsCalculatorFill } from "react-icons/bs";
import { BsFillCameraFill } from "react-icons/bs";
import { IoIosFlashlight } from "react-icons/io";
import { FaRegCircleDot } from "react-icons/fa6";
import { FaBatteryThreeQuarters } from "react-icons/fa";
import { IoEarOutline } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { PiCalculatorBold } from "react-icons/pi";


import { IoMdVolumeLow } from "react-icons/io";

import { RiRotateLockFill } from "react-icons/ri";
import RangeInput from './Apps/RangeInput';

const ControlCenter = () => {
  return (
    <div className='flex flex-col items-center gap-2 justify-center'>
        <div className='flex flex-row gap-2 w-full p-2 items-center justify-around'>
            <div className=' bg-black/60 backdrop-blur-lg flex items-center rounded-xl w-[250px] h-[140px] px-2 py-3  hover:bg-black/45'>
                <div className='grid grid-cols-2 gap-[10px] p-2 mx-auto '>
                        <div className='bg-gray-500 p-1 rounded-full flex justify-center items-center w-[53px] h-[53px]'>
                            <IoAirplaneSharp className='text-[23px] text-white'/>
                        </div> 
                        <div className='bg-[#4ee258]  p-1 rounded-full flex justify-center items-center w-[53px] h-[53px]'>
                            <GiAerialSignal className='text-[27px] text-white font-bold'/>
                        </div> 
                        <div className='bg-[#3375f4] p-1 rounded-full flex justify-center items-center w-[53px] h-[53px]'>
                            <IoIosWifi className='text-[25px] text-white '/>
                        </div> 
                        <div className='bg-[#3375f4] p-1 rounded-full flex justify-center items-center w-[53px] h-[53px]'>
                            <FaBluetoothB className='text-[23px] text-white'/>
                        </div> 
                        
                </div>
            </div>
            <div className='w-[250px] h-[140px] bg-black/60 backdrop-blur-lg rounded-xl flex flex-col items-center justify-center gap-5 hover:bg-black/45'>
                <div className='flex flex-col items-center justify-center'>
                    <div className='text-white text-md'>
                        Music
                    </div>
                    <div className='text-white/70 text-sm'>
                        This is a song ...
                    </div>
                </div>
                <div className='text-[20px] flex flex-row items-center justify-center gap-5'>
                    <FaBackward className=' text-white/60'/>
                    <FaPlay className=' text-white/90'/>
                    <FaForward className=' text-white/60'/>
                </div>
            </div>
        </div>
        <div className='flex flex-row gap-3 w-full px-2 items-center justify-around'>
            <div className=' w-[140px] h-[140px] flex flex-col gap-3 items-center mx-auto' >
                <div className='flex flex-row gap-4 items-center justify-center '>
                    <div className='bg-white p-[13px] rounded-2xl'> <RiRotateLockFill className='text-red-400 text-4xl'/></div>
                    <div className='p-[17px]  bg-black/60 backdrop-blur-lg rounded-2xl'><IoMoon className='text-white text-3xl'/></div>
                </div>
                <div className='bg-black/60 backdrop-blur-lg px-5 rounded-2xl py-4 gap-5 text-slate-300 flex flex-row items-center justify-center'>
                    <div className='object-cover'><HiOutlineSquare2Stack className='text-3xl w-full '/></div>
                    <div className='text-xs'>Screen<br/> Mirroring</div>
                </div>
            </div>
            <div className=' w-[140px] h-[140px] flex flex-row gap-2' >
                <div className=' relative flex w-[70px] items-center justify-center'>
                    <RangeInput/>
                    <BsBrightnessHighFill className='text-black/60 text-3xl font-bold absolute left-[17px] bottom-[15px]' />
                </div>
                <div className=' relative flex w-[70px] items-center justify-center'>
                    <RangeInput/>
                    <IoMdVolumeLow className='text-black/60 text-3xl font-bold absolute left-[18px] bottom-[15px]' />
                </div>
                
                

            </div>
        </div>
        <div className='grid grid-cols-4 gap-3 mt-1'>
             <div className='p-[17px]  bg-black/60 backdrop-blur-lg rounded-2xl'><IoIosTimer className='text-white text-3xl'/></div>

             <div className='p-[17px]  bg-black/60 backdrop-blur-lg rounded-2xl'><BsCalculatorFill className='text-white text-3xl font-light'/></div>

             <div className='p-[17px]  bg-black/60 backdrop-blur-lg rounded-2xl'><BsFillCameraFill className='text-white text-3xl'/></div>
             <div className='p-[17px]  bg-black/60 backdrop-blur-lg rounded-2xl'><IoIosFlashlight className='text-white text-3xl'/></div>
             <div className='p-[17px]  bg-black/60 backdrop-blur-lg rounded-2xl'><FaRegCircleDot className='text-white text-3xl'/></div>
             <div className='p-[17px]  bg-black/60 backdrop-blur-lg rounded-2xl'><FaBatteryThreeQuarters className='text-white text-3xl'/></div>
             <div className='p-[17px]  bg-black/60 backdrop-blur-lg rounded-2xl'><PiCalculatorBold className='text-white text-3xl'/></div>
             <div className='p-[17px]  bg-black/60 backdrop-blur-lg rounded-2xl'><IoEarOutline className='text-white text-3xl'/></div>
             <div className='p-[17px]  bg-black/60 backdrop-blur-lg rounded-2xl'><FaHome className='text-white text-3xl'/></div>
        </div>
    </div>
  )
}

export default ControlCenter