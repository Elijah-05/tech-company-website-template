import React from 'react'
import { GiCheckMark } from 'react-icons/gi'

const Pricing = () => {
  return (
    <section className=' min-h-screen sm:px-2'>
      <div className=' max-w-5xl px-1 sm:px-0 mx-auto py-16 '>

        <h1 className=' text-2xl sm:text-3xl font-medium px-4 text-center uppercase'>
          Our best pricing
        </h1>
        <p className=' text-center px-4 '>
          Lorem ipsum dolor sit amet consectetur. Dignissim enim semper porttitor dolor integer. Donec faucibus pellentesque at morbi faucibus.
        </p>

        <div className=' mt-10 mx-2 sm:mx-0 flex flex-col items-center md:flex-row justify-between '>

          <div className='pricing-container bg-slate-200  sm:w-[320px] max-w-[370px] min-h-[470px] rounded-xl flex flex-col justify-between py-6 px-4 lg:px-4 md:px-3 lg:hover:scale-[1.005]  hover:-translate-y-2 hover:shadow-xl duration-300 my-4 lg:my-0 mx-1'>
            <div className=' mt-3'>
              <h2 className='price-title text-center text-2xl font-semibold duration-200 '>Starter</h2>
              <h1 className=' text-center font-medium '><span className=' text-4xl  '>699</span>.00</h1>
              <p className=' text-center font-light '><span className=' font-medium'>Birr/</span>month</p>
              <ul className='mt-6 mb-10'>
                <li className=' flex items-center my-1'><GiCheckMark className='mr-3' /> Lorem ipsum dolor sit</li>
                <li className=' flex items-center my-1'><GiCheckMark className='mr-3' /> Lpsum dolor sit amet consectetur.</li>
                <li className=' flex items-center my-1'><GiCheckMark className='mr-3' /> Lorem ipsum dolor sit</li>
                <li className=' flex items-center my-1'><GiCheckMark className='mr-3' /> Lipsum dolor sit amet consectetur.</li>
                <li className=' flex items-center my-1'><GiCheckMark className='mr-3' /> Lorem ipsum dolor sit amet</li>
                <li className=' flex items-center my-1'><GiCheckMark className='mr-3' /> Dolor ipsum dolor sit</li>
                <li className=' flex items-center my-1'><GiCheckMark className='mr-3' /> Sit amet ipsum anet sita</li>
              </ul>
            </div>
            <button className=' bg-secondaryColor font-semibold hover:text-white py-3 rounded-full w-3/4 max-w-40 mx-auto '>
              Start Now!
            </button>
          </div>
          <div className='pricing-container bg-slate-200  sm:w-[320px] max-w-[370px] min-h-[470px] rounded-xl flex flex-col justify-between py-6 px-4 lg:px-4 md:px-3 md:shadow-xl lg:hover:scale-[1.005]  hover:-translate-y-2 duration-300 my-4 lg:my-0 mx-1'>
            <div className=' mt-3'>
              <h2 className='price-title text-center text-2xl font-semibold '>
                Pro
              </h2>
              <h1 className=' text-center font-medium '>
                <span className=' text-4xl  '>1444</span>.00
              </h1>
              <p className=' text-center font-light '><span className=' font-medium'>Birr/</span>month</p>
              <ul className='mt-6 mb-10 '>
                <li className=' flex items-center my-1'><GiCheckMark className='mr-3' /> Lorem ipsum dolor sit</li>
                <li className=' flex items-center my-1'><GiCheckMark className='mr-3' /> Lpsum dolor sit amet consectetur.</li>
                <li className=' flex items-center my-1'><GiCheckMark className='mr-3' /> Lorem ipsum dolor sit</li>
                <li className=' flex items-center my-1'><GiCheckMark className='mr-3' /> Dolor ipsum dolor sit</li>
                <li className=' flex items-center my-1'><GiCheckMark className='mr-3' /> Sit amet ipsum anet sita</li>
                <li className=' flex items-center my-1'><GiCheckMark className='mr-3' /> Lipsum dolor sit amet consectetur.</li>
                <li className=' flex items-center my-1'><GiCheckMark className='mr-3' /> Lorem ipsum dolor sit amet</li>
                <li className=' flex items-center my-1'><GiCheckMark className='mr-3' /> Dolor ipsum dolor sit</li>
                <li className=' flex items-center my-1'><GiCheckMark className='mr-3' /> Sit amet ipsum anet sita</li>
                <li className=' flex items-center my-1'><GiCheckMark className='mr-3' /> Dolor ipsum dolor sit</li>
                <li className=' flex items-center my-1'><GiCheckMark className='mr-3' /> Sit amet ipsum anet sita</li>
              </ul>
            </div>
            <button className=' bg-secondaryColor font-semibold hover:text-white py-3 rounded-full w-3/4 min-w-40 mx-auto '>
              Start Now!
            </button>
          </div>
          <div className='pricing-container bg-slate-200  sm:w-[320px] max-w-[370px] min-h-[470px] rounded-xl flex flex-col justify-between py-6 px-4 lg:px-4 md:px-3 lg:hover:scale-[1.005] hover:-translate-y-2 hover:shadow-xl duration-300 my-4 lg:my-0 mx-1'>
            <div className=' mt-3'>
              <h2 className='price-title text-center text-2xl font-semibold '>
                Premium
              </h2>
              <h1 className=' text-center font-medium '>
                <span className=' text-4xl '>2799</span>.00
              </h1>
              <p className=' text-center font-light '><span className=' font-medium'>Birr/</span>month</p>
              <ul className='mt-6 mb-10'>
                <li className=' flex items-center my-1'><GiCheckMark className='mr-3' /> Lorem ipsum dolor sit</li>
                <li className=' flex items-center my-1'><GiCheckMark className='mr-3' /> Lpsum dolor sit amet consectetur.</li>
                <li className=' flex items-center my-1'><GiCheckMark className='mr-3' /> Lorem ipsum dolor sit</li>
                <li className=' flex items-center my-1'><GiCheckMark className='mr-3' /> Lipsum dolor sit amet consectetur.</li>
                <li className=' flex items-center my-1'><GiCheckMark className='mr-3' /> Lorem ipsum dolor sit amet</li>
                <li className=' flex items-center my-1'><GiCheckMark className='mr-3' /> Dolor ipsum dolor sit</li>
                <li className=' flex items-center my-1'><GiCheckMark className='mr-3' /> Sit amet ipsum anet sita</li>
                <li className=' flex items-center my-1'><GiCheckMark className='mr-3' /> Dolor ipsum dolor sit</li>
                <li className=' flex items-center my-1'><GiCheckMark className='mr-3' /> Sit amet ipsum anet sita</li>
              </ul>
            </div>
            <button className=' bg-secondaryColor font-semibold hover:text-white py-3 rounded-full w-3/4 min-w-40 mx-auto '>
              Start Now!
            </button>
          </div>
        </div>
        <p className=' text-center px-4 mt-12'>
          Lorem ipsum dolor sit amet consectetur. Fringilla amet semper quam ultrices senectus consequat. Neque semper leo viverra commodo viverra hendrerit. Augue at in turpis gravida aliquam risus feugiat in nullam. Volutpat nec sed magna est lectus quam nulla. Enim praesent cursus nec sit ac ipsum adipiscing. Sed volutpat at tincidunt auctor et tortor pharetra enim. Nam at nec est viverra ac. 
        </p>
      </div>
    </section>
  )
}

export default Pricing