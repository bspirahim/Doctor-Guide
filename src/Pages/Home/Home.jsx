import React from 'react';
import Banner from './Banner/Banner';
import Service from './Service/Service';
import Schedule from './Schedule/Schedule';
import MedicalCare from './MedicalCare/MedicalCare';
import Statistics from './Statistics/Statistics';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <Schedule></Schedule>
            <MedicalCare></MedicalCare>
            <Statistics></Statistics>
        </div>
    );
};

export default Home;