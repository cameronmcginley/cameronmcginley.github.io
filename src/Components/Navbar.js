import React from "react";
import { Paper, Box, Button } from "@mui/material";

const Navbar = () => {
    return (
        <div className="navbar underline" square={true}>
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