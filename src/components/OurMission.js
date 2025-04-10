import React, { useRef } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { motion, useInView } from "framer-motion"; 
import AgriOne from "../assets/images/MissionTwo.jpg"; 
import AgriTwo from "../assets/images/MissionOne.png";
import "../assets/styles/HeroSection.css"; // Keep styles separate

// Variants for text and images
const textVariants = {
  hidden: { x: -50, opacity: 0, filter: "blur(10px)" },
  visible: { 
    x: 0, 
    opacity: 1, 
    filter: "blur(0px)", 
    transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } 
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    scale: 1, 
    filter: "blur(0px)", 
    transition: { duration: 0.8, ease: "easeOut", delay: 0.4, type: "spring", stiffness: 100 } 
  },
};

const AgricultureSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { margin: "-100px" });

  return (
    <Box 
      ref={sectionRef} 
      sx={{ 
        backgroundColor: "#121212", 
        color: "white", 
        p: 4, 
        borderTop: "1px solid white" // Added white top border
      }}
    >
      <Box sx={{ backgroundColor: "#121212", color: "white", p: 4, borderRadius: 2, mt: 5, mb: 5 }}>
        <Grid container spacing={2} alignItems="stretch">

          {/* Left Section - Image */}
          <Grid item xs={12} md={6} sx={{ display: "flex", flexDirection: "column" }}>
            <motion.div variants={imageVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
              <Box sx={{ height: 420, mb: 2 }}>
                <img 
                  src={AgriTwo} 
                  alt="Farming 2" 
                  style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 12 }} 
                />
              </Box>
            </motion.div>
          </Grid>

          {/* Right Section - Text + Image */}
          <Grid 
            item xs={12} md={6} 
            sx={{ display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "right" }} 
          >
            <motion.div variants={textVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
              <Typography className='Who-heading'  sx={{ pr: 2, textAlign: "right" }}>
                Our Mission
              </Typography>
              <Typography className='Who-subheading'sx={{ mb: 2, pr: 2, textAlign: "right" }}>
                To deliver high-quality, sustainable products while honoring the diversity of cultures and lands worldwide.
              </Typography>
            </motion.div>

            <motion.div variants={imageVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
              <Box sx={{ height: 300 }}>
                <img 
                  src={AgriOne} 
                  alt="Farming 1" 
                  style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 12 }} 
                />
              </Box>
            </motion.div>
          </Grid>

        </Grid>
      </Box>
    </Box>
  );
};

export default AgricultureSection;
