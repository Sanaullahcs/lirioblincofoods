import React, { useRef } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { motion, useInView } from "framer-motion"; 
import AgriOne from "../assets/images/Agri-one.png"; 
import AgriTwo from "../assets/images/Agri-two.png";
import AgriThree from "../assets/images/Agri-three.png";
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
    <Box ref={sectionRef} sx={{ backgroundColor: "#1A1A1A", color: "white", }} className='padding-around'>
     <Box sx={{ backgroundColor: "#1A1A1A", color: "white",  borderRadius: 2, mt: 5, mb: 5 }}>
     <Grid container spacing={2} alignItems="stretch">
        
        {/* Left Section - Text + Image */}
        <Grid 
          item xs={12} md={6} 
          sx={{ display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "left" }}
        >
          <motion.div variants={textVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            <Typography  className='premium-heading' sx={{ mb: 2, p: 2 }}>
              We Bring You Premium Agricultural Products Cultivated By Communities Across Africa, Asia, And Beyond, Rooted In Sustainability And Tradition.
            </Typography>
          </motion.div>

          <motion.div variants={imageVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            <Box sx={{ height: 500 }}>
              <img src={AgriOne} alt="Farming 1" 
                style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 12 }} 
              />
            </Box>
          </motion.div>
        </Grid>

        {/* Right Section - Image Gallery */}
        <Grid item xs={12} md={6} sx={{ display: "flex", flexDirection: "column" }}>
          <motion.div variants={imageVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            <Box sx={{ height: 280, mb: 2 }}>
              <img src={AgriTwo} alt="Farming 2" 
                style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 12 }} 
              />
            </Box>
          </motion.div>

          <motion.div variants={imageVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            <Box sx={{ height: 350 }}>
              <img src={AgriThree} alt="Farming 3" 
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
