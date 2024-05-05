import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// import HeroImg from '../components/HeroImg';
import HeroImg2 from './HeroImg2';
import Work from '../components/Work';
import PricingCard from '../components/PricingCard';
// import About from './About';


const Project = () => {
  return (
    <div>
      <Navbar />
      {/* <HeroImg  /> */}
      <HeroImg2 heading="PROJECTS." text ="Some of my most recent Works" />
      <Work />
      <PricingCard/>
      {/* <About/> */}
      <Footer />
    </div>
    );

};

export default Project;
