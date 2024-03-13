import React, { useState } from 'react';
import Navbar from '../Navbar';
import { useEffect } from 'react';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [currentValue, setCurrentValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [resetDisplay, setResetDisplay] = useState(false);
  const [percentValue, setPercentValue] = useState(null);
  const handleButtonClick = (value) => {
    if (value === 'C') {
      setDisplay('0');
      setCurrentValue(null);
      setOperator(null);
    } else if (value === '=') {
      if (operator && currentValue !== null) {
        let result;
        if (percentValue !== null) {
          result = calculate(currentValue, (parseFloat(display) / 100) * currentValue, operator);
          setPercentValue(null);
        } else {
          result = calculate(currentValue, parseFloat(display), operator);
        }
        setDisplay(result.toString());
        setCurrentValue(null);
        setOperator(null);
        setResetDisplay(true);
      }
    } else if (value === '.') {
      if (!display.includes('.')) {
        setDisplay(display + '.');
      }
    } else if (value === '%') {
      if (operator && currentValue !== null) {
        setPercentValue(parseFloat(display));
      } else {
        const result = parseFloat(display) / 100;
        setDisplay(result.toString());
      }
    } else if (value === '+/-') {
      const negatedValue = parseFloat(display) * -1;
      setDisplay(negatedValue.toString());
    } else if (!isNaN(value)) {
      if (display === '0' || resetDisplay) {
        setDisplay(value.toString());
        setResetDisplay(false);
      } else {
        setDisplay(display + value);
      }
    } else {
      if (currentValue !== null) {
        const result = calculate(currentValue, parseFloat(display), operator);
        setDisplay(result.toString());
        setCurrentValue(result);
        setOperator(value);
      } else {
        setCurrentValue(parseFloat(display));
        setOperator(value);
      }
      setResetDisplay(true);
    }
  };
  

  const calculate = (value1, value2, op) => {
    switch (op) {
      case '+':
        return value1 + value2;
      case '-':
        return value1 - value2;
      case '*':
        return value1 * value2;
      case '/':
        return value1 / value2;
      default:
        return value2;
    }
  };
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
    <div className="w-full text-white h-full bg-[#1C1C1C] flex flex-col items-center justify-start gap-4 ">
        <Navbar time={currentTimeWithSeconds} textColor="white"/>

      <div className="text-white h-[150px] w-full flex flex-row justify-end items-end px-3 text-6xl text-right">{display}</div>
      <div className='flex flex-col items-center gap-3 justify-center'>
            <div className="grid grid-cols-4 gap-3   w-full">
                
                <button
                    key="AC"
                    className="bg-[#D4D4D2] text-black w-[67px] h-[67px] text-2xl rounded-full"
                    onClick={() => handleButtonClick("C")}>
                        AC </button>
                <button
                    key="+/-"
                    className="bg-[#D4D4D2] text-black w-[67px] h-[67px] text-2xl rounded-full"
                    onClick={() => handleButtonClick("+/-")}>
                        +/- </button>
                <button
                    key="%"
                    className="bg-[#D4D4D2] text-black w-[67px] h-[67px] text-2xl rounded-full"
                    onClick={() => handleButtonClick("%")}>
                        % </button>
                <button
                    key="/"
                    className="bg-[#FF9500] text-white w-[67px] h-[67px] text-2xl rounded-full"
                    onClick={() => handleButtonClick("/")}>
                        / </button>

                <button
                    key="7"
                    className="bg-[#505050] text-white w-[67px] h-[67px] text-2xl rounded-full"
                    onClick={() => handleButtonClick("7")}>
                        7 </button>
                <button
                    key="8"
                    className="bg-[#505050] text-white w-[67px] h-[67px] text-2xl rounded-full"
                    onClick={() => handleButtonClick("8")}>
                        8 </button>
                <button
                    key="9"
                    className="bg-[#505050] text-white w-[67px] h-[67px] text-2xl rounded-full"
                    onClick={() => handleButtonClick("9")}>
                        9 </button>
                <button
                    key="*"
                    className="bg-[#FF9500] text-white w-[67px] h-[67px] text-2xl rounded-full"
                    onClick={() => handleButtonClick("*")}>
                        x </button>
                <button
                    key="4"
                    className="bg-[#505050] text-white w-[67px] h-[67px] text-2xl rounded-full"
                    onClick={() => handleButtonClick("4")}>
                        4 </button>
                <button
                    key="5"
                    className="bg-[#505050] text-white w-[67px] h-[67px] text-2xl rounded-full"
                    onClick={() => handleButtonClick("5")}>
                        5 </button>
                <button
                    key="6"
                    className="bg-[#505050] text-white w-[67px] h-[67px] text-2xl rounded-full"
                    onClick={() => handleButtonClick("6")}>
                        6 </button>
                <button
                    key="-"
                    className="bg-[#FF9500] text-white w-[67px] h-[67px] text-xl rounded-full"
                    onClick={() => handleButtonClick("-")}>— </button>
                <button
                    key="1"
                    className="bg-[#505050] text-white w-[67px] h-[67px] text-2xl rounded-full"
                    onClick={() => handleButtonClick("1")}>
                        1 </button>
                <button
                    key="2"
                    className="bg-[#505050] text-white w-[67px] h-[67px] text-2xl rounded-full"
                    onClick={() => handleButtonClick("2")}>
                        2 </button>
                <button
                    key="3"
                    className="bg-[#505050] text-white w-[67px] h-[67px] text-2xl rounded-full"
                    onClick={() => handleButtonClick("3")}>
                        3 </button>
                <button
                    key="+"
                    className="bg-[#FF9500] text-white w-[67px] h-[67px] text-2xl rounded-full"
                    onClick={() => handleButtonClick("+")}>
                        + </button>
                
            </div>

            <div className='flex flex-row gap-3'>
                <button
                    key="0"
                    className="bg-[#505050] text-white w-[150px] h-[67px] text-2xl rounded-full"
                    onClick={() => handleButtonClick("0")}>
                        0 </button>
                
                <button
                    key="."
                    className="bg-[#505050] text-white w-[67px] h-[67px] text-2xl rounded-full"
                    onClick={() => handleButtonClick(".")}>
                        . </button>
                <button
                    key="="
                    className="bg-[#FF9500] text-white w-[67px] h-[67px] text-2xl rounded-full"
                    onClick={() => handleButtonClick("=")}>
                        = </button>
            </div>
      </div>
    </div>
  );
};

export default Calculator;
