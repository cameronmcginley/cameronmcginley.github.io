import React from "react";
import { Link, Tooltip } from "@mui/material";

const PublicationCard = (props) => {
  return (
    <div>
      <div className="projectCard-title">
        <Link href={props.cardData.link}>
          <Tooltip title={props.cardData.link} placement="top" arrow>
            <h3>{props.cardData.title}</h3>
          </Tooltip>
        </Link>
      </div>

      <p>{props.cardData.author}</p>
      <p>
        <i>{props.cardData.location}</i>
      </p>
      <br />
      <p>
        <b>Abstract</b>
      </p>
      <p>{props.cardData.description}</p>
    </div>
  );
};

export default PublicationCard;
