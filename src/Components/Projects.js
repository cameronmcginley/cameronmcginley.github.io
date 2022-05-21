import React, { useState } from "react";
import "../App.css"
import ProjectCard from "./ProjectCard";

const Projects = (props) => {
    return (
        <div name="Projects" className="section publications">
            <h2 className="underline">Projects</h2>
            <ProjectCard cardData={{
                title: "Movie Recommender",
                link: "https://github.com/cameronmcginley/MovieRecommender",
                description: "Data science course project to build a recommender system without AI. Cleans a 70k+ IMDb movie dataset and standardizes all fields. Recommender collects a user's n favorite movies, then uses a custom algorithm to find their n best movie recommendations. Allows a user to modify weights, e.g. a user can place more or less emphasis on genre or several other fields as they wish. A random class survey showed successful recommendations at x% using default weights, where a successful recommendation is rated as good by the user, or if the user has seen it already (must be a good recommendation if they were willing to watch it!). Pandas allows for vectorization and quick runtimes.",
                image: "project-movierecommender-image2.png",
                tools: [
                    {
                        text: "Python", 
                        link: "https://www.python.org/"
                    }, 
                    {
                        text: "Pandas", 
                        link: "https://pandas.pydata.org/"
                    }, 
                    {
                        text: "NumPy", 
                        link: "https://numpy.org/"
                    },
                ],
            }}/>

            <ProjectCard cardData={{
                title: "Roblox Object Placement System",
                link: "https://github.com/cameronmcginley/RBLX-PlacementSystem",
                description: "Tried my hand at Roblox development and built an object placement system. This makes use of raycasting and efficient client-server communications for choosing object and location via client, and building via server. Uses optimal object design to allow for easy additions of new objects and how they interact with the world (e.g. custom hitboxes). Additionally, it saves placed objects per account. Project built in a Rojo enviroment to synchrozine external codebase into Roblox Studio to allow for Git version control.",
                image: "project-rblxplacement-image.png",
                tools: [
                    {
                        text: "Lua", 
                        link: "https://www.lua.org/"
                    }, 
                    {
                        text: "Roblox Studio", 
                        link: "https://www.roblox.com/create"
                    }, 
                    {
                        text: "Rojo", 
                        link: "https://rojo.space/"
                    },
                ],
            }}/>

            <ProjectCard cardData={{
                title: "This Website!",
                link: "https://github.com/cameronmcginley/personal-website",
                description: "A personal portfolio website, mainly designed to showcase a quick 'about me' section along with various projects. Built using React and Javascript.",
                image: "project-personalwebsite-image.png",
                tools: [
                    {
                        text: "React", 
                        link: "https://reactjs.org/"
                    }, 
                    {
                        text: "Javascript", 
                        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                    }, 
                    {
                        text: "MUI", 
                        link: "https://mui.com/"
                    },
                ],
            }}/>


        </div>
    )
}

export default Projects;