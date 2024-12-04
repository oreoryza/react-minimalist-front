import React from 'react'

const Form = () => {
  return (
    <form className='flex flex-col gap-4'>
        <div className=''>
            <input type="text" name='name' id='name' placeholder='Name*' className='border-2 border-black/50 w-full p-4'/>
        </div>
        <div className=''>
            <input type="email" name='email' id='email' placeholder='Email*' className='border-2 border-black/50 w-full p-4'/>
        </div>
        <div className=''>
            <input type="text" name='website' id='website' placeholder='Website URL*' className='border-2 border-black/50 w-full p-4'/>
        </div>
        <div className=''>
            <textarea style={{resize: "none"}} type="text" name='project' id='project' placeholder='Project Details*' className='border-2 border-black/50 w-full p-4 min-h-36'/>
        </div>
        <button className='p-4 bg-black text-white mt-4'>Send Proposal</button>
    </form>
  )
}

export default Form