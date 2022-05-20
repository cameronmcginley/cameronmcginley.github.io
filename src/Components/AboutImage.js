import React, { useState } from "react";
import { Paper, Link } from '@mui/material';
import "../App.css"
import headshot from "../headshot.jpg"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const AboutImage = (props) => {

    return (
    <div className="about image">
        <img src={headshot} className="headshot" alt="Logo" />
        <h1>Cameron McGinley</h1>
        {/* <p>MS CS at UC San Diego</p> */}

        <p>camcginley@ucsd.edu</p>

        <div className="about image links">
            <Link>Resume</Link>
            <Link href="https://scholar.google.com/citations?user=3AUzp3MAAAAJ&hl=en">Google Scholar</Link>

            <div className="about image links icons">
                <Link href="https://github.com/cameronmcginley">
                    <GitHubIcon/>
                </Link>
                <Link href="https://www.linkedin.com/in/cameronmcginley/">
                    <LinkedInIcon/>
                </Link>
            </div>
        </div>
    </div>
    )
}

export default AboutImage;