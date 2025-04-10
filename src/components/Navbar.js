import React, { useState } from "react";
import { AppBar, Toolbar, Button, Box, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu"; // Hamburger icon for drawer
import "../assets/styles/Navbar.css"; // CSS file
import logo from "../assets/images/home-logo.svg"; // Import logo
import homeIcon from "../assets/images/home-alt.svg"; // Import home icon

const Navbar = () => {
  const location = useLocation(); // Get current route
  const [drawerOpen, setDrawerOpen] = useState(false); // State for drawer

  // Function to toggle drawer
  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <>
      {/* App Bar */}
      <AppBar  className="navbar" elevation={0} position="static">
        <Toolbar className="navbar-container">
          {/* Logo with margin */}
          <img src={logo} alt="Lirio Blanco Logo" className="navbar-logo" />

          {/* Desktop Navigation with right margin */}
          <Box className="nav-links">
            <Button sx={{ color: "black", textTransform: "none" }}  className={location.pathname === "/" ? "active" : ""} component={Link} to="/">
              {location.pathname === "/" && <img src={homeIcon} alt="Home" className="home-icon" />} Home
            </Button>
            <Button sx={{ color: "black", textTransform: "none" }} className={location.pathname === "/about" ? "active" : ""} component={Link} to="/about">
              About
            </Button>
            <Button sx={{ color: "black", textTransform: "none" }} className={location.pathname === "/product" ? "active" : ""} component={Link} to="/product">
              Product
            </Button>
            <Button  sx={{ color: "black", textTransform: "none" }} className={location.pathname === "/certifications" ? "active" : ""} component={Link} to="/certifications">
              Certifications
            </Button>
            <Button sx={{ color: "black", textTransform: "none" }} className={location.pathname === "/contact" ? "active" : ""} component={Link} to="/contact">
              Contact
            </Button>
          </Box>

          {/* Mobile Menu Button (Black Icon) */}
          <IconButton className="menu-icon" edge="end" onClick={toggleDrawer(true)} sx={{ mr: 2 }}>
  <MenuIcon sx={{ color: "black" }} /> {/* Set icon color to black */}
</IconButton>

        </Toolbar>
      </AppBar>

      {/* Drawer (Mobile Navigation) */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box className="drawer-container" role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
          <List>
            <ListItem button component={Link} to="/">
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} to="/about">
              <ListItemText primary="About" />
            </ListItem>
            <ListItem button component={Link} to="/product">
              <ListItemText primary="Product" />
            </ListItem>
            <ListItem button component={Link} to="/certifications">
              <ListItemText primary="Certifications" />
            </ListItem>
            <ListItem button component={Link} to="/contact">
              <ListItemText primary="Contact" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
