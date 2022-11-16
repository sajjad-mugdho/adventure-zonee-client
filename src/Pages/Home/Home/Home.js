import React from 'react';
import About from '../About/About';

import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Stats from '../Stats/Stats';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Stats></Stats>
            <About></About>
        </div>
    );
};

export default Home;