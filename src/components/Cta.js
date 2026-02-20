import React from 'react';
import { Link } from 'react-router-dom';

const Cta = () => {
    return (
        <section className="relative bg-rotsi-surface py-24 overflow-hidden">
            {/* Background grid + glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 opacity-[0.025] grid-bg"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rotsi-gold/[0.07] rounded-full blur-3xl"></div>
            </div>

            <div className="relative max-w-4xl mx-auto px-6 lg:px-16 text-center">
                <span className="text-rotsi-gold text-xs font-body font-semibold uppercase tracking-widest">
                    Ready?
                </span>
                <h2 className="font-display font-bold text-4xl lg:text-6xl text-white mt-4 mb-6 leading-tight">
                    Build Something{' '}
                    <span className="gold-text">Impossible.</span>
                </h2>
                <p className="text-gray-400 font-body text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
                    Whether you need enterprise-grade engineering, want to run Ibiza OS,
                    or need to digitize a merchant network — we've done it before. Let's do it together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/10 text-white font-display font-semibold text-base rounded hover:border-rotsi-gold/30 hover:text-rotsi-gold transition-all duration-200"
                    >
                        Explore Ibiza OS
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Cta;
