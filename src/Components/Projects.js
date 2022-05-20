import React, { useState } from "react";
import "../App.css"
import ProjectCard from "./ProjectCard";

const Projects = (props) => {
    return (
        <div className="section publications">
            <h2 className="underline">Projects</h2>
            <ProjectCard cardData={{
                title: "Movie Recommender",
                link: "https://ieeexplore.ieee.org/abstract/document/9671531",
                description: "Data science course project to build a recommender system without AI. Cleans a 70k+ IMDb movie dataset and standardizes all fields. Recommender collects a user's n favorite movies, then uses a custom algorithm to find their n best movie recommendations. Allows a user to modify weights, e.g. a user can place more or less emphasis on genre or several other fields as they wish. A random class survey showed successful recommendations at x% using default weights, where a successful recommendation is rated as good by the user, or if the user has seen it already (must be a good recommendation if they were willing to watch it!). Pandas allows for vectorization and quick runtimes.",
                tools: ["Python", "Pandas", "Numpy"]
            }}/>
        </div>
    )
}

export default Projects;