import { ProjectData, TestimonialData, Skills } from "../types";

export const projects: ProjectData[] = [
  {
    title: "Issue Tracker",
    description:
      "This project is a full-stack, production-grade issue-tracking application designed for managing and visualizing project issues efficiently. Key features include a comprehensive dashboard with charts, advanced filtering, sorting, and pagination options. The application supports secure user authentication, intuitive forms with validation, and full CRUD functionality, allowing seamless issue management. It connects to a MySQL database to ensure robust data handling and persistence. With a user-friendly interface and powerful backend, this issue tracker is tailored to streamline project workflows and enhance team collaboration.",
    image: "/issue-tracker.gif",
    code: "https://github.com/Slav666/issue-tracker",
    liveApp: "https://issue-tracker-henna-kappa.vercel.app/",
    technologies: [
      "/logoReact.png",
      "/typescript.svg",
      "/tailwindcss.svg",
      "/vercel.svg",
      "mysql-horizontal.svg",
      "prisma-2.svg",
      "radix-ui.svg",
    ],
  },

  {
    title: "Snake Game",
    description:
      "This is a re-creation of the classic Nokia game Snake II. I created this mostly as an exercise in functional programming and custom React hooks, but also for fun. The game includes all of the features of the original, such as: Wrapping when hitting walls or floor/ceiling, the snake's body growing each time he eats a gecko, the snake getting faster each time he eats a gecko, the snake's head turning to face the direction he is moving prevention of turning 180 degrees and a look-ahead hint of where the next gecko will appear",
    image: "/snake-game.gif",
    code: "https://github.com/Slav666/snake-game",
    liveApp: "https://snake-game-five-teal.vercel.app/",
    technologies: ["/logoReact.png", "/typescript.svg", "/sass-1.svg"],
  },
  {
    title: "Bookshelf App",
    description:
      "This app serves as a straightforward bookshelf application, allowing users to register, log in, search for books, add them to their reading list, and subsequently move them to the 'read books' shelf or remove them altogether. The primary goal of developing this app was to acquire proficiency in React Query and explore its integration within a new Astrosat project.",
    image: "/book-shelf-app.gif",
    code: "https://github.com/Slav666/Bookshelf-app",
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
