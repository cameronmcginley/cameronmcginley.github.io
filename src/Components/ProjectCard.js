import React, { useState } from "react";
import { Link } from '@mui/material';

const ProjectCard = (props) => {
    return (
    <div className="projectCard">
        <img src={props.cardData.image} className="projectCard-image" alt="Logo" />

        <div className="projectCard-info">
            <Link href={props.cardData.link}><h3>{props.cardData.title}</h3></Link>
            <p>{props.cardData.description}</p>
        </div>
    </div>
    )
}

export default ProjectCard;