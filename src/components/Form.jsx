import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postContact } from '../redux/async/fetchData';

const Form = () => {
    const dispatch = useDispatch();
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [website, setWebsite] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(postContact({ name, email, website, message }));
        
        setName('');
        setEmail('');
        setWebsite('');
        setMessage('');
    };

    return (
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div>
                <input 
                    type="text" 
                    name='name' 
                    id='name' 
                    placeholder='Name*' 
                    className='border-2 border-black/50 w-full p-4'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <input 
                    type="email" 
                    name='email' 
                    id='email' 
                    placeholder='Email*' 
                    className='border-2 border-black/50 w-full p-4'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <input 
                    type="text" 
                    name='website' 
                    id='website' 
                    placeholder='Website URL*' 
                    className='border-2 border-black/50 w-full p-4'
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                />
            </div>
            <div>
                <textarea 
                    style={{resize: "none"}} 
                    name='message' 
                    id='message' 
                    placeholder='message Details*' 
                    className='border-2 border-black/50 w-full p-4 min-h-36'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
            </div>
            <button type='submit' className='p-4 bg-black text-white mt-4'>Send Proposal</button>
        </form>
    );
}

export default Form;