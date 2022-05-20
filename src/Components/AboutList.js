import React, { useState } from "react";
import { Paper, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import "../App.css"
import CircleIcon from '@mui/icons-material/Circle';

const AboutList = (props) => {

    return (
    <div className="about list">
        <h3>{props.title}</h3>
        <List className="list2">
            {props.items && props.items.map((item) =>
                <ListItem>
                    <ListItemIcon sx={{minWidth: '1.2rem'}}>
                        <CircleIcon sx={{width: '.4rem', color: 'black'}}/>
                    </ListItemIcon>
                    <ListItemText sx={{m:0}} 
                        primary={item.text}
                        secondary={item.secondary}
                    />
                </ListItem>
            )}
        </List>
    </div>
    )
}

export default AboutList;