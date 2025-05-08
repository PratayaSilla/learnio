import React from 'react';
import Herosection from '../../components/Hero Section/hero-section';
import Pricing from '../../components/Pricing/pricing';
import Testimonials from '../../components/Testimonials/Testimonials';
import CommunityJoin from '../../components/Community-Invite/communityjoin';
import Footer from '../../components/Footer/Footer';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Herosection />
      <Pricing />
      <Testimonials />
      <CommunityJoin />
      <Footer />
    </div>
  );
};

export default LandingPage;