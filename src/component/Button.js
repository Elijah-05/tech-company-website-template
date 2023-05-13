import React from 'react'

const Button = ({ text }) => {
  return (
    <button className=' bg-secondaryColor py-2 px-8 rounded-3xl hover:text-white hover:scale-[1.03] duration-200'>
        {text}
    </button>
  )
}

export default Button