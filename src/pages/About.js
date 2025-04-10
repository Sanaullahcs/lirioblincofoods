import React from "react";
import HeroSection from "../components/HeroSection";
import homeBg from "../assets/images/AboutHero.png"; // Home page background image
import WhoweAre from "../components/WhoweAre";
import OurMission from "../components/OurMission";

const AboutPage = () => {
  return (
    <div>
      <HeroSection
        backgroundImage={homeBg} // Pass different background
        bottomLeftText="Our Story" // Custom text
        height="60vh" // Home page takes full height

      />

<WhoweAre />
<OurMission/>
    </div>
  );
};

export default AboutPage;
