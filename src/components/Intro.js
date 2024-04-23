import React from 'react';
import img from '../images/rotsi-page2.png';
import { Link } from 'react-router-dom';

const Intro = () => {
    return (
        <>
                <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6" id='about' >

                    <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="fade-up">
                        <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                            <img alt="card img" className="rounded-t float-right" src={img} />
                        </div>
                        <div className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8" data-aos="zoom-in" data-aos-delay="500">
                            
                            <h6 className="text-2xl  text-blue-900 font-bold">Welcome to Rotsi, the forefront of digital banking innovation. Our state-of-the-art neobank platform delivers a comprehensive suite of financial services designed for accessibility, security, and unparalleled convenience.</h6>
                            <div>
                                <p className='my-3 text-l text-gray-600 font-semibold'>Equipped with robust infrastructure, our platform empowers individuals and businesses alike to effortlessly monitor transactions, facilitate money transfers, execute payments, manage billings, schedule payments, and generate click-to-pay invoices—all within a unified ecosystem.</p>
                            </div>
                            
                            <div>
                                <p className='my-3 text-l text-gray-600 font-semibold'>Whether you're an individual seeking to streamline personal finances or a business owner aiming to optimize financial workflows, Rotsi offers an array of tools and resources engineered for success. With nominal fees nearly approaching zero percent, we prioritize affordability without compromising quality service. Join us at Rotsi and experience the future of seamless financial management.</p>
                            </div>
                            <a href="https://portal.rotsi.co.ke/" target="_blank" rel="noopener noreferrer" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-2 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 group">
                                Create a Rotsi Account today
                                <svg className="w-4 h-4 ml-1 group-hover: translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Intro;