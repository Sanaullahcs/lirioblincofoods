import React from "react";
import { Container, Grid, TextField, Typography, Box, InputAdornment, Button } from "@mui/material";
import "../assets/styles/Footer.css"; // Importing the CSS file
import cert1 from "../assets/images/FooterImageOne.png"; // Importing Images
import cert2 from "../assets/images/FooterImageTwo.svg";
import cert3 from "../assets/images/FooterImageThree.svg";

const Footer = () => {
  return (
    <Box className="footer">
      <Container >
        <Grid container spacing={4}>
          {/* Subscription Section */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" className="footer-title">Get In Touch!</Typography>
            <Typography variant="body1" className="footer-text">
  have questions or need assistance? <br />
  We're here to help!
</Typography>


            {/* Email Input with Button Inside */}
            <Box className="subscribe-box">
              <TextField
                variant="outlined"
                placeholder="Enter your email"
                className="email-input"
                InputProps={{
                  sx: {
                    backgroundColor: "#121212", // Black background
                    color: "white",
                    borderRadius: "25px",
                  },
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "#D4DADD", // Light grey button
                          color: "black",
                          borderRadius: "25px",
                          textTransform: "none",
                          "&:hover": {
                            backgroundColor: "#c4c4c4",
                          },
                        }}
                      >
                        Subscribe
                      </Button>
                    </InputAdornment>
                  ),
                }}
                fullWidth
              />
            </Box>

            {/* Certification Images */}
            <Box className="certifications">
              <img src={cert1} alt="Certification 1" className="cert-img" />
              <img src={cert2} alt="Certification 2" className="cert-img" />
              <img src={cert3} alt="Certification 3" className="cert-img" />
            </Box>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography variant="subtitle2" className="footer-subtitle">ADDRESS</Typography>
                <Typography variant="body2" className="footer-text">
                  1901 Thornridge Cir. <br /> Shiloh, Hawaii 81063
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="subtitle2" className="footer-subtitle">PHONE</Typography>
                <Typography variant="body2" className="footer-text">[303] 873-2983</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="subtitle2" className="footer-subtitle">EMAIL</Typography>
                <Typography variant="body2" className="footer-text">info.lirioblanco.com</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* Footer Bottom */}
        <Box className="footer-bottom">
          <Typography variant="body2" className="footer-text">
            © Copyright 2025, All Rights Reserved
          </Typography>
          <Box className="footer-links">
            <Typography variant="body2">FAQ</Typography>
            <Typography variant="body2">Term of Service</Typography>
            <Typography variant="body2">Privacy Policy</Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
