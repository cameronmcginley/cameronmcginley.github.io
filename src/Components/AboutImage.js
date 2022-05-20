import React, { useState } from "react";
import { Paper } from '@mui/material';
import "../App.css"
import headshot from "../headshot.jpg"

const AboutImage = (props) => {

    return (
    <div className="about image">
        <img src={headshot} className="headshot" alt="Logo" />
        <h1>Cameron McGinley</h1>
        <p>MS CS at UC San Diego</p>
        {/* Links */}
    </div>
    )
}

export default AboutImage;