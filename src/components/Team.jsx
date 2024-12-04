import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";

const Team = () => {
    const team = [
        {
            name: "John Doe",
            position: "CEO",
            image: "https://letsenhance.io/static/03620c83508fc72c6d2b218c7e304ba5/11499/UpscalerAfter.jpg"
        },
        {
            name: "Jane Doe",
            position: "CTO",
            image: "https://letsenhance.io/static/03620c83508fc72c6d2b218c7e304ba5/11499/UpscalerAfter.jpg"
        },
        {
            name: "John Doe",
            position: "CEO",
            image: "https://letsenhance.io/static/03620c83508fc72c6d2b218c7e304ba5/11499/UpscalerAfter.jpg"
        },
    ]

  return (
    <div className='grid grid-cols-3 gap-12'>
        {team.map((member, index) => (
            <div key={index} className='bg-white p-4 drop-shadow-md'>
                <div className='h-72'>
                    <img src={member.image} alt={member.name} className='w-full h-full object-cover' />
                </div>
                <div className='flex flex-col gap-2 py-8 px-2'>
                <h3 className='text-2xl font-bold'>{member.name}</h3>
                <p className='text-lg text-black/[.5] font-medium'>{member.position}</p>
                </div>
                <div className='flex gap-4 text-black/[.5] px-2'>
                    <a className='flex items-center'>LINKEDIN <FiArrowUpRight /></a>
                    <a className='flex items-center'>INSTAGRAM <FiArrowUpRight /></a>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Team