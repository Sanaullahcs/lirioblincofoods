import React from "react";
import HeroSection from "../components/HeroSection";
import homeBg from "../assets/images/HomeHero.png"; // Home page background image
import AgricultureSection from "../components/AgricultureSection";
import SignatureOfferings from "../components/SignatureOfferings";

const HomePage = () => {
  return (
    <div>
    <HeroSection
  firsttitle="LIRIO BLANCO"
  title="Nature’s Finest From Around The World"
  subtitle={
    <>
      We bring you premium agricultural products cultivated by communities across Africa, Asia, and 
      <br />
      beyond, rooted in sustainability and tradition.
    </>
  }
  buttonText="Explore Our Products"
  backgroundImage={homeBg} // Pass different background
  bottomLeftText={
    <>
      A Leading Food and 
      <br />
      Agri-Business.
    </>
  } // Custom text with line break
  height="100vh" // Home page takes full height
/>


            <AgricultureSection />
            <SignatureOfferings />


    </div>
  );
};

export default HomePage;
