import React from "react";
import HeroSection from "../components/HeroSection";
import homeBg from "../assets/images/CertificationsHero.png"; // Home page background image
import CertificationSection from "../components/CertificationsSection";

const CertificationPage = () => {
  return (
    <div>
      <HeroSection
        backgroundImage={homeBg} // Pass different background
        bottomLeftText="Certifications" // Custom text
        height="70vh" // Home page takes full height

      />
          <CertificationSection/>

    </div>
  );
};

export default CertificationPage;
