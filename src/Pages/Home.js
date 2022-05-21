import React from "react";
import About from  "../components/About";
import Publications from "../components/Publications";
import Projects from "../components/Projects";
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