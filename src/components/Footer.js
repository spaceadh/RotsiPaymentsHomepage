import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-[#060610] border-t border-white/[0.05] pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6 lg:px-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
                    {/* Brand block */}
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-2.5 mb-4">
                            <span className="font-display font-bold text-2xl text-white">ROTSI</span>
                            <span className="text-xs text-rotsi-gold uppercase tracking-widest">API Solutions</span>
                        </div>
                        <p className="text-gray-500 font-body text-sm leading-relaxed max-w-xs mb-6">
                            A Bespoke Engineering &amp; Product House. We architect operational sovereignty for businesses at every scale.
                        </p>
                        {/* Social links */}
                        <div className="flex gap-3">
                            <a
                                href="https://www.linkedin.com/company/rotsi-api"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded border border-white/10 flex items-center justify-center text-gray-400 hover:border-rotsi-gold/40 hover:text-rotsi-gold transition-colors duration-200"
                                aria-label="LinkedIn"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                            <a
                                href="https://www.facebook.com/ENLIGHTENEERING/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded border border-white/10 flex items-center justify-center text-gray-400 hover:border-rotsi-gold/40 hover:text-rotsi-gold transition-colors duration-200"
                                aria-label="Facebook"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-display font-semibold text-white text-xs uppercase tracking-widest mb-5">Services</h4>
                        <ul className="space-y-3">
                            <li>
                                <HashLink smooth to="/#about" className="text-gray-500 hover:text-rotsi-gold text-sm font-body transition-colors duration-200">
                                    Bespoke Engineering
                                </HashLink>
                            </li>
                            <li>
                                <Link to="/ibiza" className="text-gray-500 hover:text-rotsi-gold text-sm font-body transition-colors duration-200">
                                    Ibiza OS
                                </Link>
                            </li>
                            <li>
                                <HashLink smooth to="/#services" className="text-gray-500 hover:text-rotsi-gold text-sm font-body transition-colors duration-200">
                                    Strategic Integration
                                </HashLink>
                            </li>
                            <li>
                                <a href="https://developer.rotsi.co.ke" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-rotsi-gold text-sm font-body transition-colors duration-200">
                                    Developer Portal
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Company + Contact */}
                    <div>
                        <h4 className="font-display font-semibold text-white text-xs uppercase tracking-widest mb-5">Company</h4>
                        <ul className="space-y-3 mb-8">
                            <li>
                                <HashLink smooth to="/#about" className="text-gray-500 hover:text-rotsi-gold text-sm font-body transition-colors duration-200">
                                    About
                                </HashLink>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-500 hover:text-rotsi-gold text-sm font-body transition-colors duration-200">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <a href="https://dashboard.rotsi.co.ke" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-rotsi-gold text-sm font-body transition-colors duration-200">
                                    Dashboard
                                </a>
                            </li>
                        </ul>

                        <h4 className="font-display font-semibold text-white text-xs uppercase tracking-widest mb-3">Contact</h4>
                        <div className="space-y-1">
                            <p className="text-gray-500 text-sm font-body">support@rotsi.co.ke</p>
                            <p className="text-gray-500 text-sm font-body">+254 745 474 586</p>
                            <p className="text-gray-500 text-sm font-body">Mombasa Road, Nairobi, Kenya</p>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-white/[0.05] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-gray-600 text-sm font-body">
                        &copy; {year} Rotsi API Solutions. All rights reserved.
                    </p>
                    <p className="text-gray-600 text-xs font-body tracking-wider uppercase">
                        Bespoke Engineering &amp; Product House
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
