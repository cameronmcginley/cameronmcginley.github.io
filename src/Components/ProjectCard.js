import React, { useState } from "react";
import { Link } from '@mui/material';

const ProjectCard = (props) => {
    return (
    <div>
        <Link href={props.cardData.link}><h3>{props.cardData.title}</h3></Link>
        <p>{props.cardData.description}</p>
    </div>
    )
}

export default ProjectCard;