import React from "react";
import "../App.css";
import AboutList from "./AboutList";

const AboutBio = () => {
  return (
    <div className="about bio">
      <h2 className="underline">About Me</h2>
      <p>
        I am a Computer Science MS student at UC San Diego set to graduate in
        December 2023.
      </p>
      <p>
        Before coming to San Diego, I spent my time working on bug detection
        software at Purdue University, phishing email detection and generating
        natural language responses at Wichita State University, and working in
        QA with data storage system software at NetApp.
      </p>

      <div className="about bio lists">
        <AboutList
          title="Education"
          items={[
            {
              text: "M.S. in Computer Science",
              secondary: "University of California, San Diego (expected 2023)",
            },
            {
              text: "B.S. in Computer Science",
              secondary: "Wichita State University (2022)",
            },
          ]}
        />

        <AboutList
          title="Professional"
          items={[
            // {text: "Test Engineer", secondary: "NetApp (May 2019 - May 2022)"},
            // {text: "ML Research Intern", secondary: "Purdue University (June 2021 - July 2021)"},
            // {text: "ML Research Intern", secondary: "Wichita State University (June 2020 - August 2020)"},
            {
              text: "Department of Defense",
              secondary: "Computer Science Intern (May 2022 - August 2022)",
            },
            {
              text: "NetApp",
              secondary: "Test Engineer (May 2019 - May 2022)",
            },
            {
              text: "Purdue University",
              secondary: "ML Research Intern (June 2021 - July 2021)",
            },
            {
              text: "Wichita State University",
              secondary: "ML Research Intern (June 2020 - August 2020)",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default AboutBio;
