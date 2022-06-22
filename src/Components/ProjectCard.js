import React, { useState } from "react";
import { Link, Box, Tooltip } from "@mui/material";

const ProjectCard = (props) => {
    return (
        <>
            <div className="projectCard">
                {/* Image */}
                <Box
                    className="projectCard-image-div"
                    sx={{
                        transform: "translateZ(0)",
                        overflow: "hidden",
                        border: "1px solid black",
                        width: "400%",
                        height: "100%",
                        maxWidth: "20rem",
                        maxHeight: "20rem",
                    }}
                >
                    <Link href={props.cardData.gh_link}>
                        <Tooltip title={props.cardData.gh_link} followCursor>
                            <Box
                                className="projectCard-image"
                                component="img"
                                sx={{
                                    display: "block",
                                    width: "100%",
                                    height: "auto",
                                    transition: "0.2s",
                                    "&:hover": {
                                        transform: "scale(1.1)",
                                        overflow: "hidden",
                                    },
                                }}
                                alt="Project Image"
                                src={"images/" + props.cardData.image}
                            />
                        </Tooltip>
                    </Link>
                </Box>

                {/* Information */}
                <div className="projectCard-info">
                    <div className="projectCard-title">
                        <Link href={props.cardData.gh_link}>
                            <Tooltip
                                title={props.cardData.gh_link}
                                placement="top"
                                arrow
                            >
                                <h3>{props.cardData.title}</h3>
                            </Tooltip>
                        </Link>
                    </div>

                    <div className="projectCard-projectLinks">
                        <div className="projectCard-projectLink">
                            <h4>Github: </h4>
                            <Link href={props.cardData.gh_link}>
                                <p>{props.cardData.gh_link}</p>
                            </Link>
                        </div>

                        {props.cardData.project_link && (
                            <div className="projectCard-projectLink">
                                <h4>Public App: </h4>
                                <Link href={props.cardData.project_link}>
                                    <p>{props.cardData.project_link}</p>
                                </Link>
                            </div>
                        )}
                    </div>

                    <p>{props.cardData.description}</p>

                    <div className="projectCard-attributes">
                        {props.cardData.tools.map((tool) => (
                            <Tooltip title={tool.link} placement="bottom" arrow>
                                <Link href={tool.link}>
                                    <p>{tool.text}</p>
                                </Link>
                            </Tooltip>
                        ))}
                    </div>
                </div>
            </div>
            {/* Dont put the separator of card has is_last flag */}
            {!props.cardData.is_last && <hr className="separator" />}
        </>
    );
};

export default ProjectCard;
