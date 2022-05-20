import React, { useState } from "react";
import "../App.css"
import AboutImage from "./AboutImage";
import AboutBio from "./AboutBio";

const About = (props) => {
    return (
        <div className="section about">
            <AboutImage />
            <AboutBio />
        </div>
    )
}

export default About;