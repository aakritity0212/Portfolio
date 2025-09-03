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