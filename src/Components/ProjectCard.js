import React from "react";
import { Link, Box, Tooltip } from "@mui/material";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

const ProjectCard = (props) => {
  return (
    <>
      <div className="projectCard">
        {/* Image */}
        <Box
          className="projectCard-image-div"
          sx={{
            transform: "translateZ(0)",
            overflow: "hidden",
            border: "1px solid black",
            width: "400%",
            height: "100%",
            maxWidth: "20rem",
            maxHeight: "20rem",
          }}
        >
          <Link href={props.cardData.gh_link}>
            <Box
              className="projectCard-image"
              component="img"
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
              alt="Project Image"
              src={"images/" + props.cardData.image}
            />
          </Link>
        </Box>

        {/* Information */}
        <div className="projectCard-info">
          <div className="projectCard-titleandchips">
            <div className="projectCard-title">
              <Link href={props.cardData.gh_link}>
                <h3>{props.cardData.title}</h3>
              </Link>
            </div>

            {/* Links to GitHub and app */}
            <Stack direction="row" spacing={1} className="projectCard-chips">
              <Tooltip title={props.cardData.gh_link} placement="bottom" arrow>
                <Chip
                  color="primary"
                  label="GitHub"
                  component="a"
                  href={props.cardData.gh_link}
                  variant="outlined"
                  clickable
                />
              </Tooltip>
              {props.cardData.project_link && (
                <Tooltip
                  title={props.cardData.project_link}
                  placement="bottom"
                  arrow
                >
                  <Chip
                    color="primary"
                    label="Public App"
                    component="a"
                    href={props.cardData.project_link}
                    variant="outlined"
                    clickable
                  />
                </Tooltip>
              )}
            </Stack>
          </div>

          <p>{props.cardData.description}</p>

          {/* Links to tools/attrs */}
          <Stack
            direction="row"
            spacing={1}
            className="projectCard-chips-after"
          >
            {props.cardData.tools.map((tool) => (
              <Tooltip
                title={tool.link}
                placement="bottom"
                arrow
                key={tool.text}
              >
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
            ))}
          </Stack>
        </div>
      </div>
      {/* Dont put the separator of card has is_last flag */}
      {!props.cardData.is_last && <hr className="separator" />}
    </>
  );
};

export default ProjectCard;
