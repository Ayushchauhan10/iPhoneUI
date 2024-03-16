import React from 'react'
import Navbar from './Navbar'
import { useState,useEffect } from 'react';
import AppGridComponent from './AppGridComponent';
import { CiSearch } from "react-icons/ci";
import Slider from 'react-slick'; 
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import wallpaper from '../images/wallpaper.jpeg'
import './Home.css'

import appleTvApp from '../images/appleTvApp.jpeg'
import appStoreApp from '../images/appStoreApp.jpeg'
import calculatorApp from '../images/calculatorApp.png'
import calenderApp from '../images/calenderApp.png'
import cameraApp from '../images/cameraApp.jpeg'
import clockApp from '../images/clockApp.jpeg'
import emailApp from '../images/emailApp.jpeg'
import facetimeApp from '../images/facetimeApp.jpeg'
import galleryApp from '../images/galleryApp.jpeg'
import healthApp from '../images/healthApp.png'
import homeapp from '../images/homeApp.png'
import notesApp from '../images/notesApp.jpeg'
import podcastApp from '../images/podcastApp.jpeg'
import reminderApp from '../images/reminderApp.jpeg'
import settingApp from '../images/settingApp.jpeg'
import walletApp from '../images/walletApp.jpeg'
import mapApp from '../images/mapApp.jpeg'
import safariApp from '../images/safariApp.jpeg'
import messageApp from '../images/messageApp.jpeg'
import musicApp from '../images/musicApp.jpeg'
import callApp from '../images/callApp.jpeg'
import youtubeApp from '../images/youtubeApp.png'
import weatherApp from '../images/weatherApp.jpeg'
import { Link } from 'react-router-dom';





const Home = () => {
  const [currentTimeWithSeconds, setCurrentTimeWithSeconds] = useState('00:00:00');
  useEffect(() => {
    const interval = setInterval(() => {
        const now = new Date();
        const timeWithSeconds = now.toLocaleTimeString();
        setCurrentTimeWithSeconds(timeWithSeconds);
    }, 1000); 

    return () => clearInterval(interval); 
}, []);  

  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className='flex  flex-col  items-center justify-between w-full text-white  h-full' 
    style={{backgroundImage: `url(${wallpaper})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center'}}>
        <div className='w-full'>
            <Navbar time={currentTimeWithSeconds}/>
        </div> 
            <div className='bg w-[330px] my-auto '>
              <div className="slider-container">
                <Slider className=''
                  {...settings}>

                  <div className='w-full h-[450px]'>
                        <div className=' bg- grid grid-cols-4 gap-5 p-2 mx-2 '>

                            <AppGridComponent appName="Apple TV" img={appleTvApp}/>
                            <AppGridComponent appName="App Store" img={appStoreApp}/>
                            <AppGridComponent appName="Wallet" img={walletApp}/>
                            <Link to='/calculator'><AppGridComponent appName="Calculator" img={calculatorApp}/></Link> 
                            
                            <Link to='/map'><AppGridComponent appName="Map" img={mapApp}/></Link>
                            <AppGridComponent appName="Podcast" img={podcastApp}/>
                            <AppGridComponent appName="Reminders" img={reminderApp}/>
                           <Link to='/messages'> <AppGridComponent appName="Messages" img={messageApp}/></Link>
                            <Link to='/settings'><AppGridComponent appName="Settings" img={settingApp}/></Link>
                            <Link to='/youtube'><AppGridComponent appName="YouTube" img={youtubeApp}/></Link>
                            <Link to='/weatherApp'><AppGridComponent appName="Weather" img={weatherApp}/></Link>
                            <AppGridComponent appName="Notes" img={notesApp}/>
                        </div>
                    </div>
                    <div className='w-full h-[450px]'>
                      <div className='grid grid-cols-4 gap-5 p-2 mx-2 '>
                          <AppGridComponent appName="Calender" img={calenderApp}/>
                          <AppGridComponent appName="Clock" img={clockApp}/>
                          <AppGridComponent appName="Email" img={emailApp}/>
                          <AppGridComponent appName="FaceTime" img={facetimeApp}/>
                          <AppGridComponent appName="Photos" img={galleryApp}/>
                          <AppGridComponent appName="Health" img={healthApp}/>
                          <AppGridComponent appName="Home" img={homeapp}/>
                          <Link to='/calls'> <AppGridComponent appName="" img={callApp}/></Link>
                          <AppGridComponent appName="" img={safariApp}/>
                          <Link to='/camera'><AppGridComponent appName="" img={cameraApp}/></Link>
                          <AppGridComponent appName="" img={musicApp}/>
                      </div>
                    </div>

              </Slider>
             

             </div>
            </div>
       
        <div className='bg-slate-400 h-[20px] rounded-xl flex flex-row items-center gap-1 px-1 py-[1px] mb-[115px] justify-center '>
          <CiSearch className='text-white' />
          <input
            type="search"
            placeholder="Search"
            className="w-[50px] h-[20px] text-white text-[10px] bg-transparent focus:outline-none placeholder-gray-200"
        />

        </div>

        <div className='bg-white/50 backdrop-blur-md py-2 rounded-[35px] absolute bottom-5'>
          <div className='grid grid-cols-4 gap-5 p-2 mx-2'>
             <Link to='/calls'> <AppGridComponent appName="" img={callApp}/></Link>
             <AppGridComponent appName="" img={safariApp}/>
             <Link to='/camera'><AppGridComponent appName="" img={cameraApp}/></Link>
             <AppGridComponent appName="" img={musicApp}/>

          </div>
        </div>

       

    </div>
  )
}

export default Home;