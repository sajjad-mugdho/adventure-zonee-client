import React, { useEffect, useState } from 'react';

import ServiceCard from './ServiceCard/ServiceCard';

const ServicePage = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://adventure-zonee-assignment-11-server.vercel.app/services-page')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='text-center my-6'>
                <p className="text-6xl my-5">Our Service Area</p>
                <p className='text-lg'>The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-5 gap-6'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    >
                    </ServiceCard>)
                }
            </div>
            
        </div>
    );
};

export default ServicePage;