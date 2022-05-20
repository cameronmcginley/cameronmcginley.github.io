import React, { useState } from "react";
import { Paper } from '@mui/material';

const Card = (props) => {
    // Either "RESEARCH" or "PROJECT"
    const cardType = props.cardData.type;

    return (
    <Paper className="card">
        <h1>{props.cardData.title}</h1>
        <h1>{props.cardData.author}</h1>
        <h1>{props.cardData.location}</h1>
        <h1>{props.cardData.links}</h1>
        <h1>{props.cardData.description}</h1>
    </Paper>
    )
}

export default Card;