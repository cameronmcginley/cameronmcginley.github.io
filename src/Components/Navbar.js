import React from "react";
import { Paper, Box, Button } from "@mui/material";
import { Link as ScrollLink, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Navbar = () => {
    // https://www.npmjs.com/package/react-scroll
    // Scroll To (Element)
    var Scroll   = require('react-scroll');
    var Element  = Scroll.Element;
    var scroller = Scroll.scroller;

    return (
        <div className="navbar underline">
            <div className="nav-links">
                {/* Wraps in mui buttons to look nice */}
                <Button><a onClick={() => scroll.scrollToTop({smooth: true, spy: true, duration: 500})}>Home</a></Button>
                <Button><ScrollLink activeClass="active" className="test1" to="Publications" spy={true} smooth={true} duration={500} >Publications</ScrollLink></Button>
                <Button><ScrollLink activeClass="active" className="test1" to="Projects" spy={true} smooth={true} duration={500} >Projects</ScrollLink></Button>

                {/* <a onClick={() => scroll.scrollToTop({smooth: true, spy: true, duration: 500})}>Home</a>
                <ScrollLink activeClass="active" className="test1" to="Publications" spy={true} smooth={true} duration={500}>Publications</ScrollLink>
                <ScrollLink activeClass="active" className="test1" to="Projects" spy={true} smooth={true} duration={500}>Projects</ScrollLink> */}
            </div>
        </div>
    )
}

export default Navbar;