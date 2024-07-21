import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import { auth } from '../firebase';  // Ensure this import is correct
import { signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();  // Initialize useNavigate

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            toast.success('Sign in Successfully');
            setEmail('');
            setPassword('');
            navigate('/');  // Redirect to home page
        } catch (error) {
            toast.error('Email OR Password Invalid!');
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Sign In</h1>
            <form onSubmit={handleSignIn} className="mb-4">
                <div className="mb-2">
                    <label className="block text-lg font-bold">Email:</label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        className="border rounded p-2 w-full" 
                    />
                </div>
                <div className="mb-2">
                    <label className="block text-lg font-bold">Password:</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        className="border rounded p-2 w-full" 
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Sign In</button>
            </form>
        </div>
    );
};

export default SignIn;
