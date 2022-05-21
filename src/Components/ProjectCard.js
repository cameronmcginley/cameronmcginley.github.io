import React, { useState } from "react";
import { Link } from '@mui/material';

const ProjectCard = (props) => {
    return (
    <div className="projectCard">
        <div className="projectCard-image-div">
            <Link href={props.cardData.link}>
                <img style={{border: "1px solid black"}}
                    src={"images/" + props.cardData.image} 
                    alt="Project Image" 
                    className="projectCard-image"/>
            </Link>
        </div>

        <div className="projectCard-info">
            <Link href={props.cardData.link}><h3>{props.cardData.title}</h3></Link>
            <p>{props.cardData.description}</p>

            <div className="projectCard-attributes">
                {props.cardData.tools.map((tool) => (
                    <Link href={tool.link}><p>{tool.text}</p></Link>
                ))}
            </div>
        </div>
    </div>
    )
}

export default ProjectCard;