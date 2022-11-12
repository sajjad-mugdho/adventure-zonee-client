import React from 'react';

const Stats = () => {
    return (
        <div className="stats shadow py-10 my-10 mx-10 glass flex justify-start">


            <div className="stat place-items-center">
                <div className="stat-title">Years of Exprience</div>
                <div className="stat-value">5 Years+</div>

            </div>

            <div className="stat place-items-center">
                <div className="stat-title">Destination Collaboration</div>
                <div className="stat-value text-secondary">420+</div>

            </div>

            <div className="stat place-items-center">
                <div className="stat-title">Happy Customer</div>
                <div className="stat-value">10K+</div>

            </div>

        </div>
    );
};

export default Stats;