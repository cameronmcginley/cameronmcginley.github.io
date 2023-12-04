import React from "react";
import { Link, Tooltip } from "@mui/material";

const PublicationCard = ({ cardData }) => {
  return (
    <div>
      {/* Div fixes hover area being full width instead of just over text */}
      {/* Paper title */}
      <div className="projectCard-title">
        <Link href={cardData.link}>
          <Tooltip title={cardData.link} placement="bottom" arrow>
            <h3>{cardData.title}</h3>
          </Tooltip>
        </Link>
      </div>

      <div className="publicationCard-info">
        {/* Information */}
        <p>{cardData.author}</p>
        <p>
          <i>{cardData.location}</i>
        </p>

        {/* Div fixes hover area being full width instead of just over text */}
        {/* Citations */}
        <div className="projectCard-title">
          <Link href={cardData.citationLink}>
            <Tooltip title={cardData.citationLink} placement="bottom" arrow>
              <p>Citations: {cardData.citationCount}</p>
            </Tooltip>
          </Link>
        </div>
      </div>

      <br />

      {/* Abstract */}
      <p>
        <b>Abstract</b>
      </p>
      <p>{cardData.description}</p>
    </div>
  );
};

export default PublicationCard;
