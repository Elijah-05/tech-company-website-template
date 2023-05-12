import React from 'react';

const Banner = ({ heading }) => {
  return (
    <header className=' bg-slate-500 banner-h flex flex-col items-center justify-center'>
        <h1 className=' text-5xl '>{heading}</h1>
    </header>
  )
}

Banner.defaultProps = {
    heading: 'Default Heading'
}

export default Banner