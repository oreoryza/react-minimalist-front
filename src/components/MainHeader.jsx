import  React from 'react'
import pattern from '../assets/pattern.svg'
import handString from '../assets/handString.svg'

const MainHeader = () => {
  return (
    <div>
        <div className='relative flex justify-between items-center bg-yellow w-100 min-h-screen'>
            <object data={pattern} type="image/svg+xml" className='max-w-full pr-[8%] pb-6' alt="pattern">
                <img src={pattern} alt="pattern" />
            </object>
            <div className='absolute flex flex-col justify-center font-open-sans mx-[16.5%]'>
                <h1 className='lg:text-7xl text-5xl font-bold max-w-xl leading-tight my-14'>Let's create something great together.</h1>
                <div className='mt-8 relative flex items-center'>
                    <div className='w-10 h-10 rounded-full bg-white'></div>
                    <a href="callto:+5555555" className='absolute z-10 text-black font-bold text-lg ml-4'>BOOK A FREE CALL <i className="bi bi-arrow-right ml-2"></i></a>
                </div>
            </div>
            <div className='absolute bottom-0 -mb-24 hidden lg:flex'>
            <object data={handString} type="image/svg+xml" className='max-w-full' alt="handString">
                <img src={handString} alt="handString" />
            </object>
            </div>
        </div>
    </div>
  )
}

export default MainHeader