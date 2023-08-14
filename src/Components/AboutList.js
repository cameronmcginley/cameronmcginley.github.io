import React from "react";
import { List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import "../App.css";

// Lists for education and professional sections in bio section
const AboutList = (props) => {
  return (
    <div className="about list">
      <h3>{props.title}</h3>
      <List className="list2">
        {props.items &&
          props.items.map((item) => (
            <ListItem key={item.text}>
              {/* Image of company logo */}
              {item.image && (
                <ListItemIcon sx={{ minWidth: "3.2rem" }}>
                  <img
                    src={"images/companies/" + item.image}
                    alt={item.text}
                    style={{ width: "2.8rem" }}
                  />
                </ListItemIcon>
              )}
              {/* Content */}
              <ListItemText
                sx={{ m: 0, mb: 1.5 }}
                primary={item.text}
                secondary={item.secondary}
              />
            </ListItem>
          ))}
      </List>
    </div>
  );
};

export default AboutList;
