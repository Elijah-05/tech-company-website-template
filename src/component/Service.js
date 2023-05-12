import React from 'react'

const Service = ({ title, desc, icon }) => {
  return (
    <div className=' relative  sm:min-w-[230px] max-w-xs min-h-[300px] sm:max-w-[280px] min-h-80 bg-slate-100 flex flex-col rounded-xl mt-20  sm:mt-14 hover:shadow-lg hover:scale-[1.01] lg:hover:scale-[1.02] duration-300 lg:hover:-translate-y-4 hover:-translate-y-2'>
        <div className=' absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full ring-4 ring-secondaryColor bg-white w-24 h-24 flex items-center justify-center '>
        <i className={`fa ${icon} feature text-5xl text-primaryColor duration-300`} aria-hidden="true"></i>
        </div>
        <div className=' mt-16 flex flex-col h-full items-center justify-between px-4 '>
          <h2 className=' uppercase font-semibold text-xl'>{title}</h2>
          <hr className=' w-4/5 h-1 bg-secondaryColor ' />
          <p className=' my-5 text-sm'>
            {desc}
          </p>
          <button className=' bg-secondaryColor w-44 py-2 rounded-full mb-4 hover:bg-btnHover hover:text-white hover:shadow-md duration-200 '>
            Get The Service
          </button>
        </div>
    </div>
  )
}

export default Service