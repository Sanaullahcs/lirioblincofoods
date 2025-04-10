import React from "react";
import HeroSection from "../components/HeroSection";
import homeBg from "../assets/images/ProductHero.png"; // Home page background image
import SignatureOfferings from "../components/ProductSignatureOffers";

const ProductPage= () => {
  return (
    <div>
      <HeroSection
        backgroundImage={homeBg} // Pass different background
        bottomLeftText="Our Products" // Custom text
        height="70vh" // Home page takes full height

      />
                  <SignatureOfferings />

    </div>
  );
};

export default ProductPage;
