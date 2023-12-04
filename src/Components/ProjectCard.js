import React from "react";
import { Link, Box, Tooltip } from "@mui/material";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

// ProjectMedia component to render either an image or a video based on the file type
const ProjectMedia = ({ cardData, isWebm }) => (
  <Link href={cardData.gh_link}>
    {isWebm ? (
      // Render video if the media file is a WebM
      <video
        className="projectCard-image"
        alt="Project Video"
        src={`images/${cardData.image}`}
        loop
        autoPlay
        muted
        style={{
          width: "100%",
          height: "auto",
          transition: "0.2s",
          "&:hover": {
            transform: "scale(1.1)",
            overflow: "hidden",
          },
        }}
      />
    ) : (
      // Render image if the media file is not a WebM
      <Box
        className="projectCard-image"
        component="img"
        alt="Project Image"
        src={`images/${cardData.image}`}
        sx={{
          display: "block",
          width: "100%",
          height: "auto",
          transition: "0.2s",
          "&:hover": {
            transform: "scale(1.1)",
            overflow: "hidden",
          },
        }}
      />
    )}
  </Link>
);

// ToolChip component for rendering each tool with a tooltip
const ToolChip = ({ tool }) => (
  <Tooltip title={tool.link} placement="bottom" arrow key={tool.text}>
    <Chip
      color="default"
      size="small"
      label={tool.text}
      component="a"
      href={tool.link}
      variant="outlined"
      clickable
    />
  </Tooltip>
);

// Main ProjectCard component
const ProjectCard = ({ cardData }) => {
  // Determine if the image file is a WebM video
  const isWebm = cardData.image.endsWith(".webm");

  return (
    <>
      <div className="projectCard">
        <Box className="projectCard-image-div">
          {/* Render the ProjectMedia component */}
          <ProjectMedia cardData={cardData} isWebm={isWebm} />
        </Box>

        <div className="projectCard-info">
          <div className="projectCard-titleandchips">
            <div className="projectCard-title">
              {/* Link to the project's GitHub repository */}
              <Link href={cardData.gh_link}>
                <h3>{cardData.title}</h3>
              </Link>
            </div>

            {/* Stack of chips for GitHub and optional project link */}
            <Stack direction="row" spacing={1} className="projectCard-chips">
              <Tooltip title={cardData.gh_link} placement="bottom" arrow>
                <Chip
                  color="primary"
                  label="GitHub"
                  component="a"
                  href={cardData.gh_link}
                  variant="outlined"
                  clickable
                />
              </Tooltip>
              {cardData.project_link && (
                <Tooltip title={cardData.project_link} placement="bottom" arrow>
                  <Chip
                    color="primary"
                    label="Public App"
                    component="a"
                    href={cardData.project_link}
                    variant="outlined"
                    clickable
                  />
                </Tooltip>
              )}
            </Stack>
          </div>

          {/* Project description */}
          <p>{cardData.description}</p>

          {/* Stack of chips for tools used in the project */}
          <Stack
            direction="row"
            spacing={1}
            className="projectCard-chips-after"
          >
            {cardData.tools.map((tool, index) => (
              // Render a chip for each tool, using index as key
              <ToolChip tool={tool} key={index} />
            ))}
          </Stack>
        </div>
      </div>
      {/* Render a separator unless it's the last card in the list */}
      {!cardData.is_last && <hr className="separator" />}
    </>
  );
};

export default ProjectCard;
