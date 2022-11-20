import React, { useEffect, useState } from 'react';


const ReviewRows = ({ review, handleDelete, handleUpdate }) => {

    const [serviceReview, setServiceReview] = useState({});

    const { _id, title, name, email, price, photoURL, service, reviewDetails } = review;

    useEffect(() => {
        fetch(`https://adventure-zonee-assignment-11-server.vercel.app/services/${service}`)
            .then(res => res.json())
            .then(data => setServiceReview(data))
    }, [service])
    return (
        <>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img className='w-36 m-3 h-36 rounded-3xl ' src={serviceReview.img} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-left text-cyan-800"><span className='text-2xl'>Service: </span>{title}</h2>
                    <div className="badge badge-secondary font-semibold bg-blue-300">Price: ${price}</div>

                    <div className='text-left'>
                        <img className='rounded-t-full w-12 h-12' src={photoURL} alt="" />
                        <p className='text-lg font-medium'>Name: {name}</p>
                        <p className='text-base font-medium'>Name: {email}</p>
                        <p className='text-left'>
                            <span className='text-lg font-bold'>My Reviews:</span> <span className='text-lg font-semibold'>{reviewDetails}</span>
                        </p>
                    </div>

                    <div className="card-actions justify-evenly">
                        <button onClick={() => handleUpdate(_id)} className="btn btn-ghost btn-xs">lll</button>
                        <button onClick={() => handleDelete(_id)} className="btn btn-secondary">Delete</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ReviewRows;