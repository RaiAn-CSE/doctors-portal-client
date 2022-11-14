import React from 'react';
import Banner from '../Banner/Banner';
import HomeAppointment from '../HomeAppointment/HomeAppointment';
import InfoCards from '../InfoCard/InfoCards';


const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <HomeAppointment></HomeAppointment>
        </div>
    );
};

export default Home;