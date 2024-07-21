import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase'; // Assuming auth is correctly imported from your firebase configuration
import { createUserWithEmailAndPassword } from 'firebase/auth'; // Correct import for Firebase v9
import { toast } from 'react-toastify';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignIn = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            toast.error('Please enter email and password.');
            return;
        }

        try {
            // Call createUserWithEmailAndPassword with auth and await the promise
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user; // Access the created user object if needed

            toast.success('User registered successfully!');
            setEmail('');
            setPassword('');
            navigate('/'); // Navigate to home or desired location after successful signup
        } catch (error) {
            // Handle errors from Firebase authentication
            console.error('Error signing up:', error.message);
            toast.error('Something went wrong. Please try again.');
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
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
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default SignUp;
