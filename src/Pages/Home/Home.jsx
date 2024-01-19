import React from 'react';
import Banner from './Banner/Banner';
import Service from './Service/Service';
import Schedule from './Schedule/Schedule';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <Schedule></Schedule>
        </div>
    );
};

export default Home;