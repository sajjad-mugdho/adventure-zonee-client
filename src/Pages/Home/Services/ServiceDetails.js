import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const { _id, img, price, title, description, raiting } = useLoaderData();
    console.log(title);


    return (
        <div className="card w-2/3 bg-base-100 shadow-xl grid items-center m-20">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">{raiting}</div>
                </h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Price: ${price}</div>
                
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;