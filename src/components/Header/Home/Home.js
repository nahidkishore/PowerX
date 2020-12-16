import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import AboutSection from '../AboutSection/AboutSection';
import ChooseSection from '../ChooseSection/ChooseSection';
import FeatureSection from '../FeatureSection/FeatureSection';
import TrainingSection from '../TrainingSection/TrainingSection';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <FeatureSection></FeatureSection>
            <AboutSection></AboutSection>
            <TrainingSection></TrainingSection>
            <ChooseSection></ChooseSection>
            <Footer></Footer>
        </>
    );
};

export default Home;