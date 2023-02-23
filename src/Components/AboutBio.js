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
        Before coming to San Diego, I spent my time working on automating C++
        vulnerability detection for the U.S. Department of Defense, buggy Java
        code detection at Purdue University, phishing email detection and
        generating natural language responses at Wichita State University, and
        working in software test automation on data storage system firmware at NetApp.
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
            {
              text: "U.S. Department of Defense",
              secondary: "Software Engineer Intern (May 2022 - August 2022)",
            },
            {
              text: "NetApp",
              secondary: "Test Engineer Intern (May 2019 - May 2022)",
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
