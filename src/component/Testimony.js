import React from 'react'

const Testimony = ({ name, testimony, position }) => {
  return (
    <div className='relative bg-slate-200 max-w-md sm:max-w-lg lg:max-w-[320px] min-h-[240px] flex flex-col text-center justify-between rounded-lg px-5 pb-3 mx-2 my-5  hover:scale-[1.01] hover:-translate-y-2 hover:shadow-xl duration-200'>
        <div className=' absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 bg-primaryColor rounded-full'></div>
        <div></div>
        <p className=' mt-8 mb-4'>
            {testimony}
        </p>
        <p className='text-sm font-light'>
            <span className='font-semibold '>
            {name}/
            </span>
            {position}
        </p>
    </div>
  )
}

export default Testimony
