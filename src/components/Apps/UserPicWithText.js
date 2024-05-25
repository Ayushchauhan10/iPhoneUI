import React from 'react'
import { IoPersonCircle } from "react-icons/io5";

const UserPicWithText = ({heading,subtext}) => {
  return (
    <div className=' py-1 flex flex-row text-slate-300 items-center justify-start gap-0 border-b-2 border-dashed  border-slate-400'>
       <IoPersonCircle className='text-[50px]'/>
       <div className=' px-3 py-2 w-[250px]'>
          <div className='text-white text-sm font-bold '> {heading}</div>
          <div className='text-xs '> {subtext} </div>
       </div>
    </div>
  )
}

export default UserPicWithText