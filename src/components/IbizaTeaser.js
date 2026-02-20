import React from 'react';
import { Link } from 'react-router-dom';

const features = [
    { label: 'WhatsApp Sales Automation', icon: '💬' },
    { label: 'Mobile Money Integration', icon: '📱' },
    { label: 'Inventory Tracking', icon: '📦' },
    { label: 'Payment Reconciliation', icon: '⚡' },
    { label: 'Business Intelligence', icon: '📊' },
    { label: 'Bulk SMS Campaigns', icon: '✉️' },
];

const IbizaTeaser = () => {
    return (
        <section className="relative bg-[#0A0A15] py-24 lg:py-32 overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rotsi-gold/[0.05] rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-900/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-16">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Copy */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-rotsi-gold/30 bg-rotsi-gold/10 mb-6">
                            <span className="w-1.5 h-1.5 rounded-full bg-rotsi-gold"></span>
                            <span className="text-rotsi-gold text-xs font-body font-semibold uppercase tracking-wider">
                                Flagship Product
                            </span>
                        </div>

                        <h2 className="font-display font-bold text-4xl lg:text-5xl text-white leading-tight mb-4">
                            Meet <span className="gold-text">Ibiza OS</span>
                        </h2>
                        <p className="text-gray-400 font-body text-lg leading-relaxed mb-8">
                            Our reconciliation and retail engine — built to make modern business{' '}
                            <span className="text-white font-semibold">smooth</span>.
                            Automate your entire commercial flow in one unified platform.
                        </p>

                        {/* Feature pills */}
                        <div className="grid grid-cols-2 gap-3 mb-10">
                            {features.map((f, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.03] border border-white/[0.06]"
                                >
                                    <span className="text-xl leading-none">{f.icon}</span>
                                    <span className="text-gray-300 text-sm font-body">{f.label}</span>
                                </div>
                            ))}
                        </div>

                        <Link
                            to="/ibiza"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-rotsi-gold text-rotsi-black font-display font-bold text-base rounded hover:bg-rotsi-gold-light transition-all duration-200 group"
                        >
                            Explore Ibiza OS
                            <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>

                    {/* Right: Mock dashboard UI */}
                    <div className="relative">
                        <div className="rounded-2xl border border-white/[0.06] bg-rotsi-surface p-1">
                            <div className="bg-[#0A0A15] rounded-xl p-6">
                                {/* Top bar */}
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-rotsi-gold"></div>
                                        <span className="text-white text-sm font-display font-semibold">Ibiza OS</span>
                                    </div>
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-red-500/40"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/40"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500/40"></div>
                                    </div>
                                </div>

                                {/* Metric cards */}
                                <div className="grid grid-cols-2 gap-3 mb-4">
                                    {[
                                        { label: 'Total Revenue', value: 'KES 4.2M', change: '+12%' },
                                        { label: 'Transactions', value: '1,847', change: '+8%' },
                                        { label: 'Active Merchants', value: '234', change: '+23%' },
                                        { label: 'SMS Sent', value: '12.4K', change: '+5%' },
                                    ].map((card, i) => (
                                        <div key={i} className="bg-[#16162A] rounded-lg p-4 border border-white/[0.04]">
                                            <div className="text-gray-500 text-xs font-body mb-1">{card.label}</div>
                                            <div className="text-white font-display font-bold text-lg">{card.value}</div>
                                            <div className="text-green-400 text-xs font-body mt-1">↑ {card.change} this week</div>
                                        </div>
                                    ))}
                                </div>

                                {/* Activity feed */}
                                <div className="bg-[#16162A] rounded-lg p-4 border border-white/[0.04]">
                                    <div className="text-gray-500 text-xs font-body mb-3 uppercase tracking-wider">Recent Activity</div>
                                    <div className="space-y-2.5">
                                        {[
                                            { type: 'M-Pesa Payment', amount: '+KES 12,500', color: 'text-green-400', time: '2m ago' },
                                            { type: 'WhatsApp Order', amount: '+KES 4,200', color: 'text-green-400', time: '15m ago' },
                                            { type: 'Inventory Update', amount: '48 units', color: 'text-rotsi-gold', time: '1h ago' },
                                        ].map((item, i) => (
                                            <div key={i} className="flex justify-between items-center">
                                                <span className="text-gray-400 font-body text-sm">{item.type}</span>
                                                <span className={`font-display font-semibold text-sm ${item.color}`}>{item.amount}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Glow under card */}
                        <div className="absolute -inset-4 -z-10 bg-rotsi-gold/[0.08] blur-3xl rounded-full"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IbizaTeaser;
