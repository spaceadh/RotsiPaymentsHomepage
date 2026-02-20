import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

const NavLinks = ({ mobile, onClick }) => {
    const linkClass = mobile
        ? 'block text-gray-300 hover:text-rotsi-gold transition-colors duration-200 font-body text-base py-2'
        : 'text-gray-400 hover:text-white transition-colors duration-200 font-body text-sm font-medium';

    return (
        <>
            <HashLink className={linkClass} smooth to="/#about" onClick={onClick}>
                About
            </HashLink>
            <HashLink className={linkClass} smooth to="/#services" onClick={onClick}>
                Services
            </HashLink>
            <Link className={linkClass} to="/ibiza" onClick={onClick}>
                Ibiza OS
            </Link>
            <a
                className={linkClass}
                href="https://developer.rotsi.co.ke"
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClick}
            >
                Developer Portal
            </a>
            <Link className={linkClass} to="/contact" onClick={onClick}>
                Contact
            </Link>
            <a
                href="https://dashboard.rotsi.co.ke"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-rotsi-gold text-rotsi-black font-body font-bold text-sm rounded hover:bg-rotsi-gold-light transition-colors duration-200 inline-block"
                onClick={onClick}
            >
                Go to Dashboard
            </a>
        </>
    );
};

export default NavLinks;
