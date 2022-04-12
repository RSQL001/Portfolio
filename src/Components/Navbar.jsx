import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../assets/initials.png'
import {Link} from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav) 


  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-black text-gray-50 300'>
        <div className='cursor-pointer'>
        <Link to="home" smooth={true} duration={500} >
            <img src={Logo} alt="Logo Image" style={{width: '50px'}}/>
            </Link>
        </div>

        {/*Menu List*/}
          <ul className='hidden md:flex'>
            <li>
            <Link to="home" smooth={true} duration={500} >
               Home
            </Link>
            </li>
            <li>
            <Link to="about" smooth={true} duration={500} >
               About
            </Link>
            </li>
            <li>
              <Link to="work" smooth={true} duration={500} >
               Work
            </Link>
            </li>
            <li>
              <Link to="skills" smooth={true} duration={500} >
               Skills
            </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500} >
               Contact
            </Link>
            </li>
          </ul>

        {/*Hamburger Icon*/}
        <div onClick={handleClick} className='md:hidden z-10'>
          {!nav ? <FaBars/> : <FaTimes/>}
        </div>

        {/*Mobile Menue*/}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>
              <Link onClick={handleClick} to="home" smooth={true} duration={500} >
               Home
            </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="about" smooth={true} duration={500} >
               About
            </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="work" smooth={true} duration={500} >
               Work
            </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="skills" smooth={true} duration={500} >
               Skills
            </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="contact" smooth={true} duration={500} >
               Contact
            </Link>
            </li>
          </ul>

        {/*Social Icon*/}
        <div className='hidden'></div>

    </div>
  )
}

export default Navbar