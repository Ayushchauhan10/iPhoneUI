import React from 'react'

const AppGridComponent = ({appName,img}) => {
  return (
    <div className='text-xs  flex flex-col justify-center items-center'>
        <div className='rounded-xl overflow-hidden w-[55px] h-[55px] flex justify-center items-center'>
            <img src={img} alt="" className='h-full w-full object-cover' />
        </div>

        <p className='text-[10px] text-center' >{appName}</p>

    </div>
  )
}

export default AppGridComponent