import React from "react";
import About from  "../Components/About";
import Publications from "../Components/Publications";
import Projects from "../Components/Projects";
import { Paper, Box } from "@mui/material";

const Home = () => {
    return (
        <>
        <About />
        <Publications />
        <Projects />
        </>
    )
}

export default Home;