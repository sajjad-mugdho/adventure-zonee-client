import React from 'react';
import img from '../../../img/img.jpg'
import person from '../../../img/person.webp';
const About = () => {
    return (
        <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2 relative'>
                    <img src={img} alt='img' className=" w-4/5 h-full  rounded-lg shadow-2xl" />
                    <img src={person} alt='img' className=" absolute w-1/2 top-1/2 right-5 rounded-lg shadow-2xl border-spacing-1" />
                </div>
                <div className='w-1/2'>
                    <p className="py-6 font-bold text-orange-600 text-xl ">About Us!</p>
                    <h1 className="text-5xl my-5 font-bold">Destination Touristic <br /> Services Vision & Mission Statement</h1>
                    <p className="py-6">Tourism plays an important role for nearly all WTO members, especially in terms of its contribution to employment, GDP, and the generation of foreign exchange. Tourism-related services are typically labour-intensive, with numerous links to other major segments of the economy, such as transport, cultural and creative services, or financial and insurance services</p>
                    
                    <button className="btn bg-orange-600 border-0">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;