import React from 'react';
import { HashLink } from 'react-router-hash-link';

const NavLinks = () => {
    return (
        <>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" smooth to="/#about">
                About
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" smooth to="/#services">
                Services
            </HashLink>
            <a
                href="https://developer.rotsi.co.ke"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 font-extrabold text-blue-900 hover:text-blue-900"
                >
                Developer Portal
            </a>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/contact#contact">
                Contact Us
            </HashLink>
            <a
                href="https://dashboard.rotsi.co.ke"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl"
                >
                Go to Dashboard
            </a>

        </>
    )
}

export default NavLinks;
