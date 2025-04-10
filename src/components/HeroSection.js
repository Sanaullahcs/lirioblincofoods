import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Navbar from "./Navbar";
import "../assets/styles/HeroSection.css"; // Keep styles separate

const HeroSection = ({ firsttitle, title, subtitle, buttonText, backgroundImage, bottomLeftText, height }) => {
  return (
    <Box
      className="hero-container"
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: height || "100vh", // Default to full height if not provided
        position: "relative",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />
      
      <Box className="hero-content">
        <Box className="hero-text">
          {firsttitle && <Typography className="hero-title-first">{firsttitle}</Typography>}
          {title && <Typography className="hero-title">{title}</Typography>}
          {subtitle && <Typography className="hero-subtitle">{subtitle}</Typography>}
          {buttonText && ( // Conditionally render button only if buttonText is provided
            <Button variant="flat" className="hero-btn">
              {buttonText}
            </Button>
          )}
        </Box>
      </Box>

      <Box className="bottom-left-content">
        <Typography className="hero-title-bottom" variant="h6">{bottomLeftText}</Typography>
      </Box>
    </Box>
  );
};

export default HeroSection;
