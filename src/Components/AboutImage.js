import React from "react";
import { Link } from "@mui/material";
import "../App.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import SchoolIcon from "@mui/icons-material/School";

const AboutImage = () => {
  return (
    <div className="about image">
      {/* Headshot */}
      <img
        src="images/headshot_384x384.webp"
        className="headshot"
        alt="Headshot of Cameron McGinley"
        loading="lazy"
      />
      <h1>Cameron McGinley</h1>
      <p>camcginley@ucsd.edu</p>

      {/* Links to resume and social media */}
      <div className="about image links">
        <Link
          href={process.env.PUBLIC_URL + "/resume.pdf"}
          target="_blank"
          without="true"
          rel="noopener noreferrer"
          aria-label="Resume"
          // 5 px margin bottom
          sx={{ mb: 0.5 }}
        >
          <PictureAsPdfIcon />
          <p className="icon-link">Resume</p>
        </Link>

        <Link
          href="https://github.com/cameronmcginley"
          aria-label="GitHub"
          sx={{ mb: 0.5 }}
        >
          <GitHubIcon />
          <p className="icon-link">GitHub</p>
        </Link>

        <Link
          href="https://www.linkedin.com/in/cameronmcginley/"
          aria-label="LinkedIn"
          sx={{ mb: 0.5 }}
        >
          <LinkedInIcon />
          <p className="icon-link">LinkedIn</p>
        </Link>

        <Link
          href="https://scholar.google.com/citations?user=3AUzp3MAAAAJ&hl=en"
          aria-label="Google Scholar"
          sx={{ mb: 0.5 }}
        >
          <SchoolIcon />
          <p className="icon-link">Google Scholar</p>
        </Link>
      </div>
    </div>
  );
};

export default AboutImage;
