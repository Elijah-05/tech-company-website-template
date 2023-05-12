import React from 'react'

const Features = ({ title, desc, icon }) => {
  return (
    <div id='feature' className=' flex max-w-[400px] min-h-[180px] mx-3 sm:mx-0 sm:w-[300px] hover:-translate-y-2 hover:shadow-lg duration-300 justify-center bg-slate-200 p-3 rounded-xl'>
        <i className={`fa ${icon} feature w-7 h-7 text-xl mt-1 mr-2 duration-300`} aria-hidden="true"></i>
        <div className=' max-w-[280px] sm:w-[200px] '>
            <h2 className='feature text-lg font-bold mt-1 duration-300'>{title}</h2>
            <p className=' mt-2 '>{desc}</p>
        </div>
    </div>
  )
}

export default Features