import React from 'react';
import Herosection from '../../components/Hero Section/hero-section';
import Pricing from '../../components/Pricing/pricing';
import Testimonials from '../../components/Testimonials/Testimonials';
import CommunityJoin from '../../components/Community-Invite/communityjoin';
import Navbar from '../../components/Navbar/navbar';
import Footer from '../../components/Footer/Footer';
import About from '../../components/About/about';


const LandingPage = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <Herosection />
      <About />
      <Pricing />
      <Testimonials />
      <CommunityJoin />
      <Footer />

    </div>
  );
};

export default LandingPage;