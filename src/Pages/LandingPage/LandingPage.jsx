import React from 'react';
import Herosection from '../../components/Hero Section/hero-section';
import Pricing from '../../components/Pricing/pricing';
import Testimonials from '../../components/Testimonials/Testimonials';
import CommunityJoin from '../../components/Community-Invite/communityjoin';
import ChooseCourses from '../../components/Choose-Courses/Choose-courses';
import DashboardSidebar from '../../components/SignUp/Dashboard/Dashboard-Sidebar/Dashboard-Sidebar';
import DashboardHome from '../../components/SignUp/Dashboard/Dashboard-Home/Dashboard-Home';
import DashboardChapters from '../../components/SignUp/Dashboard/Dashboard-Chapters/Dashboard-Chapters';
import DashboardNotes from '../../components/SignUp/Dashboard/Dashboard-Notes/Dashboard-Notes';
import Navbar from '../../components/Navbar/navbar';
import Footer from '../../components/Footer/Footer';


const LandingPage = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <Herosection />
      <Pricing />
      <Testimonials />
      <CommunityJoin />
      <Footer />
      {/* <ChooseCourses />  */}
      {/* <DashboardSidebar />
      <DashboardHome />
      <DashboardChapters />
      <DashboardNotes /> */}

    </div>
  );
};

export default LandingPage;