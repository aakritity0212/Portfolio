// Skills section Logo
import htmlLogo from './assets/html-logo.png';
import cssLogo from './assets/css-logo.png';
import reactjsLogo from './assets/reactjs-logo.png';
import reduxLogo from './assets/redux-logo.png';
import tailwindcssLogo from './assets/tailwindcss-logo.png';
import bootstrapLogo from './assets/bootstrap-logo.png';
import cppLogo from './assets/cpp.png';
import javaLogo from './assets/java.png';
import pythonLogo from './assets/python.png';
import javascriptLogo from './assets/javascript.png';
import gitLogo from './assets/git.png';
import githubLogo from './assets/github.png';
import vscodeLogo from './assets/vscode.png';
import postmanLogo from './assets/postman.png';

// Experience Section Logo
import enpassLogo from './assets/enpass_logo.png'

//Projects Section logo
import githubdetLogo from './assets/github_det.png';
import csprepLogo from './assets/cs_prep.png';
import movierecLogo from './assets/movie_rec.png';
import taskremLogo from './assets/task_rem.png';
import npmLogo from './assets/npm.png';
import webverLogo from './assets/web_dig.png';

// Skills Section
export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
    ],
  },
];

// Experience Section
export const experiences = [
    {
      id: 0,
      img: enpassLogo,
      role: "Software Engineer I",
      company: "Enpass Technologies",
      date: "September 2024 - Present",
      desc: "Worked on the Dashboard Page for the Enpass Admin Console using React, providing users with a comprehensive view of Business plan license summaries, total users, and provisioning status. Contributed on API Automation framework to automate the APIs used in Enpass Admin Console using Python and Postman.",
      skills: [
        "API Automation",
        "Python",
        "Postman",
        "React JS",
        "Web Development"
      ],
    },
    {
      id: 1,
      img: enpassLogo,
      role: "Software Engineer Trainee",
      company: "Enpass Technologies",
      date: "September 2023 - August 2024",
      desc: "Conducted manual testing of web and mobile applications, ensuring a smooth user experience through thorough test case execution. Collaborated with development teams to identify and resolve defects, contributing to the successful releases of the product.",
      skills: [
        "Agile methodologies",
        "SDLC",
        "JIRA",
        "Desktop Automation",
        "JAVA"
      ],
    },
  ];

  //Projects Section
  export const projects = [
    {
      id: 0,
      title: "GitHub Profile Detective",
      description:
        "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
      image: githubdetLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
      github: "https://github.com/codingmastr/GitHub-Profile-Search-App-Using-React-JS",
      webapp: "https://githubprofiledetective.netlify.app/",
    },
    {
      id: 1,
      title: "CS Prep",
      description:
        "A full-stack quiz-based platform designed for GATE/UGC NET students to practice previous year questions and create customized tests. The platform offers comprehensive profile stats and detailed results, helping students track and improve their preparation journey effectively.",
      image: csprepLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/codingmastr/CSPrep",
      webapp: "https://csprep.netlify.app/",
    },
    {
      id: 2,
      title: "Movie Recommendation App",
      description:
        "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
      image: movierecLogo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/codingmastr/Movie-Recommendation-App",
      webapp: "https://movie-recommendation-app-jet.vercel.app/",
    },
    {
      id: 3,
      title: "Email Validator NPM Package",
      description:
        "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
      image: npmLogo,
      tags: ["React JS", "Node.js", "NPM", "Validation"],
      github: "https://github.com/codingmastr/cmtk-email-validator",
      webapp: "https://www.npmjs.com/package/cmtk-email-validator",
    },
    {
      id: 4,
      title: "Task Reminder Chrome Extension Tool",
      description:
        "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
      image: taskremLogo,
      tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
      github: "https://github.com/codingmastr/Task-Reminder-Tool",
      webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
    },
    {
      id: 5,
      title: "Webverse Digital",
      description:
        "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
      image: webverLogo,
      tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
      github: "https://github.com/codingmastr/Webverse-Digital",
      webapp: "https://webversedigital.com/",
    },
  ];  