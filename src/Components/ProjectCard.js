import React, { useState } from "react";
import { Link, Box } from '@mui/material';

const ProjectCard = (props) => {
    return (
    <div className="projectCard">
        <Box 
            className="projectCard-image-div"
            sx={{ transform: 'translateZ(0)', overflow: 'hidden', border: "1px solid black" }}
        >
            <Link href={props.cardData.link}>
                <Box
                    className="projectCard-image"
                    component="img"
                    sx={{
                        transition: '0.2s',
                        "&:hover": {
                            transform: 'scale(1.1)',
                            overflow: 'hidden'
                        }
                    }}
                    alt="Project Image" 
                    src={"images/" + props.cardData.image} 
                />
                {/* <img style={{border: "1px solid black"}}
                    src={"images/" + props.cardData.image} 
                    alt="Project Image" 
                    className="projectCard-image"
                    sx={{ }}>/> */}
            </Link>
        </Box>

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