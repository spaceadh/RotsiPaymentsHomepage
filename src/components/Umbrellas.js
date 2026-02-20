import React from 'react';
import { Link } from 'react-router-dom';

const umbrellas = [
    {
        number: '01',
        title: 'Bespoke Enterprise Engineering',
        subtitle: 'The Consultancy Umbrella',
        description:
            "Adjustable-priced, custom-coded solutions for every scale — from growing businesses all the way to Tier-1 institutions. We solve the \"impossible\" technical debt problems that off-the-shelf software can't touch.",
        example: 'Case: Architecting core membership and trade data infrastructure for ATIDI.',
        cta: 'Book a Consultation',
        ctaLink: '/contact',
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        ),
    },
    {
        number: '02',
        title: 'The Product Ecosystem',
        subtitle: 'The Ibiza Umbrella',
        description:
            'Ibiza OS — our flagship reconciliation and retail engine. Designed to make modern business smooth by automating everything from WhatsApp sales and mobile money to inventory tracking in one seamless flow.',
        example: 'One platform. Zero friction. Total business intelligence.',
        cta: 'Explore Ibiza OS',
        ctaLink: '/ibiza',
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
            </svg>
        ),
    },
    {
        number: '03',
        title: 'Strategic Integration & Scale',
        subtitle: 'The Distributor Umbrella',
        description:
            'Digitizing massive networks through intelligent API rails. We help distributors and large-scale businesses gain total control over their supply chain and cash flow through modern technology.',
        example: 'Currently powering 1,000+ merchant networks across East Africa.',
        cta: 'Get in Touch',
        ctaLink: '/contact',
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
    },
];

const Umbrellas = () => {
    return (
        <section id="about" className="bg-rotsi-black py-24 lg:py-32">
            <div className="max-w-7xl mx-auto px-6 lg:px-16">
                {/* Section header */}
                <div className="mb-16 max-w-2xl">
                    <span className="text-rotsi-gold text-xs font-body font-semibold uppercase tracking-widest">
                        What We Do
                    </span>
                    <h2 className="font-display font-bold text-4xl lg:text-5xl text-white mt-3 mb-4 leading-tight">
                        Three Modernization Umbrellas
                    </h2>
                    <p className="text-gray-400 font-body text-lg leading-relaxed">
                        Every engagement we take on fits one of three models. Each designed to deliver total operational control.
                    </p>
                </div>

                {/* Umbrella cards */}
                <div id="services" className="space-y-5">
                    {umbrellas.map((umbrella, i) => (
                        <div
                            key={i}
                            className="group relative p-8 lg:p-10 rounded-2xl border border-white/[0.06] bg-rotsi-surface hover:border-rotsi-gold/20 transition-all duration-500"
                        >
                            {/* Left gold accent bar */}
                            <div className="absolute left-0 top-8 bottom-8 w-0.5 bg-white/[0.06] group-hover:bg-rotsi-gold/40 transition-colors duration-500 rounded-full"></div>

                            <div className="flex flex-col lg:flex-row lg:items-start gap-6 pl-5">
                                {/* Number + icon */}
                                <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:w-20 shrink-0">
                                    <span className="font-display font-bold text-5xl text-white/[0.05] group-hover:text-rotsi-gold/15 transition-colors duration-500 leading-none select-none">
                                        {umbrella.number}
                                    </span>
                                    <div className="text-rotsi-gold">
                                        {umbrella.icon}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                                        <div>
                                            <p className="text-rotsi-gold/60 text-xs font-body uppercase tracking-widest mb-2">
                                                {umbrella.subtitle}
                                            </p>
                                            <h3 className="font-display font-bold text-2xl lg:text-3xl text-white mb-4">
                                                {umbrella.title}
                                            </h3>
                                            <p className="text-gray-400 font-body text-base leading-relaxed max-w-2xl mb-3">
                                                {umbrella.description}
                                            </p>
                                            <p className="text-gray-600 text-sm font-body italic">
                                                {umbrella.example}
                                            </p>
                                        </div>
                                        <Link
                                            to={umbrella.ctaLink}
                                            className="shrink-0 self-start inline-flex items-center gap-2 px-6 py-3 border border-rotsi-gold/30 text-rotsi-gold font-body font-semibold text-sm rounded hover:bg-rotsi-gold hover:text-rotsi-black transition-all duration-200 group/btn"
                                        >
                                            {umbrella.cta}
                                            <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Umbrellas;
