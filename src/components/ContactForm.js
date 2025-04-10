import React from "react";
import { Box, Typography, Grid, TextField, Button } from "@mui/material";
import "../assets/styles/HeroSection.css"; // Keep styles separate

const ContactUs = () => {
  return (
 <Box   sx={{ 
    backgroundColor: "#121212", 

  }}>
       <Box 
      sx={{ 
        backgroundColor: "#121212", 
        color: "white", 
        p: 4, 
        borderRadius: 2, 
        maxWidth: "1100px", 
        margin: "auto" 
      }}
    >
      <Grid container spacing={4} alignItems="center">
        {/* Left Side - Contact Form */}
        <Grid item xs={12} md={6}>
          <Typography variant="h5" className='Who-heading'  sx={{  mb: 3 }}>
            Contact Us
          </Typography>
          <Box 
            component="form" 
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <TextField 
              variant="outlined" 
              fullWidth 
              placeholder="Your Name" 
              sx={{ backgroundColor: "#1A1A1A", borderRadius: "18px", input: { color: "white" }, "& .MuiOutlinedInput-root": { borderRadius: "18px" } }}
            />
            <TextField 
              variant="outlined" 
              fullWidth 
              placeholder="Email" 
              sx={{ backgroundColor: "#1A1A1A", borderRadius: "18px", input: { color: "white" }, "& .MuiOutlinedInput-root": { borderRadius: "18px" } }}
            />
            <TextField 
              variant="outlined" 
              fullWidth 
              placeholder="Message" 
              multiline 
              rows={3} 
              sx={{ backgroundColor: "#1A1A1A", borderRadius: "18px", input: { color: "white" }, "& .MuiOutlinedInput-root": { borderRadius: "18px" } }}
            />
            <Button 
              variant="contained" 
              fullWidth 
              sx={{ 
                backgroundColor: "#777777", 
                color: "white", 
                textTransform: "none", 
                borderRadius: "20px", 
                "&:hover": { backgroundColor: "#777" } 
              }}
            >
              Send A Message
            </Button>
          </Box>
        </Grid>

        {/* Right Side - Map and Text */}
        <Grid item xs={12} md={6}>
          <Typography className='contact-subheading' sx={{mb: 2 }}>
            Our mission is to connect you with the finest offerings of the earth, sustainably sourced by dedicated farmers and communities who pour their heritage and expertise into every harvest.
          </Typography>
          <Box 
            sx={{ 
              width: "100%", 
              height: "250px", 
              borderRadius: "8px", 
              overflow: "hidden", 
              filter: "grayscale(100%)" // Makes the map black & white
            }}
          >
        <iframe
    title="Google Maps"
    width="100%"
    height="100%"
    style={{ border: 0, borderRadius: "8px" }}
    loading="lazy"
    allowFullScreen
    referrerPolicy="no-referrer-when-downgrade"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31557463.54051894!2d-119.8093025!3d44.2423649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99e1a4f7b76!2sUnited%20States!5e0!3m2!1sen!2sus!4v1709646539875!5m2!1sen!2sus"
  />

          </Box>
        </Grid>
      </Grid>
    </Box>
 </Box>
  );
};

export default ContactUs;
