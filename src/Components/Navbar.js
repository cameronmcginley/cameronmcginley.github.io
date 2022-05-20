import React from "react";
import Card from "../Components/Card";
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
        <Paper className="navbar" square={true}>
            {/* <h1>Demo Application</h1> */}
            <div className="nav-title">
                <p><b>WPD Course Sign-In Dashboard</b></p>
            </div>

            <div className="nav-links">
                <Button color="primary" variant="text" href="/" >
                Home
                </Button>
                <Button color="primary" variant="text" href="/courses" >
                Courses
                </Button>
                <Button color="primary" variant="text" href="/viewdata" >
                View Data
                </Button>
            </div>
        </Paper>
    )
}

export default Navbar;