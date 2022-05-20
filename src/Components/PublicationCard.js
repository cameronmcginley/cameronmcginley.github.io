import React, { useState } from "react";
import { Link } from '@mui/material';

const PublicationCard = (props) => {
    return (
    <div>
        <Link href={props.cardData.link}><h3>{props.cardData.title}</h3></Link>
        <p>{props.cardData.author}</p>
        <p><i>{props.cardData.location}</i></p>
        <br />
        <p><b>Abstract</b></p>
        <p>{props.cardData.description}</p>
    </div>
    )
}

export default PublicationCard;