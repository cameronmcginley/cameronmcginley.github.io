import React from "react";
import { Link, Tooltip } from "@mui/material";

const PublicationCard = (props) => {
  return (
    <div>
      <div className="projectCard-title">
        <Link href={props.cardData.link}>
          <Tooltip title={props.cardData.link} placement="bottom" arrow>
            <h3>{props.cardData.title}</h3>
          </Tooltip>
        </Link>
      </div>

      <div className="publicationCard-info">
        <p>{props.cardData.author}</p>
        <p>
          <i>{props.cardData.location}</i>
        </p>
        <Link href={props.cardData.citationLink}>
          <Tooltip title={props.cardData.citationLink} placement="bottom" arrow>
            <p>Citations: {props.cardData.citationCount}</p>
          </Tooltip>
        </Link>
      </div>

      <br />
      <p>
        <b>Abstract</b>
      </p>
      <p>{props.cardData.description}</p>
    </div>
  );
};

export default PublicationCard;
