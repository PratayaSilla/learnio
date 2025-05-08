import React from 'react';
import Herosection from '../../components/Hero Section/hero-section';
import Pricing from '../../components/Pricing/pricing';
import Testimonials from '../../components/Testimonials/Testimonials';
import CommunityJoin from '../../components/Community-Invite/communityjoin';
import ChooseCourses from '../../components/Choose-Courses/Choose-courses';
import DashboardSidebar from '../../components/SignUp/Dashboard/Dashboard-Sidebar/Dashboard-Sidebar';
import DashboardHome from '../../components/SignUp/Dashboard/Dashboard-Home/Dashboard-Home';


const LandingPage = () => {
  return (
    <div className="landing-page">
      <Herosection />
      <Pricing />
      <Testimonials />
      <CommunityJoin />
      {/* <ChooseCourses /> */}
      {/* <DashboardSidebar />
      <DashboardHome /> */}
    </div>
  );
};

export default LandingPage;