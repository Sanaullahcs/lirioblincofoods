import React, { useRef } from "react";
import { Box, Typography, Grid, Card, CardMedia, CardContent, useMediaQuery, useTheme } from "@mui/material";
import { motion, useInView } from "framer-motion";
import "../assets/styles/HeroSection.css"; // Keep styles separate

// Import images
import CashewImage from "../assets/images/OfferingOne.jpg";
import ClovesImage from "../assets/images/OfferingTwo.jpg";
import HibiscusImage from "../assets/images/OfferingThree.jpg";
import BlackPepperImage from "../assets/images/OfferingFour.jpg";
import RiceImage from "../assets/images/OfferingFive.jpg";
import PinkSaltImage from "../assets/images/OfferingSix.jpg";
import Cinnamon from "../assets/images/OfferingSeven.jpg";

// Animation Variants
const textVariantsLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const textVariantsRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const offerings = [
  { id: 1, title: "Cashews", description: "We offer premium-quality cashews in various grades, including W180, W210, W240, W320, W450, WS, LP, and more, ensuring freshness, rich flavor, and crunchy texture. Sourced from the finest farms in India, Vietnam, Ivory Coast, and Benin, our cashews are perfect for snacking, cooking, and bulk supply.", image: CashewImage, layout: "textFirst" },
  { id: 2, title: "Dry Hibiscus Flower", description: " Our premium dried hibiscus flowers are carefully sourced from Nigeria, ensuring vibrant color, rich flavor, and high nutritional value. Ideal for teas, beverages, herbal remedies, and culinary uses, available in bulk quantities for wholesale supply.", image: ClovesImage, layout: "imageFirst" },
  { id: 3, title: "Cloves", description: "Sourced from the spice-rich island of Madagascar, our cloves bring a bold, aromatic punch to any dish.", image: HibiscusImage, layout: "textFirst" },
  { id: 4, title: "Black Pepper",  description: "We offer premium-grade whole black pepper sourced from the finest farms in Vietnam, Indonesia, and Brazil,and other countries  ensuring bold flavor, rich aroma, and high pungency. Perfect for culinary use, spice blends, and bulk supply.", image: BlackPepperImage, layout: "textFirst" },
  { id: 5, title: "Pink ( Himalayan) Salt", description: "Mined from ancient deposits in Pakistan and the Himalayan foothills, our pink salt is prized for its mineral-rich profile and subtle flavor.", image: RiceImage, layout: "imageFirst" },
  { id: 6, title: "Rice", description: "Our premium long grain white rice is carefully selected for its fluffy texture, aromatic taste, and non-sticky grains. Sourced from the finest farms in Thailand, India, Uruguay, and other top rice-producing countries, it is ideal for everyday meals, bulk supply, and wholesale distribution.", image: PinkSaltImage, layout: "textFirst" },
  { id: 7, title: "Cinnamon", description: "We offer premium-quality cinnamon in whole form, sourced from the finest farms in Sri Lanka and Madagascar. Known for its rich aroma, warm flavor, and health benefits, our cinnamon is perfect for culinary use, spice blends, and bulk supply.", image: Cinnamon, layout: "textFirst" },

];

const OfferingsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { margin: "-100px" });

  // Detect mobile screens
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box ref={sectionRef} sx={{ backgroundColor: "#121212", color: "white", p: 4, margin: "auto", textAlign: "center" }}>
      
      {/* Animated Title & Description */}
      <Grid container spacing={2} alignItems="center" justifyContent="center" sx={{ mt: 8, mb: 8 }}>
        <Grid item xs={12} md={6}>
          <motion.div variants={textVariantsLeft} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            <Typography className='Who-heading' variant="h4" sx={{ fontWeight: "bold", textAlign: { xs: "center", md: "left" } }}>
              Our Signature Offerings
            </Typography>
          </motion.div>
        </Grid>
        <Grid item xs={12} md={6}>
          <motion.div variants={textVariantsRight} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            <Typography variant="body1" className='Who-subheading' sx={{ maxWidth: "700px", textAlign: { xs: "center", md: "left" } }}>
              We provide cutting-edge services to help farmers maximize crop yields. Our precision farming, crop monitoring, and automation solutions aim to revolutionize agriculture.
            </Typography>
          </motion.div>
        </Grid>
      </Grid>

      {/* Offerings Grid */}
      <Grid container spacing={3} justifyContent="center">
        {offerings.map((item, index) => {
          // Change layout for 2nd and 5th cards on mobile (index 1 and 4)
          const shouldInvertLayout = isMobile && (index === 1 || index === 4);
          const finalLayout = shouldInvertLayout ? "textFirst" : item.layout;

          return (
            <Grid item xs={12} sm={6} md={4} key={item.id} display="flex" justifyContent="center">
              <motion.div 
                variants={imageVariants} 
                initial="hidden" 
                animate={isInView ? "visible" : "hidden"} 
                transition={{ delay: index * 0.2 }}
                style={{ width: "100%", display: "flex", justifyContent: "center" }} 
              >
                <Card sx={{ backgroundColor: "#121212", display: "flex", flexDirection: "column", height: "100%", boxShadow: "none", width: "100%" }}>
                  {finalLayout === "textFirst" ? (
                    <>
                      <motion.div variants={textVariantsLeft} initial="hidden" animate={isInView ? "visible" : "hidden"}>
                        <CardContent sx={{ textAlign: "left", flexGrow: 1 }}>
                          <Typography variant="h6" className="card-title-item">{item.title}</Typography>
                          <Typography variant="body2" className="card-title-item-description" sx={{ mt: 1, borderTop: "1px solid rgba(255, 255, 255, 0.5)", pt: 1 }}>
                            {item.description}
                          </Typography>
                        </CardContent>
                      </motion.div>
                      <CardMedia component="img" sx={{ borderRadius: "24px" }} image={item.image} alt={item.title} />
                    </>
                  ) : (
                    <>
                      <CardMedia component="img" sx={{ borderRadius: "24px" }} image={item.image} alt={item.title} />
                      <motion.div variants={textVariantsRight} initial="hidden" animate={isInView ? "visible" : "hidden"}>
                        <CardContent sx={{ textAlign: "left", flexGrow: 1 }}>
                          <Typography  className="card-title-item" variant="h6">{item.title}</Typography>
                          <Typography className="card-title-item-description" variant="body2" sx={{ mt: 1, borderTop: "1px solid rgba(255, 255, 255, 0.5)", pt: 1 }}>
                            {item.description}
                          </Typography>
                        </CardContent>
                      </motion.div>
                    </>
                  )}
                </Card>
              </motion.div>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default OfferingsSection;
