import { ProjectData, TestimonialData, Skills } from "../types";

export const projects: ProjectData[] = [
  {
    title: "Data Visualisation Dashboard",
    description:
      "This is an example of one more advanced feature which I and my team did at Astrosat. The original feature was not written in typescript but I rewrote all code using typescript. Users can add their own data for 'target' values, which are then either conditionally rendered as additional graphs in some charts or used to calculate percentages from the API data in others. All user interactions are tracked at all times and automatically persisted to the database (mocked here) whenever the user navigates away from the dashboard or closes the tab/browser.",
    image: "/victory-dashboard.gif",
    code: "https://github.com/Slav666/dashboard-app",
    technologies: [
      "/logoReact.png",
      "/victory-icon.svg",
      "/typescript.svg",
      "/msw-icon.svg",
      "/material-ui-1.svg",
    ],
  },
  {
    title: "Cars App",
    description:
      "In this project, my primary goal was to elevate my proficiency in Next.js by delving into the implementation of advanced features. The focal point of my efforts revolved around crafting a sophisticated search functionality, seamlessly integrating versatile filtering capabilities into the system. One of the notable achievements in this pursuit was the development of custom filter components, such as comboboxes and modals, to augment user interaction and provide a more intuitive and refined user experience.",
    image: "/car-app.gif",
    code: "https://github.com/Slav666/cars-app",
    liveApp: "https://cars-app-eight.vercel.app/",
    technologies: [
      "/tailwindcss.svg",
      "/typescript.svg",
      "/logoReact.png",
      "/next-icon.svg",
      "/headlessui.svg",
    ],
  },
  {
    title: "Chat GPT - clone",
    description:
      "This application incorporates a user account system seamlessly integrated with Auth0. Upon logging in, users encounter a user interface strikingly similar to the original ChatGPT, where they can access a list of previous chats and initiate new conversations. In the central part of the application, users can pose questions and receive responses from OpenAI, with all information stored using MongoDB.",
    image: "/chat-gpt.gif",
    code: "https://github.com/Slav666/Chat-gpt-clone",
    liveApp: "https://chat-gpt-clone-three-nu.vercel.app/",
    technologies: [
      "/next-icon.svg",
      "/mongodb.svg",
      "/auth0.svg",
      "/tailwindcss.svg",
      "/logoReact.png",
    ],
  },
  {
    title: "Bookshelf App",
    description:
      "This app serves as a straightforward bookshelf application, allowing users to register, log in, search for books, add them to their reading list, and subsequently move them to the 'read books' shelf or remove them altogether. The primary goal of developing this app was to acquire proficiency in React Query and explore its integration within a new Astrosat project.",
    image: "/book-shelf-app.gif",
    code: "https://github.com/Slav666/Bookshelf-app",
    liveApp: "",
    technologies: [
      "/msw-icon.svg",
      "/tailwindcss.svg",
      "/logoReact.png",
      "/form.svg",
      "/react-query.svg",
    ],
  },
  {
    title: "This Portfolio Website",
    description:
      "This portfolio website comprises six main sections: a navigation bar, details about myself, a list of projects I have previously worked on, a compilation of the technologies I have experience with, testimonials, and contact information. The primary objective of developing this application was to enhance my knowledge of Tailwind CSS.",
    image: "/portfolio.gif",
    code: "https://github.com/Slav666/my-portfolio-web/pull/1",
    technologies: ["/logoReact.png", "next-icon.svg", "/tailwindcss.svg"],
  },
];

export const testimonials: TestimonialData[] = [
  {
    id: 1,
    quote:
      "One of Slawomir's standout qualities is his dedication to continuous learning. He is always eager to stay updated with the latest industry trends and technologies, which reflects in the quality of his work. Slawomir is a strong team player, always willing to lend a hand and collaborate with others to achieve project goals.",
    image: "/Riki.png",
    name: "Riki",
    company: "Astrosat",
  },
  {
    id: 2,
    quote:
      "Slawomir is adaptable and quick to learn new technologies. He is not afraid to step outside his comfort zone to take on new challenges, which makes him an asset to any development team.",
    image: "/Steven.jpeg",
    name: "Steven",
    company: "Astrosat",
  },
];

export const skills: Skills[] = [
  { icon: "/logo-javascript.svg", tech: "JavaScript" },
  { icon: "/logoReact.png", tech: "React" },
  { icon: "/css3-icon.svg", tech: "CSS3" },
  { icon: "/material-ui-1.svg", tech: "Material UI" },
  { icon: "/typescript.svg", tech: "Typescript" },
  { icon: "/python-3.svg", tech: "Python" },
  { icon: "/django.svg", tech: "Django" },
  { icon: "/storybook-icon.svg", tech: "StoryBook" },
  { icon: "/jest-js-icon.svg", tech: "Unit Test" },
  { icon: "/cucumber-icon.svg", tech: "End-to-End Tests" },
  { icon: "/victory-icon.svg", tech: "Victory" },
  { icon: "/git-icon.svg", tech: "Git" },
  { icon: "/github-icon.svg", tech: "Github" },
  { icon: "/redux-logo.svg", tech: "Redux" },
  { icon: "/msw-icon.svg", tech: "Mock Service Worker" },
  { icon: "/react-testing-library-icon.svg", tech: "React Testing Library" },
  { icon: "/html-icon.svg", tech: "HTML5" },
  { icon: "/netlify.svg", tech: "Netlify" },
  { icon: "/gatsby-icon.svg", tech: "Gatsby" },
  { icon: "/deck-gl-logo.png", tech: "DeckGL" },
];

export const skillsCodeClan: Skills[] = [
  { icon: "/java-icon.svg", tech: "Java" },
  { icon: "/mocha-icon.svg", tech: "Mocha" },
  { icon: "/nodejs-icon.svg", tech: "Node JS" },
  { icon: "/sinatra-icon.svg", tech: "Sinatra" },
  { icon: "/spring-icon.svg", tech: "Spring" },
  { icon: "/sql-database-icon.svg", tech: "SQL - Data Base" },
];

export const infoData: string =
  "Hello, I'm Slawomir, a front-end developer with a specialization in GIS, currently based in the vibrant city of Musselburgh, Scotland. With 4 years of experience in software development, I've dedicated the last 3.5 years to contributing my skills at Astrosat, an aerospace firm. At Astrosat, our focus lies in the visualization of satellite data within mapping applications and the creation of tailor-made tools to facilitate seamless interactions. As you navigate through this page, you'll find succinct descriptions of projects that not only demonstrate my expertise but also provide direct links to standalone deploys and repositories for each. This not only showcases my practical knowledge but also emphasizes my hands-on experience.";
