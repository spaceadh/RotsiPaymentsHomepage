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
                            title="Streamline Your Payments"
                            description="Effortlessly manage and reconcile payments from various tills, paybills, and other sources—whether online or in-store. Utilize our WooCommerce plugin for seamless online transactions, and offer secure payments at your physical business location."
                        />
                        <ServiceCard
                            videoUrl="https://www.youtube.com/watch?v=YOUR_VIDEO_ID_2"
                            title="Enhance Customer Engagement"
                            description="Boost customer outreach with our Bulk SMS tool. Send personalized promotional messages to your clients and general large audiences, increasing brand visibility and driving engagement."
                        />
                        <ServiceCard
                            videoUrl="https://www.youtube.com/watch?v=YOUR_VIDEO_ID_5"
                            title="Permission-Based Access"
                            description="Assign role-specific access to employees within your organization. Set permissions for receiving payments, processing pay-outs, to streamline operations and secure financial control."
                        />
                        <ServiceCard
                            videoUrl="https://www.youtube.com/watch?v=YOUR_VIDEO_ID_6"
                            title="Advanced Data Analytics"
                            description="Leverage our data analytics solution to gain insights into your financial transactions. Use this data to boost decision-making, optimize operations, and access personalized loan-matching services."
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
                {/* <ReactPlayer url={videoUrl} controls={true} width="100%" height="200px" /> */}
                <h2 className="font-semibold my-4 text-2xl text-center">{title}</h2>
                <p className="text-md font-medium">{description}</p>
            </div>
        </div>
    );
};

export default Services;