import React, { useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';
import axios from 'axios';
import Notiflix from 'notiflix';

const inputClass =
    'w-full bg-white/[0.05] border border-white/10 text-white placeholder-gray-500 mt-2 p-3 rounded-lg focus:outline-none focus:border-rotsi-gold/50 transition-colors duration-200 font-body text-sm';

const demoOptions = [
    { id: 'cb-payments', value: 'payments', label: 'Payment Reconciliation' },
    { id: 'cb-sms', value: 'bulk_sms', label: 'Bulk SMS' },
    { id: 'cb-analytics', value: 'data_analytics', label: 'Data Analytics' },
    { id: 'cb-ibiza', value: 'ibiza_os', label: 'Full Ibiza OS Demo' },
];

const DemoProduct = () => {
    useDocTitle('Request a Demo | Rotsi API Solutions');

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [demoProducts, setDemoProducts] = useState([]);
    const [errors, setErrors] = useState([]);

    const handleChange = (e) => {
        const value = e.target.value;
        const checked = e.target.checked;
        errors.products = [];
        if (checked) {
            setDemoProducts([...demoProducts, value]);
        } else {
            setDemoProducts(demoProducts.filter((item) => item !== value));
        }
    };

    const clearErrors = () => setErrors([]);

    const clearInput = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setMessage('');
    };

    function sendEmail(e) {
        e.preventDefault();
        document.getElementById('submitBtn').disabled = true;
        document.getElementById('submitBtn').innerHTML = 'Sending...';
        let fData = new FormData();
        fData.append('first_name', firstName);
        fData.append('last_name', lastName);
        fData.append('email', email);
        fData.append('phone_number', phone);
        fData.append('message', message);
        fData.append('products', demoProducts);

        axios({
            method: 'post',
            url: process.env.REACT_APP_DEMO_REQUEST_API,
            data: fData,
            headers: { 'Content-Type': 'multipart/form-data' },
        })
            .then(function (response) {
                document.getElementById('submitBtn').disabled = false;
                document.getElementById('submitBtn').innerHTML = 'Send Request';
                clearInput();
                Notiflix.Report.success('Success', response.data.message, 'Okay');
            })
            .catch(function (error) {
                document.getElementById('submitBtn').disabled = false;
                document.getElementById('submitBtn').innerHTML = 'Send Request';
                const { response } = error;
                if (response.status === 500) {
                    Notiflix.Report.failure('An error occurred', response.data.message, 'Okay');
                }
                if (response.data.errors !== null) {
                    setErrors(response.data.errors);
                }
            });
    }

    return (
        <div className="bg-rotsi-black min-h-screen">
            <NavBar />

            <div id="demo" className="max-w-7xl mx-auto px-6 lg:px-16 pt-36 pb-24">
                {/* Page header */}
                <div className="mb-12">
                    <span className="text-rotsi-gold text-xs font-body font-semibold uppercase tracking-widest">
                        See It in Action
                    </span>
                    <h1 className="font-display font-bold text-4xl lg:text-5xl text-white mt-3">
                        Request a Demo
                    </h1>
                    <p className="text-gray-400 font-body text-lg mt-3 max-w-lg">
                        Select what you'd like to see and we'll schedule a tailored walkthrough.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-10">
                    {/* Form */}
                    <div className="lg:col-span-2">
                        <form onSubmit={sendEmail} id="demoProductForm" className="bg-rotsi-surface border border-white/[0.06] rounded-2xl p-8">
                            {/* Product checkboxes */}
                            <div className="mb-6">
                                <p className="text-white font-display font-semibold text-sm mb-4">
                                    What would you like to demo?
                                </p>
                                <div className="grid grid-cols-2 gap-3">
                                    {demoOptions.map((opt) => (
                                        <label
                                            key={opt.id}
                                            className="flex items-center gap-3 p-3 rounded-lg border border-white/[0.06] bg-white/[0.03] cursor-pointer hover:border-rotsi-gold/30 transition-colors duration-200"
                                        >
                                            <input
                                                id={opt.id}
                                                type="checkbox"
                                                className="w-4 h-4 accent-rotsi-gold"
                                                value={opt.value}
                                                onChange={handleChange}
                                            />
                                            <span className="text-gray-300 font-body text-sm">{opt.label}</span>
                                        </label>
                                    ))}
                                </div>
                                {errors && <p className="text-red-400 text-xs mt-2">{errors.products}</p>}
                            </div>

                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                                <div>
                                    <input
                                        name="first_name"
                                        className={inputClass}
                                        type="text"
                                        placeholder="First Name*"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors && <p className="text-red-400 text-xs mt-1">{errors.first_name}</p>}
                                </div>
                                <div>
                                    <input
                                        name="last_name"
                                        className={inputClass}
                                        type="text"
                                        placeholder="Last Name*"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors && <p className="text-red-400 text-xs mt-1">{errors.last_name}</p>}
                                </div>
                                <div>
                                    <input
                                        name="email"
                                        className={inputClass}
                                        type="email"
                                        placeholder="Email*"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                                </div>
                                <div>
                                    <input
                                        name="phone_number"
                                        className={inputClass}
                                        type="number"
                                        placeholder="Phone*"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors && <p className="text-red-400 text-xs mt-1">{errors.phone_number}</p>}
                                </div>
                            </div>
                            <div className="mt-5">
                                <textarea
                                    name="message"
                                    placeholder="Anything else you'd like us to know?*"
                                    className={`${inputClass} h-36 resize-none`}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    onKeyUp={clearErrors}
                                ></textarea>
                                {errors && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                            </div>
                            <div className="mt-6">
                                <button
                                    type="submit"
                                    id="submitBtn"
                                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-rotsi-gold text-rotsi-black font-display font-bold text-sm rounded hover:bg-rotsi-gold-light transition-all duration-200"
                                >
                                    Send Request
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Sidebar */}
                    <div className="flex flex-col gap-4">
                        <div className="bg-rotsi-surface border border-white/[0.06] rounded-2xl p-6">
                            <h3 className="font-display font-semibold text-white text-base mb-4">Contact Details</h3>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-gray-500 text-xs font-body uppercase tracking-wider mb-1">Office</p>
                                    <p className="text-gray-300 font-body text-sm">Mombasa Road, Nairobi, Kenya</p>
                                </div>
                                <div>
                                    <p className="text-gray-500 text-xs font-body uppercase tracking-wider mb-1">Phone</p>
                                    <p className="text-gray-300 font-body text-sm">+254 745 474 586</p>
                                </div>
                                <div>
                                    <p className="text-gray-500 text-xs font-body uppercase tracking-wider mb-1">Email</p>
                                    <p className="text-gray-300 font-body text-sm">support@rotsi.co.ke</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-rotsi-surface border border-rotsi-gold/20 rounded-2xl p-6">
                            <div className="flex items-center gap-2 mb-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-rotsi-gold"></div>
                                <span className="text-rotsi-gold text-xs font-body font-semibold uppercase tracking-wider">
                                    Ibiza OS
                                </span>
                            </div>
                            <p className="text-gray-400 font-body text-sm leading-relaxed">
                                Want a full walkthrough of Ibiza OS? Check the full demo option above and we'll schedule a comprehensive session.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default DemoProduct;
