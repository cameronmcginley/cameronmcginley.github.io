import React from "react";
import { Button, Link } from "@mui/material";
import { animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  // https://www.npmjs.com/package/react-scroll
  // Scroll To (Element)
  var Scroll = require("react-scroll");
  var scroller = Scroll.scroller;

  return (
    <div className="navbar underline">
      <div className="navbar-content">
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
        <div className="nav-links">
          {/* Wraps in mui buttons to look nice */}
          <Button
            onClick={() =>
              scroll.scrollToTop({ smooth: true, spy: true, duration: 500 })
            }
          >
            Home
          </Button>
          <Button
            onClick={() =>
              scroller.scrollTo("Publications", {
                smooth: true,
                spy: true,
                duration: 500,
                offset: -40,
              })
            }
          >
            Publications
          </Button>
          <Button
            onClick={() =>
              scroller.scrollTo("Projects", {
                smooth: true,
                spy: true,
                duration: 500,
                offset: -40,
              })
            }
          >
            Projects
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
