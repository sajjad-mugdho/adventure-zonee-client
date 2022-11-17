import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, img, price, title, description, raiting } = service;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title text-left">{title}</h2>
                <p className='text-left'>{description.slice(0, 100)}...<Link to={'/service'}>see more</Link></p>
                <div className="card-actions flex items-center">
                    <p className='text-orange-600 text-1xl text-left font-semibold'>Price :${price}</p>
                    <div className='flex items-center text-left gap-2'>
                        <FaStar className='text-orange-600 text-1xl text-left font-semibold'></FaStar>
                        <p className='text-orange-600 text-1xl font-semibold'>{raiting}</p>
                    </div>
                    <Link to={`/services/${_id}`} ><button className="btn btn-primary">View Details</button> </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;