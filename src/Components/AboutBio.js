import React, { useState } from "react";
import { Paper } from '@mui/material';
import "../App.css"
import AboutList from "./AboutList"

const AboutBio = (props) => {

    return (
    <div className="about bio">
        <h1>About Me</h1>
        <p>I am a Master of Science in Computer Science student at UC San Diego set to graduate in December 2023.</p>
        <p>Before coming to San Diego, I spent my time working on bug detection software at Purdue University, phishing email detection and generating natural language responses at Wichita State University, and working in QA with data storage system software at NetApp.</p>

        <div className="about bio lists">
            <AboutList title="Education" items={[
                {text: "Master of Science in Computer Science", secondary: "University of California, San Diego"},
                {text: "Bachelor of Science in Computer Science", secondary: "Wichita State University"}
            ]}/>

            <AboutList title="Professional" items={[
                {text: "Test Engineer", secondary: "NetApp"},
                {text: "ML Research Intern", secondary: "Purdue University"},
                {text: "ML Research Intern", secondary: "Wichita State University"}
            ]}/>
        </div>
    </div>
    )
}

export default AboutBio;