import React from 'react';
import Hero from '../components/Hero';
import Umbrellas from '../components/Umbrellas';
import IbizaTeaser from '../components/IbizaTeaser';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';

const Home = () => {
    useDocTitle('Rotsi API Solutions | Bespoke Engineering & Product House');

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
