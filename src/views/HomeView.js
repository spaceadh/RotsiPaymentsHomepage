import React from 'react';
import Hero from '../components/Hero';
import Umbrellas from '../components/Umbrellas';
import IbizaTeaser from '../components/IbizaTeaser';
import Cta from '../components/Cta';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <Hero />
            <Umbrellas />
            <IbizaTeaser />
            <Cta />
            <Footer />
        </>
    );
};

export default Home;
