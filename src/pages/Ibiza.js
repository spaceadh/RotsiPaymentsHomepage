import React, { useEffect } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { useDocTitle } from '../components/CustomHook';

const features = [
    {
        title: 'WhatsApp Sales Automation',
        description:
            'Turn conversations into conversions. Process orders, send confirmations, and update inventory in real time — directly from WhatsApp Business.',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
        ),
    },
    {
        title: 'Mobile Money Integration',
        description:
            'M-Pesa, Airtel Money, and more — all flowing into one unified ledger. Automatic reconciliation across every payment rail you operate.',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        title: 'Inventory Management',
        description:
            'Real-time stock tracking synced to every sales channel. Never oversell, never lose track. From single-store to multi-warehouse operations.',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
        ),
    },
    {
        title: 'Payment Reconciliation',
        description:
            'One dashboard for all your tills, paybills, and online sources. Eliminate manual reconciliation and close your books faster.',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
        ),
    },
    {
        title: 'Business Intelligence',
        description:
            'Live analytics on revenue, margins, customer behavior, and operational efficiency. Data that actually drives decisions.',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        ),
    },
    {
        title: 'Bulk SMS & Engagement',
        description:
            'Send targeted campaigns directly from the platform. Personalized messages at scale — promotional, transactional, or operational.',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        title: 'Permission-Based Access',
        description:
            'Role-specific controls for every team member. Set who can view, process, and approve — no unauthorized transactions.',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
    },
    {
        title: 'WooCommerce Integration',
        description:
            'Connect your online store seamlessly. Orders, payments, and inventory sync automatically between your web store and Ibiza OS.',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
        ),
    },
];

