import React from "react";
import { Button, Link } from "@mui/material";
import { animateScroll as scroll, scroller } from "react-scroll";

const Navbar = () => {
  // https://www.npmjs.com/package/react-scroll
  const scrollToTop = () => {
    scroll.scrollToTop({ smooth: true, spy: true, duration: 500 });
  };

  // Scroll to given section
  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      smooth: true,
      spy: true,
      duration: 500,
      offset: -40,
    });
  };

  return (
    <div className="navbar underline">
      <div className="navbar-content">
        {/* Link to homepage with styled hover effect */}
        <div className="nav-title">
          <Link
            href="/"
            sx={{
              color: "black",
              textDecoration: "none",
              transition: "0.3s",
              "&:hover": {
                color: "primary.main",
              },
            }}
          >
            <h3>Cameron McGinley</h3>
          </Link>
        </div>

        {/* Links to other sections */}
        <div className="nav-links">
          {/* Wraps in mui buttons to look nice */}
          <Button onClick={scrollToTop}>Home</Button>
          <Button onClick={() => scrollToSection("Publications")}>
            Publications
          </Button>
          <Button onClick={() => scrollToSection("Projects")}>Projects</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
