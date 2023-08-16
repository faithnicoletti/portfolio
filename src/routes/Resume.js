import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import ResumeContent from "../components/ResumeContent";

const Resume = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Resume." text="See my past experience."/>
      <ResumeContent />
      <Footer />
    </div>
  )
}

export default Resume