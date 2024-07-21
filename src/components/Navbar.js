import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-blue-500 p-4">
            <div className="container mx-auto flex justify-between">
                <div>
                    <Link to="/" className="text-white mr-4">Home</Link>
                    <Link to="/about" className="text-white mr-4">About</Link>
                    <Link to="/contact" className="text-white">Contact</Link>
                </div>
                <div>
                    <Link to="/signin" className="text-white mr-4">Sign In</Link>
                    <Link to="/signup" className="text-white">Sign Up</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
