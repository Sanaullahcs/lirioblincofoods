import React from "react";
import HeroSection from "../components/HeroSection";
import homeBg from "../assets/images/HomeHero.png"; // Home page background image
import ContactUs from "../components/ContactForm";
const ContactPage= () => {
  return (
    <div>
      <HeroSection
        backgroundImage={homeBg} // Pass different background
        bottomLeftText="Get in Touch" // Custom text
        height="70vh" // Home page takes full height

      />
      <ContactUs/>
    </div>
  );
};

export default ContactPage;
