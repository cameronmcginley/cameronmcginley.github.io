import React from "react";
import { Paper, Box, Button } from "@mui/material";

const Navbar = () => {

    // return (
    //     <>
    //     <Box className="mainPageTitle">
    //         <h1>Cameron McGinley</h1>
    //     </Box>
    //     </>
    // )

    return (
        <div className="navbar underline" square={true}>
            {/* <h1>Demo Application</h1> */}
            <div className="nav-title">
                <p><b>Cameron McGinley</b></p>
            </div>

            <div className="nav-links">
                <Button color="primary" variant="text" href="/" >
                Home
                </Button>
                <Button color="primary" variant="text" href="/" >
                Publications
                </Button>
                <Button color="primary" variant="text" href="/" >
                Projects
                </Button>

            </div>
        </div>
    )
}

export default Navbar;