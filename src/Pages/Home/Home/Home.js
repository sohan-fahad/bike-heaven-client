import React from 'react';
import Contact from '../Contact/Contact';
import FAQ from '../FAQ/FAQ';
import HeroBox from '../HeroBox/HeroBox';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div id="home">
            <HeroBox></HeroBox>
            <Products></Products>
            <FAQ></FAQ>
            <Reviews></Reviews>
            <Contact></Contact>
        </div>
    );
};

export default Home;