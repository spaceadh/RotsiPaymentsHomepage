import React from 'react';
import ReactPlayer from 'react-player';

const Services = () => {
    return (
        <div id="services" className="bg-gray-100 py-12">
            <section data-aos="zoom-in-down">
                <div className="my-4 py-4">
                    <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Why Choose Rotsi?</h2>
                    <div className='flex justify-center'>
                        <div className='w-24 border-b-4 border-blue-900'></div>
                    </div>
                    <h2 className="mt-4 mx-12 text-center text-lg lg:text-2xl font-semibold text-blue-900">
                        We are dedicated to securing your business's financial foundation for success.
                    </h2>
                    <p className="mt-4 mx-12 text-center text-lg lg:text-2xl font-semibold text-black-900">
                        Here's how we do it:
                    </p>
                </div>

                <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        <ServiceCard
                            videoUrl="https://www.youtube.com/watch?v=YOUR_VIDEO_ID_1"
                            title="Elevate your Payments Experience"
                            description="Epgrade your business, to be able to receive Payments using QRCode, Payment Prompts and Payment Links. Also pay out your suppliers, employees straight to their mobile phones and bak accounts."
                        />
                        <ServiceCard
                            videoUrl="https://www.youtube.com/watch?v=YOUR_VIDEO_ID_2"
                            title="Elevate your Customer Experience"
                            description="Reach to your customers using our Mass marketing tools. Send many Bulk SMS with customised promotional messages to increase your brand awareness."
                        />
                        <ServiceCard
                            videoUrl="https://www.youtube.com/watch?v=YOUR_VIDEO_ID_3"
                            title="Elevate your receipt generation"
                            description="Generate an ETR receipt, everytime you make a payment from your business, to help you while filing for taxation."
                        />
                        <ServiceCard
                            videoUrl="https://www.youtube.com/watch?v=YOUR_VIDEO_ID_4"
                            title="Rotsi AI"
                            description="Leverage our AI-powered Chatbot to gain insights into your transactions and receive professional advice on your business trajectory, all at no cost to your business."
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

const ServiceCard = ({ videoUrl, title, description }) => {
    return (
        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
            <div className="m-2 text-justify text-sm">
                <ReactPlayer url={videoUrl} controls={true} width="100%" height="200px" />
                <h2 className="font-semibold my-4 text-2xl text-center">{title}</h2>
                <p className="text-md font-medium">{description}</p>
            </div>
        </div>
    );
};

export default Services;