const Ibiza = () => {
    useDocTitle('Ibiza OS | Rotsi API Solutions');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-rotsi-black min-h-screen">
            <NavBar />

            {/* Hero */}
            <section className="relative pt-36 pb-24 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-rotsi-gold/[0.05] rounded-full blur-3xl"></div>
                    <div className="absolute inset-0 opacity-[0.02] grid-bg"></div>
                </div>
                <div className="relative max-w-7xl mx-auto px-6 lg:px-16">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-rotsi-gold/30 bg-rotsi-gold/10 mb-8">
                            <span className="w-2 h-2 rounded-full bg-rotsi-gold animate-pulse"></span>
                            <span className="text-rotsi-gold text-xs font-body font-semibold uppercase tracking-widest">
                                Flagship Product — The Ibiza Umbrella
                            </span>
                        </div>

                        <h1 className="font-display font-bold text-5xl lg:text-7xl leading-[1.05] tracking-tight mb-6">
                            <span className="gold-text">Ibiza OS</span>
                        </h1>
                        <p className="text-2xl lg:text-3xl font-display font-medium text-gray-300 mb-6 leading-tight">
                            The reconciliation and retail engine that makes modern business{' '}
                            <span className="text-white">smooth.</span>
                        </p>
                        <p className="text-gray-400 font-body text-lg leading-relaxed max-w-2xl mb-10">
                            One unified platform connecting your WhatsApp sales, mobile money, inventory,
                            and analytics. Stop managing chaos across five tools — run everything from one OS.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                to="/get-demo"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-rotsi-gold text-rotsi-black font-display font-bold text-base rounded hover:bg-rotsi-gold-light transition-all duration-200 group"
                            >
                                Request a Demo
                                <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                            <a
                                href="https://dashboard.rotsi.co.ke"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-display font-semibold text-base rounded hover:border-rotsi-gold/50 hover:text-rotsi-gold transition-all duration-200"
                            >
                                Go to Dashboard
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features grid */}
            <section className="bg-[#0A0A15] py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-16">
                    <div className="mb-14 max-w-2xl">
                        <span className="text-rotsi-gold text-xs font-body font-semibold uppercase tracking-widest">
                            Everything in One Flow
                        </span>
                        <h2 className="font-display font-bold text-4xl text-white mt-3 mb-4">
                            Eight engines. One OS.
                        </h2>
                        <p className="text-gray-400 font-body text-lg leading-relaxed">
                            Every feature in Ibiza OS is built to work together, eliminating the data silos
                            and manual work that kill productivity.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {features.map((f, i) => (
                            <div
                                key={i}
                                className="group p-6 rounded-xl bg-rotsi-surface border border-white/[0.06] hover:border-rotsi-gold/20 transition-all duration-300"
                            >
                                <div className="text-rotsi-gold mb-4 transition-transform duration-300 group-hover:scale-110">
                                    {f.icon}
                                </div>
                                <h3 className="font-display font-semibold text-white text-base mb-2">
                                    {f.title}
                                </h3>
                                <p className="text-gray-500 font-body text-sm leading-relaxed">
                                    {f.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Philosophy section */}
            <section className="bg-rotsi-black py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-16">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-rotsi-gold text-xs font-body font-semibold uppercase tracking-widest">
                                The Philosophy
                            </span>
                            <h2 className="font-display font-bold text-4xl text-white mt-3 mb-6 leading-tight">
                                Business should be smooth,
                                <br />not a series of workarounds.
                            </h2>
                            <p className="text-gray-400 font-body text-lg leading-relaxed mb-5">
                                Most businesses run on a patchwork of disconnected tools — a spreadsheet here,
                                a mobile money app there, WhatsApp on the side. The result is friction, errors, and missed revenue.
                            </p>
                            <p className="text-gray-400 font-body text-lg leading-relaxed mb-8">
                                Ibiza OS replaces that entire stack. One login. One dashboard. One source of truth.
                            </p>
                            <div className="space-y-3">
                                {[
                                    'All payment sources reconciled automatically',
                                    'WhatsApp orders processed without manual entry',
                                    'Inventory updated the moment a sale is made',
                                    'Teams working from the same live data',
                                ].map((point, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-rotsi-gold shrink-0"></div>
                                        <span className="text-gray-300 font-body text-sm">{point}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="p-8 rounded-2xl bg-rotsi-surface border border-white/[0.06]">
                            <div className="text-center mb-8">
                                <div className="inline-flex items-center gap-2 mb-2">
                                    <div className="w-2 h-2 rounded-full bg-rotsi-gold"></div>
                                    <span className="font-display font-semibold text-white text-lg">Ibiza OS</span>
                                </div>
                                <p className="text-gray-500 text-sm font-body">Unified Business Intelligence</p>
                            </div>
                            <div className="space-y-0">
                                {[
                                    { label: 'Payment Sources', value: 'M-Pesa, Airtel, Cards, Cash' },
                                    { label: 'Sales Channels', value: 'WhatsApp, WooCommerce, POS' },
                                    { label: 'Reconciliation', value: 'Automatic & Real-Time' },
                                    { label: 'Access Control', value: 'Role-Based Permissions' },
                                    { label: 'Reports', value: 'Live Business Intelligence' },
                                ].map((item, i) => (
                                    <div key={i} className="flex justify-between items-center py-3.5 border-b border-white/[0.05] last:border-0">
                                        <span className="text-gray-500 font-body text-sm">{item.label}</span>
                                        <span className="text-gray-200 font-body text-sm font-medium">{item.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="bg-rotsi-surface border-t border-white/[0.05] py-20">
                <div className="max-w-2xl mx-auto px-6 text-center">
                    <h2 className="font-display font-bold text-4xl text-white mb-4">
                        Ready to run on Ibiza OS?
                    </h2>
                    <p className="text-gray-400 font-body text-lg mb-8">
                        Book a demo and see how Ibiza OS can replace your entire retail and payment stack.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/get-demo"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-rotsi-gold text-rotsi-black font-display font-bold text-base rounded hover:bg-rotsi-gold-light transition-all duration-200 group"
                        >
                            Request a Demo
                            <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/10 text-white font-display font-semibold text-base rounded hover:border-rotsi-gold/30 hover:text-rotsi-gold transition-all duration-200"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Ibiza;
