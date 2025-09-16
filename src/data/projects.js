// src/data/projects.js

export const projectsData = {
  htmlcss: [
    {
      id: 1,
      title: "Project 1",
      image: "/images/html project images/projectOnePhoto.png",
      technologies: ["HTML", "CSS"],
      liveUrl:
        "https://guysmolsky.github.io/HtmlCssProjects/projects/project%201/",
      githubUrl: "https://github.com/GuySmolsky/HtmlCSSProjects",
      status: "completed",
    },
    {
      id: 2,
      title: "Project 2",
      image: "/images/html project images/projectTwoPhoto.png",
      technologies: ["HTML", "CSS"],
      liveUrl:
        "https://guysmolsky.github.io/HtmlCssProjects/projects/project%202/",
      githubUrl: "https://github.com/GuySmolsky/HtmlCSSProjects",
      status: "completed",
    },
    {
      id: 3,
      title: "Project 3",
      image: "/images/html project images/projectThreePhoto.png",
      technologies: ["HTML", "CSS"],
      liveUrl:
        "https://guysmolsky.github.io/HtmlCssProjects/projects/project%203/",
      githubUrl: "https://github.com/GuySmolsky/HtmlCSSProjects",
      status: "completed",
    },
    {
      id: 4,
      title: "Project 4",
      image: "/images/html project images/projectFourPhoto.png",
      technologies: ["HTML", "CSS"],
      liveUrl:
        "https://guysmolsky.github.io/HtmlCssProjects/projects/project%204/",
      githubUrl: "https://github.com/GuySmolsky/HtmlCSSProjects",
      status: "completed",
    },
    {
      id: 5,
      title: "Project 5",
      image: "/images/html project images/projectFivePhoto.png",
      technologies: ["HTML", "CSS"],
      liveUrl:
        "https://guysmolsky.github.io/HtmlCssProjects/projects/project%205/",
      githubUrl: "https://github.com/GuySmolsky/HtmlCSSProjects",
      status: "completed",
    },
    {
      id: 6,
      title: "Project 6",
      image: "/images/html project images/projectSixPhoto.png",
      technologies: ["HTML", "CSS"],
      liveUrl:
        "https://guysmolsky.github.io/HtmlCssProjects/projects/project%206/",
      githubUrl: "https://github.com/GuySmolsky/HtmlCSSProjects",
      status: "completed",
    },
  ],

  javascript: [
    {
      id: 7,
      title: "Tic Tac Toe Game",
      description:
        "An interactive Tic Tac Toe Game With An Option To Play Against The Computer.",
      image: "/images/javascript project images/JSprojectOnePhoto.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://guysmolsky.github.io/TicTacToe/",
      githubUrl: "https://github.com/GuySmolsky/TicTacToe",
      status: "completed",
    },
    {
      id: 8,
      title: "Sudoko Game",
      description: "A Really Nice And Neat Sudoko Game For All Levels.",
      image: "/images/javascript project images/JSprojectTwoPhoto.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://guysmolsky.github.io/Suduko/",
      githubUrl: "https://github.com/GuySmolsky/Suduko",
      status: "completed",
    },
    {
      id: 9,
      title: "Memory Game",
      description: "A dynamic Memory Game To Check Your Memory Skills",
      image: "/images/javascript project images/JSprojectThreePhoto.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://guysmolsky.github.io/Memory-Game/",
      githubUrl: "https://github.com/GuySmolsky/Memory-Game",
      status: "completed",
    },
    {
      id: 10,
      title: "Minesweeper",
      description: "Really Cool Mine Sweepr Game For All levels",
      image: "/images/javascript project images/JSprojectFourPhoto.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://guysmolsky.github.io/Minesweeper/",
      githubUrl: "https://github.com/GuySmolsky/Minesweeper",
      status: "completed",
    },
    {
      id: 11,
      title: "Chess Game",
      description: "A Classic Chess Game VS 2nd Player",
      image: "/images/javascript project images/JSprojectFivePhoto.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://guysmolsky.github.io/Chess/",
      githubUrl: "https://github.com/GuySmolsky/Chess",
      status: "completed",
    },
    {
      id: 12,
      title: "Interactive Calender",
      description: "Advanced Interactive Calender With Daily Task Management",
      image: "/images/javascript project images/JSprojectSixPhoto.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://guysmolsky.github.io/Calendar/",
      githubUrl: "https://github.com/GuySmolsky/Calendar",
      status: "completed",
    },
  ],

  react: [
    {
      id: 13,
      title: "BizzCards",
      description: "",
      image: "/images/react project images/BizCardsProjectImage.png",
      technologies: ["React", "MUI", "JavaScript", "Vite"],
      liveUrl: "",
      githubUrl: "",
      status: "completed",
    },
  ],

  nodejs: [
    {
      id: 14,
      title: "REST API Server",
      description:
        "Full-featured REST API with authentication, CRUD operations, and database integration.",
      image: "/images/projects/nodejs/api-server.jpg",
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "joi", "and more"],
      liveUrl: null, // Backend APIs don't have live URLs typically
      githubUrl: "https://github.com/GuySmolsky/NodeJSProject",
      status: "completed",
    },
  ],

  // Future projects
  python: [
    {
      id: 15,
      title: "Data Analysis Tool",
      description:
        "Python-based data analysis and visualization tool with pandas and matplotlib.",
      image: "/images/projects/python/data-analysis.jpg",
      technologies: ["Python", "Pandas", "Matplotlib", "NumPy"],
      liveUrl: null,
      githubUrl: null,
      status: "coming-soon",
    },
    {
      id: 16,
      title: "Web Scraper",
      description:
        "Automated web scraping tool for data collection and processing.",
      image: "/images/projects/python/web-scraper.jpg",
      technologies: ["Python", "BeautifulSoup", "Requests", "CSV"],
      liveUrl: null,
      githubUrl: null,
      status: "coming-soon",
    },
  ],

  fullstack: [
    {
      id: 17,
      title: "E-commerce Platform",
      description:
        "Full-stack e-commerce application with payment integration and admin dashboard.",
      image: "/images/projects/fullstack/ecommerce.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: null,
      githubUrl: null,
      status: "coming-soon",
    },
  ],
};

// Helper function to get all projects
export const getAllProjects = () => {
  return Object.values(projectsData).flat();
};

// Helper function to get projects by category
export const getProjectsByCategory = (category) => {
  return projectsData[category] || [];
};

// Helper function to get project counts
export const getProjectCounts = () => {
  return {
    htmlcss: projectsData.htmlcss.length,
    javascript: projectsData.javascript.length,
    react: projectsData.react.length,
    nodejs: projectsData.nodejs.length,
    python: projectsData.python.length,
    fullstack: projectsData.fullstack.length,
    total: getAllProjects().length,
    completed: getAllProjects().filter((p) => p.status === "completed").length,
    comingSoon: getAllProjects().filter((p) => p.status === "coming-soon")
      .length,
  };
};
