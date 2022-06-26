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
              text: "Javascript",
              link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            },
            {
              text: "React",
              link: "https://reactjs.org/",
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
            "Interpreter for the brainf**k programming language, simply constisting of instructions. This interpreter implements some simple optimizations, such as condensing repetetitve instructions, and some more complex optimizations including some peephole optimization with pattern matching for common brainf**k algorithms, such as addition or subtraction.",
          image: "project-brainfk-image.png",
          tools: [
            {
              text: "C++",
              link: "https://m.cplusplus.com/",
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
            "React JS application that visualizes various sorting algorithms, such as bubble sort, merge sort, and radix sort. Provides a set of configurations, including delay and array length, and even sound that matches the frequency of sorts!",
          image: "project-sortingvisualizer-gif.gif",
          tools: [
            {
              text: "Javascript",
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
          title: "Roblox Object Placement System",
          project_link:
            "https://www.roblox.com/games/7619626087/Placement-System-Demo",
          gh_link: "https://github.com/cameronmcginley/RBLX-PlacementSystem/",
          description:
            "Tried my hand at Roblox development and built an object placement system. This makes use of raycasting and efficient client-server communications for choosing object and location via client, and building via server. Uses optimal object design to allow for easy additions of new objects and how they interact with the world (e.g. custom hitboxes). Additionally, it saves placed objects per account. Project built in a Rojo enviroment to synchrozine external codebase into Roblox Studio to allow for Git version control.",
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

      <ProjectCard
        cardData={{
          title: "This Website!",
          project_link: "https://cameronmcginley.com/",
          gh_link:
            "https://github.com/cameronmcginley/cameronmcginley.github.io/",
          description:
            "A personal portfolio website, mainly designed to showcase a quick 'about me' section along with various projects. Built using React and Javascript.",
          image: "project-personalwebsite-image.png",
          is_last: true,
          tools: [
            {
              text: "Javascript",
              link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            },
            {
              text: "React",
              link: "https://reactjs.org/",
            },
            {
              text: "Node.js",
              link: "https://nodejs.org/en/",
            },
          ],
        }}
      />

      {/* <ProjectCard
        cardData={{
          title: "Movie Recommender",
          project_link: "",
          gh_link: "https://github.com/cameronmcginley/MovieRecommender/",
          description:
            "Data science course project to build a recommender system without AI. Cleans a 70k+ IMDb movie dataset and standardizes all fields. Recommender collects a user's n favorite movies, then uses a custom algorithm to find their n best movie recommendations. Allows a user to modify weights, e.g. a user can place more or less emphasis on genre or several other fields as they wish. A random class survey showed successful recommendations at x% using default weights, where a successful recommendation is rated as good by the user, or if the user has seen it already (must be a good recommendation if they were willing to watch it!). Pandas allows for vectorization and quick runtimes.",
          image: "project-movierecommender-image2.png",
          tools: [
            {
              text: "Python",
              link: "https://www.python.org/",
            },
            {
              text: "Pandas",
              link: "https://pandas.pydata.org/",
            },
            {
              text: "NumPy",
              link: "https://numpy.org/",
            },
          ],
        }}
      /> */}
    </div>
  );
};

export default Projects;
