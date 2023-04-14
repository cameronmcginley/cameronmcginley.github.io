import React from "react";
import { Link } from "@mui/material";
import "../App.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import SchoolIcon from '@mui/icons-material/School';

const AboutImage = () => {
  return (
    <div className="about image">
      <img src="images/headshot_256x256.png" className="headshot" alt="Logo" />
      <h1>Cameron McGinley</h1>
      {/* <p>MS CS at UC San Diego</p> */}

      <p>camcginley@ucsd.edu</p>

      <div className="about image links">
        <Link
          href={process.env.PUBLIC_URL + "/resume.pdf"}
          target="_blank"
          without
          rel="noopener noreferrer"
        >
          <PictureAsPdfIcon /><p className="icon-link">Resume</p>
        </Link>

        <Link href="https://github.com/cameronmcginley">
          <GitHubIcon /><p className="icon-link">GitHub</p>
        </Link>

        <Link href="https://www.linkedin.com/in/cameronmcginley/">
          <LinkedInIcon /><p className="icon-link">LinkedIn</p>
        </Link>

        <Link href="https://scholar.google.com/citations?user=3AUzp3MAAAAJ&hl=en">
          <SchoolIcon /><p className="icon-link">Google Scholar</p>
        </Link>
      </div>
    </div>
  );
};

export default AboutImage;
