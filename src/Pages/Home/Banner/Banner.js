import React from 'react';
import hero3 from '../../../img/hero3.jpg';

const Banner = () => {
    return (
        <div className="hero min-h-screen bg ">
            <div className="hero-overlay bg-opacity-60  "><img className='opacity- h-[650px] w-full' src={hero3} alt="" /></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl text- font-bold">Hello there</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;