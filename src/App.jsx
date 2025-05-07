import { Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import SignUpPage from './Pages/AuthPage/SignUpPage/SignUpPage';
import LoginPage from './Pages/AuthPage/LoginPage/LoginPage';
import Navbar from './components/Navbar/navbar';
import Herosection from './components/Hero Section/hero-section';
import Pricing from './components/Pricing/pricing';
import Testimonials from './components/Testimonials/Testimonials';
import CommunityJoin from './components/Community-Invite/communityjoin';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
    <div className="landing-page">
      <Navbar />
      <Herosection />
      <Pricing />
      <Testimonials />
      <CommunityJoin />
      <Footer />
    </div>
    </>
  );
}

export default App; 