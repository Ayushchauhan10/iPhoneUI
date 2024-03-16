import React from 'react'
import './Home.css'
import LeftSide from './LeftSide'
import RightSide from './RightSide'
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LockScreen from './LockScreen';
import Home from './Home';
import SwitchOn from './SwitchOn';
import Camera from './Apps/Camera';
import Calculator from './Apps/Calculator';
import Setting from './Apps/Setting';
import Youtube from './Apps/Youtube';
import Map from './Apps/Map';
import WeatherApp from './Apps/WeatherApp';
import Calls from './Apps/Calls';
import Message from './Apps/Message';
import ControlCenter from './ControlCenter';

const Frame = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className='relative flex cursor-pointer'>
      
        <div className='leftSide absolute top-[110px] -left-[4px] '>
             <LeftSide/>
        </div>

        <span className='absolute  bg-black h-[25px] rounded-full w-[120px] left-[116px] top-[15px]'>

        </span>


        <div className='w-[355px] h-[700px] rounded-[60px] border-8  border-black flex justify-center items-center overflow-hidden '>

            <Router>
                <Routes>
                        <Route path="/" element={<LockScreen />} />
                        <Route path="/switchOn" element={<SwitchOn />} />
                        <Route path="/homeScreen" element={<Home />} />
                        <Route path="/camera" element={<Camera />} />
                        <Route path="/calculator" element={<Calculator />} />
                        <Route path="/settings" element={<Setting />} />
                        <Route path="/youtube" element={<Youtube />} />
                        <Route path="/weatherApp" element={<WeatherApp />} />
                        <Route path="/map" element={<Map />} />
                        <Route path="/calls" element={<Calls />} />
                        <Route path="/messages" element={<Message />} />


                </Routes>
            </Router>

            {/* <div className='absolute -inset-[1px] border-[3px] border-slate-500 rounded-[63px]'></div> */}
        {/* </div> */}
        </div>

        <div className='rightSide top-[200px] absolute -right-[4px] '>
             <RightSide/>
        </div>



        <div
          className={`absolute mt-[70px] bottom-${isVisible?'7':'0'} left-4 bg-white/25 backdrop-blur-lg w-[325px] h-[600px] py-5 px-2 rounded-2xl ${isVisible ? 'animate-slideIn' : 'animate-slideOut'} '}`}
          style={{
            display: isVisible ? 'block' : 'none',
            animationDuration: '0.5s',
            animationFillMode: 'forwards',
          }}
        >
          <ControlCenter/>
  </div>

        <div className=' bottom-0  left-20 h-[15px]  w-[200px] bg-black  rounded-t-[5px] border-t-2 absolute border-white'
          onClick={toggleVisibility}
          style={{ cursor: 'pointer' }}
        >

        
      </div>


    </div>
  )
}

export default Frame