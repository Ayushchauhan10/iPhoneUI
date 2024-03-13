import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import KeyBoardButton from './KeyBoardButton';
import { IoCallSharp } from "react-icons/io5";
const Calls = () => {
    const [currentTimeWithSeconds, setCurrentTimeWithSeconds] = useState('00:00:00');
    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const timeWithSeconds = now.toLocaleTimeString();
            setCurrentTimeWithSeconds(timeWithSeconds);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const [display, setDisplay] = useState('');

    const keypad = [
        { num: 1, subscript: '' },
        { num: 2, subscript: 'A B C' },
        { num: 3, subscript: 'D E F' },
        { num: 4, subscript: 'G H I' },
        { num: 5, subscript: 'J K L' },
        { num: 6, subscript: 'M N O' },
        { num: 7, subscript: 'P Q R S' },
        { num: 8, subscript: 'T U V' },
        { num: 9, subscript: 'W X Y Z' },
        { num: '*', subscript: '' },
        { num: 0, subscript: '+' },
        { num: '#', subscript: '' }
    ];

    const handleKeyPress = (key) => {
        if (key === 'DEL') {
            setDisplay(display.slice(0, -1));
        } else {
            // Append the pressed key to the display
            setDisplay(display + key);
        }
    };

    return (
        <div className='w-full h-full flex flex-col gap-5 justify-start items-center'>
            <Navbar time={currentTimeWithSeconds} />
            <div className='h-full flex flex-col items-center justify-center gap-1'>
                <div className='text-[35px] h-[60px] text-end  -mt-4 '>{display}</div>
                <div className='h-[50%]  grid grid-cols-3 gap-x-5'>
                    {keypad.map((button, index) => (
                        <button key={index} className='' onClick={() => handleKeyPress(button.num)}>
                            <KeyBoardButton
                            key={index}
                            num={button.num}
                            subscript={button.subscript}
                        />
                        </button>
                    ))}
                </div>
                <div className="flex h-[60px] justify-center gap-5">
                    <div className='h-[70px] w-[70px] rounded-full bg-white'/>
                    <div className='h-[70px] w-[70px] flex flex-col items-center justify-center bg-[#77d672] rounded-full'>
                    <IoCallSharp className='text-white text-[40px]'/>
                    </div>
                    {display!=='' ?<button onClick={() => handleKeyPress("DEL")}>
                        <KeyBoardButton num="DEL"  />
                        
                    </button>:<div className='h-[70px] w-[70px] rounded-full bg-white'/>}
                </div>
                
            </div>
        </div>
    );
};

export default Calls;
