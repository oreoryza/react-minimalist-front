import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Logo.svg'
import notif from '../assets/notif.svg'

import { FaTwitter, FaFacebookF, FaGooglePlusG } from "react-icons/fa";

const  Footer = () => {
  return (
    <div className='text-white bg-black p-16'>
        <div className='flex gap-64'>
            <div className='flex flex-col gap-6 max-w-md'>
                <object data={logo} type="image/svg+xml" className='max-w-24'>
                    <img src={logo} alt="Logo" />
                </object>
                <p>Dsgnr. is an award winning creative and design agency 
                based in New York, USA.</p>
                <button className='flex gap-12 border-2 border-dark-yellow py-4 px-6 max-w-xs hover:bg-dark-yellow hover:text-black transition duration-300'>
                    <object data={notif} type="image/svg+xml" className='w-6'>
                        <img src={notif} alt="notification" />
                    </object>
                    <p>info@dsgnr.com</p>
                </button>
            </div>
            <div className='flex gap-16'>
                <div className='flex flex-col gap-4'>
                    <p className='font-bold'>What We Do</p>
                    <ul className='flex flex-col gap-1'>
                        <li>Intro</li>
                        <li>Home</li>
                        <Link to="/our-work">
                        <li>Work</li>
                        </Link>
                        <li>Pricing</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-4'>
                    <p className='font-bold'>Who We Are</p>
                    <ul className='flex flex-col gap-1'>
                        <li>About</li>
                        <li>News</li>
                        <li>Testimonials</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='flex justify-between mt-16'>
            <div className='flex gap-8'>
                <p>Privacy Policy</p>
                <p>Terms</p>
            </div>
            <div className='flex gap-8 text-xl'>
                <FaTwitter />
                <FaFacebookF />
                <FaGooglePlusG className='scale-150' />
            </div>
        </div>
    </div>
  )
}

export default Footer