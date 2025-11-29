'use client';

import React, { useState, FormEvent, FunctionComponent, SVGProps } from 'react';

const Login = () => {
    // Defining variables
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [error, setError] = useState<boolean>();    

    // Submission of Form, DB

    const Submission = (e: FormEvent<HTMLFormElement>) => { // triggered on HTML form submission
        e.preventDefault()
        setError(false);
        setMessage('Loading...');
        setTimeout(() => {      
        if (email === 'YYY' && password === 'XXX') { // GOTTA CHANGE FROM HARDCODED TO THE DATABASE ONCE THAT'S MADE!
            setMessage('Login successful.');
            setError(false);
        } else {
            setMessage('Wrong username or password');
            setError(true);
        }
        }, 1500);
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-800 via-slate-900 to-black flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-slate-800/80 backdrop-blur-sm border-2 border-blue-500/30 rounded-3xl p-8 sm:p-10">
                <form className="justify-center" action="">
                    <input className="w-full bg-slate-800/80 rounded-3xl p-2 sm:p-4 mb-4 border-2 border-blue-300/30" type="text" id="FBLC Email" name="email" placeholder='Enter your FBLC Email' />
                    <input className="w-full bg-slate-800/80 rounded-3xl p-2 sm:p-4 border-2 border-blue-300/30" type="password" id="Password" name="password" placeholder='Enter your password' />
                </form>
            </div>
        </div>
    )
}

export default Login; 