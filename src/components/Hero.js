import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <>
            <NavBar />
            <div className="relative min-h-screen bg-rotsi-black flex items-center overflow-hidden">
                {/* Ambient glow orbs */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-48 -right-48 w-[500px] h-[500px] bg-rotsi-gold/[0.06] rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 -left-48 w-80 h-80 bg-rotsi-gold/[0.04] rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-blue-900/20 rounded-full blur-3xl"></div>
                </div>

                {/* Subtle grid overlay */}
                <div className="absolute inset-0 opacity-[0.025] grid-bg pointer-events-none"></div>

                <div className="relative max-w-7xl mx-auto px-6 lg:px-16 pt-36 pb-24 w-full">
                    <div className="max-w-4xl">
                        {/* Tag pill */}
                        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-rotsi-gold/30 bg-rotsi-gold/10 mb-8">
                            <span className="w-2 h-2 rounded-full bg-rotsi-gold animate-pulse"></span>
                            <span className="text-rotsi-gold text-xs font-body font-semibold uppercase tracking-widest">
                                Bespoke Engineering &amp; Product House
                            </span>
                        </div>

                        {/* Headline */}
                        <h1 className="font-display font-bold text-5xl lg:text-7xl text-white leading-[1.05] tracking-tight mb-6">
                            We Architect{' '}
                            <span className="gold-text">Operational</span>
                            <br />
                            <span className="gold-text">Sovereignty.</span>
                        </h1>

                        {/* Subheadline */}
                        <p className="text-gray-400 text-lg lg:text-xl font-body leading-relaxed max-w-2xl mb-10">
                            We don't just build apps — we replace friction with custom-built digital intelligence.
                            From Tier-1 enterprise engineering to flagship products and 1,000+ merchant networks.
                        </p>

                        {/* Dual CTA */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-rotsi-gold text-rotsi-black font-display font-bold text-base rounded hover:bg-rotsi-gold-light transition-all duration-200 group"
                            >
                                Book a Consultation
                                <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                            <Link
                                to="/ibiza"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white border border-white/20 font-display font-semibold text-base rounded hover:border-rotsi-gold/50 hover:text-rotsi-gold transition-all duration-200"
                            >
                                Explore Ibiza OS
                            </Link>
                        </div>

                        {/* Stats row */}
                        <div className="flex flex-wrap gap-10 mt-16 pt-8 border-t border-white/[0.06]">
                            <div>
                                <div className="font-display font-bold text-3xl text-white">1,000+</div>
                                <div className="text-gray-500 text-sm font-body mt-1">Merchants Digitized</div>
                            </div>
                            <div>
                                <div className="font-display font-bold text-3xl text-white">Tier-1</div>
                                <div className="text-gray-500 text-sm font-body mt-1">Institution Partners</div>
                            </div>
                            <div>
                                <div className="font-display font-bold text-3xl text-white">3</div>
                                <div className="text-gray-500 text-sm font-body mt-1">Modernization Umbrellas</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;
