import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import RecordRTC from 'recordrtc';
import { TbHdr } from "react-icons/tb";
import { MdFlashAuto } from "react-icons/md";
import { IoIosTimer } from "react-icons/io";
import { TbColorFilter } from "react-icons/tb";
import { IoMdPhotos } from "react-icons/io";
import { FaRegStopCircle } from "react-icons/fa";
import { IoIosReverseCamera } from "react-icons/io";

import { PiRecordFill } from "react-icons/pi";
const Camera = () => {
    const webcamRef = useRef(null);
//    const [isRecroding, setisRecroding] = useState(0);
    let recorder = null;
    const [cameraMode, setcameraMode] = useState(1);

    const capture = () => {
        const imageSrc = webcamRef.current.getScreenshot();
        // console.log(imageSrc);
        const anchor = document.createElement('a');
        anchor.href = imageSrc;
        anchor.download = 'captured-image.jpeg';
        anchor.click();
    };



    const startRecording = () => {

        recorder = RecordRTC(webcamRef.current.stream, {
            type: 'video'
        });
        recorder.startRecording();
    };

    const stopRecording = () => {

        if (recorder) {
            recorder.stopRecording(() => {
                const videoUrl = URL.createObjectURL(recorder.getBlob());
                const anchor = document.createElement('a');
                anchor.href = videoUrl;
                anchor.download = 'recorded-video.webm';
                anchor.click();
            });
        }
    };

    const videoConstraints = {
        height: '700px',
        width: '350px',
        facingMode: 'user' // Use 'user' to use the front camera, 'environment' for the back camera
    };

    return (
        <div className="flex    justify-start bg-black flex-col items-center w-full h-full">
            <div className='bg-green-400 w-[7px] h-[7px] right-[130px] top-[25px] absolute rounded-full animate-pulse shadow-lg'></div>
            <div className=' absolute w-[15px] h-[15px] right-[165px] top-[20px]  border-2 border-slate-100 rounded-full animate-pulse'></div>
            <div className='absolute text-white text-2xl w-full h-[25px] mt-[50px] flex-row flex itmes-center justify-around gap-6 px-2'>
                <MdFlashAuto className='text-yellow-400' />
                <TbHdr />
                <IoIosTimer className='text-yellow-400' />
                <TbColorFilter />

            </div>
            <div>
                <Webcam
                    audio={false}
                    ref={webcamRef}
                    videoConstraints={videoConstraints}
                    screenshotFormat="image/jpeg"
                    className='h-[600px]'
                />
            </div>
            <div className='absolute w-full h-[120px] bottom-[70px] flex flex-col items-center justify-center gap-2'>
                <div className='flex text-xs  flex-row items-center justify-center gap-4'>
                    <div className={`bg-${cameraMode ? '' : 'white'} text-${cameraMode ? 'white' : 'black'} text-[10px] px-1 rounded-md`}
                        onClick={() => { setcameraMode(!cameraMode) }}    >
                        VIDEO
                    </div>
                    <div className={`bg-${cameraMode ? 'white' : ''} text-${cameraMode ? 'black' : 'white'}  text-[10px] px-1  rounded-md`}
                        onClick={() => { setcameraMode(!cameraMode) }}>
                        PHOTO
                    </div>
                </div>
                <div className='flex flex-row justify-between gap-[50px] items-center'>
                    <IoMdPhotos className='text-white text-[45px]' />
                    {cameraMode ?
                        <div className='w-[60px] h-[60px] rounded-full bg-white mx-[20px]'>

                            <div className='absolute bottom-[23px] left-[150px] h-[50px] w-[50px] bg-white border-2 border-black rounded-full'
                                onClick={capture}></div>
                        </div> :

                        <div className='flex flex-row'>
                           
                            <button onClick={()=>{startRecording()}} className="w-[60px] h-[60px] text-[60px] text-red-400 font-semibold  ">
                                <PiRecordFill />
                            </button>

                            <button onClick={()=>{stopRecording();}} className=" text-red-400 w-[60px] h-[60px] text-[50px]  focus:outline-none">
                                <FaRegStopCircle />
                            </button>
                            
                              </div>

                    }

                    <IoIosReverseCamera className='text-white text-[45px]' />
                </div>
            </div>
        </div>
    );
};

export default Camera;



