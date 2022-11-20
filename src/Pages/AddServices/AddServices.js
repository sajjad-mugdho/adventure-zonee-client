import React, { useContext } from 'react';
import img from '../../img/hero.jpg';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const AddServices = () => {

    const { user } = useContext(AuthContext)

    const handleAddService = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = user?.email || 'Unregistard';
        const photoURL = form.photoURL.value
        const price = form.price.value;
        const details = form.details.value;
        console.log(name, email, price, details, photoURL);

        const list = {

            title: name,
            price,
            img: photoURL,
            email,
            rating: 4.5,

            description: details
        }

        fetch('https://adventure-zonee-assignment-11-server.vercel.app/service-add', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(list)
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Order placed successfully')
                    form.reset();

                }
            })
            .catch(er => console.error(er));
    }



    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content grid md:grid-cols-2 gap-20 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='rounded-md' src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className='text-2xl font-bold mt-3'> Add Services</h1>
                    <form onSubmit={handleAddService} className='p-10 my-10 bg-base-200 rounded-xl' >
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                            <input name='name' type="text" placeholder="Service Name" className="input input-bordered input-primary w-full " />
                            <input name='photoURL' type="text" placeholder="photoURL" className="input input-bordered input-primary w-full " />
                            <input name='price' type="text" placeholder="Price" className="input input-bordered input-primary w-full" required />
                            <input name='email' type="text" placeholder="Email" defaultValue={user?.email} className="input input-bordered input-primary w-full " required />
                        </div>
                        <textarea name='details' className="textarea textarea-primary w-full py-5 my-5" placeholder="Description"></textarea>
                        <input type="submit" className='btn bg-orange-600 mx-auto ' value="Add Services" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddServices;