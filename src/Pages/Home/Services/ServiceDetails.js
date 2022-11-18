import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const { _id, img, price, title, description, raiting } = useLoaderData();
    console.log(title);


    return (
        <>
            <h1 className='text-4xl font-bold my-5 '>Get The Best tourist Services</h1>
            <p>Find the best tourist services you need to help you successfully meet your project planning goals and deadline</p>
            <div className="card w-2/3 bg-base-100 shadow-xl flex flex-auto m-20">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-left card-title">
                        {title}
                        <div className="badge badge-secondary">{raiting}</div>
                    </h2>
                    <p className='text-left'>{description}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline bg-red-400">Price: ${price}</div>
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceDetails;