import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postContact } from '../redux/async/fetchData';
import DOMPurify from 'dompurify'

const Form = () => {
    const dispatch = useDispatch();
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [website, setWebsite] = useState('');
    const [message, setMessage] = useState('');

    const handleChange = (setter) => (e) => {
        // Membersihkan input menggunakan dompurify
        const sanitizedValue = DOMPurify.sanitize(e.target.value);
        setter(sanitizedValue);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const sanitizedData = {
            name: DOMPurify.sanitize(name),
            email: DOMPurify.sanitize(email),
            website: DOMPurify.sanitize(website),
            message: DOMPurify.sanitize(message),
        };

        dispatch(postContact(sanitizedData));
        
        // Reset form fields
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
                    onChange={handleChange(setName)}
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
                    onChange={handleChange(setEmail)}
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
                    onChange={handleChange(setWebsite)}
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
                    onChange={handleChange(setMessage)}
                />
            </div>
            <button type='submit' className='p-4 bg-black text-white mt-4'>Send Proposal</button>
        </form>
    );
}

export default Form;