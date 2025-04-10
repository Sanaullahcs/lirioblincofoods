import React, { useRef } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { motion, useInView } from "framer-motion";

// Import images from gallery
import KosherImage from "../assets/images/FooterImageOne.png";
import OrganicImage from "../assets/images/FooterImageTwo.svg";
import HalalImage from "../assets/images/FooterImageThree.svg";
import "../assets/styles/HeroSection.css"; // Keep styles separate

// Gallery Array (Using Imported Images)
const certifications = [
  {
    id: 1,
    title: "Kosher Certification",
    description: (
      <>
        Certified to meet  kosher <br />standards.
      </>
    ),
    image: KosherImage,
  },
  {
    id: 2,
    title: "Organic Certification",
    description: (
      <>
        Grown naturally, free from <br /> synthetic chemicals.
      </>
    ),
    image: OrganicImage,
  },
  {
    id: 3,
    title: "Halal Certification",
    description: (
      <>
        Prepared according  to<br /> Islamic guidelines.
      </>
    ),
    image: HalalImage,
  },
];

// Animation Variants
const textVariantsLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const textVariantsRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } },
};

// Image Animation - Slide In + Scale Up
const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" }
  },
};

const CertificationSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { triggerOnce: false, margin: "-100px" });

  return (
    <Box 
    sx={{
      backgroundColor: "#121212",
      color: "white",
      textAlign: "center",
      paddingTop: "20px",  // Adjust top margin
      paddingBottom: "20px" // Adjust bottom margin
    }}
  >
  
     <Box
      ref={sectionRef}
      sx={{
        backgroundColor: "#121212",
        color: "white",
        p: 3,
        textAlign: "center",
      }}
    >
      {/* Using MUI Grid with animations */}
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={6}>
          <motion.div 
            variants={textVariantsLeft} 
            initial="hidden" 
            animate={isInView ? "visible" : "hidden"}
          >
            <Typography
className='Who-heading'              sx={{
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Our Commitment To <br/> Quality And Integrity
            </Typography>
          </motion.div>
        </Grid>
        <Grid item xs={12} md={6}>
          <motion.div 
            variants={textVariantsRight} 
            initial="hidden" 
            animate={isInView ? "visible" : "hidden"}
          >
            <Typography
              variant="body1"
              sx={{
                opacity: 0.8,
                maxWidth: "600px",
                textAlign: { xs: "center", md: "left" },
              }}
              className='Who-subheading'
            >
              At Lino Blanco, we uphold the highest standards in sourcing and production, ensuring every product meets rigorous certifications that reflect our dedication to sustainability, ethics, and excellence.
            </Typography>
          </motion.div>
        </Grid>
      </Grid>

      {/* Certifications Grid with image animations */}
      <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
        {certifications.map((cert, index) => (
          <Grid item xs={12} sm={4} key={cert.id}>
            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: index * 0.2 }} // Staggered effect for images
            >
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Box sx={{ width: 100, height: 100, mb: 2 }}>
                  <img
                    src={cert.image}
                    alt={cert.title}
                    style={{ width: "100%", height: "100%", objectFit: "contain" }}
                  />
                </Box>
                <Typography variant="h6" className='certification-title'>{cert.title}</Typography>
                <Typography variant="body2" className='certification-subtitle'>{cert.description}</Typography>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
   </Box>
  );
};

export default CertificationSection;
