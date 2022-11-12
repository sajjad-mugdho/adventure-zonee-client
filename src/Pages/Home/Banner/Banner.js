import React from 'react';
import hero3 from '../../../img/hero3.jpg';

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-slate-900  ">
            <div className="hero-overlay"><img className='opacity-50 h-[650px] w-full' src={hero3} alt="" /></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl text-white font-bold "> NEVER STOP EXPLORING THE WORLD</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner; 