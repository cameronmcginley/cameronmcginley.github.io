import React from "react";
import "../App.css";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div name="Projects" className="section publications">
      <h2 className="projects-title underline">Featured Projects</h2>
      <p className="projects-note">Read more about each via the GitHub link!</p>

      <ProjectCard
        cardData={{
          title: "Course Sign-In Dashboard App",
          project_link: "https://coursedashboard.web.app/",
          gh_link: "https://github.com/cameronmcginley/CourseDashboard/",
          description:
            "This web app serves as a dashboard for courses and attendees. It provides an easy to use back-end for course instructors or administrators to handle course data and attendee data. One primary feature is the course tracker, where instructors can input their courses to automatically generate QR codes. These QR codes allow attendees to sign into courses by scanning them, either via the webpage or a printable page. This tracker also displays a unique page for each course with various helpful info and features. The next main feature is the attendee/sign-in data, where all sign-ins are stored. This data can be exported to .CSV, and comes with wide support for querying data. This project uses Firebase's Cloud Firestore as a database. More information can be found on the linked GitHub.",
          image: "project-coursesignindashboard-image.png",
          tools: [
            {
              text: "JavaScript",
              link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            },
            {
              text: "React",
              link: "https://react.dev/",
            },
            {
              text: "Node.js",
              link: "https://nodejs.org/en/",
            },
            {
              text: "Cloud Firestore",
              link: "https://firebase.google.com/docs/firestore",
            },
          ],
        }}
      />

      <ProjectCard
        cardData={{
          title: "Optimized Brainf**k Interpreter",
          project_link: "",
          gh_link:
            "https://github.com/cameronmcginley/optimized-brainfk-interpreter",
          description:
            "Interpreter for the brainf**k programming language: a Turing complete language consisting of 8 instructions allowing for manipulation of bytes. This interpreter implements some simple optimizations, such as condensing repetitive instructions, and some more complex optimizations including peephole optimization with pattern matching for common brainf**k algorithms, such as addition or subtraction.",
          image: "project-brainfk-image.png",
          tools: [
            {
              text: "C++",
              link: "https://m.cplusplus.com/",
            },
            {
              text: "Brainf**k",
              link: "https://esolangs.org/wiki/Brainfuck",
            },
          ],
        }}
      />

      <ProjectCard
        cardData={{
          title: "Projectile Points Web Database",
          project_link: "http://projectile-points-database.vercel.app/",
          gh_link:
            "https://github.com/cameronmcginley/projectile-points-web-database",
          description:
            "Web application that serves as a wikipedia-like database for projectile point (arrowhead) archaeological data. Allows for the creation, updating, and deleting of projectile point pages. Designed to improve on similar existing websites (maintained by universities) by better structuring data and allowing for far greater search and comparison of data, especially by automated means. Built with the Next.js framework on React, using GraphQL and a PostgreSQL database. More detailed stack info found on GitHub or public app.",
          image: "project-projectilepoints-image.png",
          tools: [
            {
              text: "TypeScript",
              link: "https://www.typescriptlang.org/",
            },
            {
              text: "Next.js",
              link: "https://nextjs.org/",
            },
            {
              text: "React",
              link: "https://react.dev/",
            },
            {
              text: "GraphQL",
              link: "https://typegraphql.com/",
            },
            {
              text: "PostgreSQL",
              link: "https://www.postgresql.org/",
            },
          ],
        }}
      />

      <ProjectCard
        cardData={{
          title: "Sorting Visualizer",
          project_link: "https://cameronmcginley.com/sorting-visualizer/",
          gh_link: "https://github.com/cameronmcginley/sorting-visualizer/",
          description:
            "React JS application that visualizes various sorting algorithms, such as bubble sort, merge sort, radix sort, and bogo sort. Provides a set of configurations, including delay and array length, and even sound that matches the frequency of sorts!",
          image: "project-sortingvisualizer-gif.gif",
          tools: [
            {
              text: "JavaScript",
              link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            },
            {
              text: "React",
              link: "https://reactjs.org/",
            },
          ],
        }}
      />

      <ProjectCard
        cardData={{
          title: "Machine Learning Algorithm Tester",
          project_link: "",
          gh_link: "https://github.com/cameronmcginley/ml-algorithm-testing",
          description:
            "This project aims to output performance metrics and visualizations of various machine learning algorithms against the well-known iris dataset. Currently, it implements scikit-learn's LogisticRegression(), SVC(), and RandomForestClassifier(). The project allows for dynamic additions of new algorithms, by simpling defining them in a yaml file. Optimal hyperparameters are automatically found, and any model defined in the yaml will have its metrics and graph output.",
          image: "project-mltester-image.png",
          tools: [
            {
              text: "Python",
              link: "https://www.python.org/",
            },
            {
              text: "scikit-learn",
              link: "https://scikit-learn.org/",
            },
          ],
        }}
      />

      <ProjectCard
        cardData={{
          title: "Roblox Demo: Object Placement System",
          project_link:
            "https://www.roblox.com/games/7619626087/Placement-System-Demo",
          gh_link: "https://github.com/cameronmcginley/RBLX-PlacementSystem/",
          description:
            "Tried my hand at Roblox development and built an object placement system. This makes use of raycasting and efficient client-server communications for choosing objects and locations via the client, and building via the server. Uses optimal object design to allow for easy additions of new objects and how they interact with the world (e.g. custom hitboxes). Additionally, it saves placed objects per account. Project built in a Rojo environment to synchronize external codebase into Roblox Studio to allow for Git version control.",
          image: "project-rblxplacement-gif.gif",
          tools: [
            {
              text: "Lua",
              link: "https://www.lua.org/",
            },
            {
              text: "Roblox Studio",
              link: "https://www.roblox.com/create",
            },
            {
              text: "Rojo",
              link: "https://rojo.space/",
            },
          ],
        }}
      />
    </div>
  );
};

export default Projects;
