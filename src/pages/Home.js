import React from 'react'
import aaUniversity from '../images/addis_ababa_university.png'
import dangote from '../images/dangote.jpg'
import kefeta from '../images/kefeta.png'
import safaricom from '../images/Safaricom_Ethiopia_Logo.jpg'
import ride from '../images/ride.png'
import { services } from '../data'
import { features } from '../data'
import { testomonials } from '../data'
import Typical from 'react-typical'
import Service from '../component/Service'
import Features from '../component/Features'
import Testimony from '../component/Testimony'
import sample from '../video/connection-loop.mp4'

const Home = () => {
  return (
    <main className=' '>
        <header className=' banner-h relative bg-mobile-bg bg-cover bg-right flex flex-col items-center justify-center '>
            <video className=' hidden md:block w-full h-full object-cover ' autoPlay loop muted>
                <source src={sample} type='video/mp4' />
            </video>
            <div className=' absolute flex flex-col justify-center items-center'>
                <Typical className='hidden sm:block text-4xl font-semibold sm:text-3xl md:text-4xl lg:text-5xl mb-12 uppercase text-white' 
                steps={[
                    'Build your Imagination',
                    1000,
                    'Launch Your Creative Businesss',
                    1000,
                    'Extend Your Runway',
                    1000,
                    'Tech Consultancy',
                    1000
                ]}
                loop={Infinity}
                />
                <h1 className=' text-3xl text-white font-semibold text-center mb-6 sm:hidden px-4'>
                    Launch Your Creative Business
                </h1>
                <button className=' bg-secondaryColor w-56 py-3 px-4 sm:py-3 sm:px-8 sm:w-[320px] rounded-full hover:bg-btnHover hover:scale-[1.03] duration-200'>
                 <h2 className='text-lg sm:text-2xl'>
                    Get Started
                 </h2>
                </button>
            </div>
        </header>
        <section className=' max-w-5xl mx-auto my-8 text-center'>
            <h1 className=' text-2xl sm:text-3xl font-medium px-4 uppercase'>
                Who We Have Worked With
            </h1>
            <p className=' text-sm sm:text-base opacity-70 px-4 lg:px-0 '>
                Lorem ipsum dolor sit amet consectetur. Dignissim enim semper porttitor dolor integer. Donec faucibus pellentesque at morbi faucibus.
            </p>
            <div className=' flex px-2 lg:px-0  mx-auto items-center justify-between mt-1 sm:mt-4 '>
                <div className=' w-24 mx-1  mb-2 hover:scale-[1.03] duration-300'><img className=' w-full h-full object-scale-down' src={aaUniversity} alt='addis ababa university' /></div>
                <div className=' w-32 mx-1  hover:scale-[1.03] duration-300'><img className=' w-full h-full object-scale-down' src={dangote} alt='dangote cement company' /></div>
                <div className=' w-32 mx-1  hover:scale-[1.03] duration-300'><img className=' w-full h-full object-scale-down' src={kefeta} alt='kefita youth improvement company' /></div>
                <div className=' w-32 mx-1  hover:scale-[1.03] duration-300'><img className=' w-full h-full object-scale-down' src={safaricom} alt='safaricom network company' /></div>
                <div className=' w-32 mx-1  hover:scale-[1.03] duration-300 mr-2'><img className=' w-full h-full object-scale-down' src={ride} alt='ride hailing company' /></div>
            </div>
        </section>
        <section id='services' className=' bg-primaryColor min-h-screen lg:px-3'>
            <div className=' max-w-5xl px-1 sm:px-0 mx-auto mt-8 text-center py-16 '>
                <h1 className=' text-2xl text-white sm:text-3xl font-medium px-4 uppercase'>
                    Our Services
                </h1>
                <p className=' opacity-70 text-white text-sm sm:text-base px-4 lg:px-0  '>
                    Lorem ipsum dolor sit amet consectetur. Dignissim enim semper porttitor dolor integer. Donec faucibus pellentesque at morbi faucibus.
                </p>
                <div className=' lg:mt-8 px-3 sm:px-0 sm:mt-6  mx-auto  grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 sm:gap-6 justify-between justify-items-center md:mt-8'>
                   {services.map((service) => (
                    <Service 
                        key={service.key}
                        icon={service.icon}
                        title={service.name}
                        desc={service.desc}
                    />
                   ))}
                </div>
                <p className=' text-sm sm:text-base opacity-70 px-4 lg:px-0 text-white font-light mt-10'>
                    Lorem ipsum dolor sit amet consectetur. Fringilla amet semper quam ultrices senectus consequat. Neque semper leo viverra commodo viverra hendrerit. Augue at in turpis gravida aliquam risus feugiat in nullam. Volutpat nec sed magna est lectus quam nulla. Enim praesent cursus nec sit ac ipsum adipiscing. Sed volutpat at tincidunt auctor et tortor pharetra enim. Nam at nec est viverra ac. 
                </p>
            </div>
        </section>
        <section className='  '>
            <div className=' max-w-5xl px-1 sm:px-0 mx-auto mt-16 '>
                <h1 className=' text-2xl sm:text-3xl font-medium px-4 text-center uppercase'>
                    overall features
                </h1>
                <p className=' text-center px-4'>
                Lorem ipsum dolor sit amet consectetur. Dignissim enim semper porttitor dolor integer. Donec faucibus pellentesque at morbi faucibus. Tellus at integer dictum velit. Neque vestibulum vitae magna.
                </p>

                <div className='container mx-auto mt-10 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 justify-items-center lg:mt-10 sm:px-4 md:px-0 md:mt-12'>
                    {features.map(feature => (
                        <Features 
                            key={feature.key}
                            title={feature.feature}
                            desc={feature.desc}
                            icon={feature.icon}
                        />
                    ))}
                </div>

            </div>
        </section>
        <section className='  '>
            <div className=' max-w-5xl px-1 sm:px-0 mx-auto py-16 '>
                <h1 className=' text-2xl sm:text-3xl font-medium px-4 text-center uppercase'>
                    Client testimonials
                </h1>
                <p className=' text-center px-4 '>
                Lorem ipsum dolor sit amet consectetur. Dignissim enim semper porttitor dolor integer. Donec faucibus pellentesque at morbi faucibus.
                </p>

                <div className=' mt-10 mx-2 sm:mx-0 flex flex-col items-center lg:flex-row'>
                {testomonials.map(testimony => (
                        <Testimony
                            key={testimony.id}
                            name={testimony.name}
                            testimony={testimony.testimony}
                            position={testimony.possition}
                        />
                    ))}
                </div>

            </div>
        </section>
    </main>
  )
}

export default Home