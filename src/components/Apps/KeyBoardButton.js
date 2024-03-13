import React from 'react'
import { FiDelete } from "react-icons/fi";

const KeyBoardButton = ({num,subscript}) => {
    
  return (
    <div className='w-[70px] h-[70px] bg-[#e5e5e5] rounded-full flex flex-col justify-center items-center'>
        <div className='text-[30px] flex text-center justify-start items-center'>
            {num !=="DEL" ? num :<FiDelete className='-mt-2 text-slate-500'/>}
        </div>
        <span className='text-[10px] -mt-2 font-semibold'>
            {subscript}
        </span>

    </div>
  )
}

export default KeyBoardButton