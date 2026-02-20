import React, { useState, useEffect } from 'react';
import NavLinks from '../Navbar/NavLinks';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [top, setTop] = useState(!window.scrollY);
    const [isOpen, setIsOpen] = useState(false);

    function handleClick() {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        const scrollHandler = () => {
            window.pageYOffset > 10 ? setTop(false) : setTop(true);
        };
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, [top]);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
            !top
                ? 'bg-rotsi-black/95 backdrop-blur-md border-b border-white/5 shadow-2xl'
                : 'bg-transparent'
        }`}>
            <div className="flex flex-row justify-between items-center py-4 px-6 lg:px-16 max-w-7xl mx-auto">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2.5">
                    <span className="font-display font-bold text-2xl tracking-tight text-white">ROTSI</span>
                    <span className="text-xs font-body text-rotsi-gold uppercase tracking-widest hidden sm:block">
                        API Solutions
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-8">
                    <NavLinks />
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="lg:hidden flex flex-col justify-center w-8 h-8 gap-1.5 focus:outline-none"
                    onClick={handleClick}
                    aria-label="Toggle menu"
                >
                    <span className={`block w-full h-0.5 bg-white transition-all duration-300 origin-center ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`block w-full h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0 scale-x-0' : ''}`}></span>
                    <span className={`block w-full h-0.5 bg-white transition-all duration-300 origin-center ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                <div className="bg-rotsi-surface border-t border-white/5 px-6 py-6 flex flex-col gap-4">
                    <NavLinks mobile onClick={() => setIsOpen(false)} />
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
