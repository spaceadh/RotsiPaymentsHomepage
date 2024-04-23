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
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/">
                Portfolio
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/contact#contact">
                Contact Us
            </HashLink>
            <a
                href="https://portal.rotsi.co.ke"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl"
                >
                Create account
            </a>

        </>
    )
}

export default NavLinks;
