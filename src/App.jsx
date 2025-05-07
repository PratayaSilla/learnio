import React from 'react'
import './App.css'
import Navbar from './components/Navbar/navbar'
import Herosection from './components/Hero Section/hero-section'
import Pricing from './components/Pricing/pricing'
import About from './components/About/About'
import Testimonials from './components/Testimonials/Testimonials'
import CommunityJoin from './components/Community-Invite/communityjoin'
import Footer from './components/Footer/Footer'
import SignUpPage from './Pages/AuthPage/SignUpPage/SignUpPage'
import LoginPage from './Pages/AuthPage/LoginPage/LoginPage'

function App() {

  return (
    <>
      {/* <Navbar />
      <Herosection />
      <About />
      <Pricing />
      <Testimonials />
      <CommunityJoin />
      <Footer /> */}
      <SignUpPage />
      <LoginPage />
    </>
  )
}

export default App
