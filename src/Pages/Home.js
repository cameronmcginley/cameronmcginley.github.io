import React from "react";
import Card from "../Components/Card";
import About from  "../Components/About";
import { Paper, Box } from "@mui/material";

const Home = () => {

    // return (
    //     <>
    //     <Paper className="bio">
    //         <h1>Test</h1>
    //     </Paper>

    //     <Box className="projects">
    //         {/* Research paper */}
    //         <Card 
    //             cardData={{
    //                 title: "title",
    //                 author: "author",
    //                 location: "ieee",
    //                 links: "link",
    //                 descriptions: "test desc"
    //             }}
    //         />

    //         {/* Projects */}
    //     </Box>

    //     </>
    // )

    return (
        // <div className="section about"></div>
        // <div className="section publications"></div>
        // <div className="section about"></div>
        <>
        <About />
        </>
    )
}

export default Home;