import React from 'react'

const LeftSide = () => {
  return (
    <div className='flex flex-col gap-8' >
        <div className='bg-slate-600 h-[30px] w-[5px] border-l-1 border-slate-500 rounded-md'>
        </div>

        <div className='flex flex-col gap-4'>
            <div className='bg-slate-600 h-[70px] w-[5px] border-l-1 border-slate-500 rounded-md'></div>
            <div className='bg-slate-600 h-[70px] w-[5px] border-l-1 border-slate-500 rounded-md'>\</div>
        </div>
    </div>
  )
}

export default LeftSide