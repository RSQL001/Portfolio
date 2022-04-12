import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name= 'home' className='w-full h-screen bg-[#0a192f]'>
    
    {/*Container*/}
    <div className='max-w[1080px] mx-auto px-8 flex flex-col justify-center h-full'>
    <p className='text-pink-600'>Hi, my name is </p>
    <h1 className='text-4xl sm:text-7xl font-bold text-white'>Razak Abilagbo</h1>
    <h2 className='text-4xl sm:text-7xl font-bold text-gray-300'>I'm a FrontEnd Developer.</h2>
    <p className='py-4 max-w-[700px] text-gray-300'>I'm a FrontEnd developer specializing in building (and ocasionally 
        designing) exceptional digital experiences. Currently, I'm focused 
        on building responsive full stack web applications.</p>


        <div>
        <Link to="work" smooth={true} duration={500} >
        <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'> View Work
            <span className='group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-5'/>
            </span>
        </button>
        </Link>
        </div>
        
    </div>

    
    </div>
  )
}

export default Home