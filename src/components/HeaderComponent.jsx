import './HeroSection.css';
import React from 'react' ;
import HeroBackground from  '../assets/HeroBackground.svg';
import HeaderComponent from './HeroSection';

function HeroSection() {
    return (
        <section className='heroSection'>
            <img
                src={HeroBackground}
                alt='BackGround-Leaf'
                className='heroBackground'>
                </img>
        </section>
    );
}

export default HeroSection;