import React, { useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';
import axios from 'axios';
import Notiflix from 'notiflix';

const inputClass =
    'w-full bg-white/[0.05] border border-white/10 text-white placeholder-gray-500 mt-2 p-3 rounded-lg focus:outline-none focus:border-rotsi-gold/50 transition-colors duration-200 font-body text-sm';

const Contact = () => {
    useDocTitle('Contact Us | Rotsi API Solutions');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState([]);

    const clearErrors = () => setErrors([]);

    const clearInput = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setMessage('');
    };

    const sendEmail = (e) => {
        e.preventDefault();
        document.getElementById('submitBtn').disabled = true;
        document.getElementById('submitBtn').innerHTML = 'Sending...';
        let fData = new FormData();
        fData.append('first_name', firstName);
        fData.append('last_name', lastName);
        fData.append('email', email);
        fData.append('phone_number', phone);
        fData.append('message', message);

        axios({
            method: 'post',
            url: process.env.REACT_APP_CONTACT_API,
            data: fData,
            headers: { 'Content-Type': 'multipart/form-data' },
        })
            .then(function (response) {
                document.getElementById('submitBtn').disabled = false;
                document.getElementById('submitBtn').innerHTML = 'Send Message';
                clearInput();
                Notiflix.Report.success('Success', response.data.message, 'Okay');
            })
            .catch(function (error) {
                document.getElementById('submitBtn').disabled = false;
                document.getElementById('submitBtn').innerHTML = 'Send Message';
                const { response } = error;
                if (response.status === 500) {
                    Notiflix.Report.failure('An error occurred', response.data.message, 'Okay');
                }
                if (response.data.errors !== null) {
                    setErrors(response.data.errors);
                }
            });
    };

    return (
        <div className="bg-rotsi-black min-h-screen">
            <NavBar />

            <div id="contact" className="max-w-7xl mx-auto px-6 lg:px-16 pt-36 pb-24">
                {/* Page header */}
                <div className="mb-12">
                    <span className="text-rotsi-gold text-xs font-body font-semibold uppercase tracking-widest">
                        Get in Touch
                    </span>
                    <h1 className="font-display font-bold text-4xl lg:text-5xl text-white mt-3">
                        Book a Consultation
                    </h1>
                    <p className="text-gray-400 font-body text-lg mt-3 max-w-lg">
                        Tell us about your project. We'll respond within one business day.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-10">
                    {/* Form */}
                    <div className="lg:col-span-2">
                        <form onSubmit={sendEmail} className="bg-rotsi-surface border border-white/[0.06] rounded-2xl p-8">
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
                                    placeholder="Tell us about your project or challenge*"
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
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Contact info sidebar */}
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

                        <div className="bg-rotsi-surface border border-white/[0.06] rounded-2xl p-6">
                            <h3 className="font-display font-semibold text-white text-base mb-4">Follow Us</h3>
                            <div className="flex gap-3">
                                <a
                                    href="https://www.linkedin.com/company/rotsi-api"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 rounded border border-white/10 flex items-center justify-center text-gray-400 hover:border-rotsi-gold/40 hover:text-rotsi-gold transition-colors duration-200"
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
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Contact;
