import React, { useContext } from 'react';
import { json, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const ServiceDetails = () => {
    const { _id, img, price, title, description, raiting } = useLoaderData();
    const { user } = useContext(AuthContext)


    const handleReview = (e) => {
        e.preventDefault();
        const form = e.target;
        const serviceName = form.serviceName.value;
        const price = form.price.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const rating = form.rating.value;
        const review = form.review.value;
        console.log(serviceName, price, photoURL, email, rating, review);

        const list = {
            title: serviceName,
            price,
            photoURL,
            email,
            rating,
            review,

        }
        fetch('http://localhost:5000/reviews',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(list)
        }).then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.acknowledged) {
                alert('Review Added Succsesfully')
                form.reset();

            }
        })
        .catch(er => console.error(er));

    }


    return (
        <>
            <h1 className='text-4xl font-bold my-5 '>Get The Best tourist Services</h1>
            <p>Find the best tourist services you need to help you successfully meet your project planning goals and deadline</p>
            <div className="card w-2/3 bg-base-100 shadow-xl flex flex-auto mx-auto">
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
            <div>
                <h1 className='mx-auto my-5 font-bold text-2xl'>Review The Service</h1>
                <form onSubmit={handleReview} className='p-10 my-10 bg-base-200 rounded-xl mx-10' >
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                        <input name='serviceName' type="text" placeholder="Service Name" defaultValue={title} className="input input-bordered input-primary w-full " />
                        <input name='price' type="text" placeholder="Price" defaultValue={price} className="input input-bordered input-primary w-full " />
                        <input name='photoURL' type="text" placeholder="PhotoURL" defaultValue={user?.photoURL} className="input input-bordered input-primary w-full" required />
                        <input name='email' type="text" placeholder="Email" defaultValue={user?.email} className="input input-bordered input-primary w-full " required />
                        <input name='rating' type="text" placeholder="Rating" className="input input-bordered input-primary w-full " required />
                    </div>
                    <textarea name='review' className="textarea textarea-primary w-full py-5 my-5" placeholder="Add Your Review"></textarea>
                    <input type="submit" className='btn btn-outline ' value="Add Review" />
                </form>
            </div>
        </>
    );
};

export default ServiceDetails;