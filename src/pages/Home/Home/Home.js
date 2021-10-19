import React from 'react';
import Banner from '../Banner/Banner';
import Greetings from '../Greetings/Greetings';
import HealthCenter from '../HealthCenter/HealthCenter';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Greetings></Greetings>
            <Services></Services>
            <HealthCenter></HealthCenter>
        </div>
    );
};

export default Home;