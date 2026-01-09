import React from "react";

// Import page components
import About from "../pages/About";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
import Contact from "../pages/Contact";

// Route configuration
export const routes = [
  {
    path: "/",
    element: About,
    name: "About",
    showInNav: true,
  },
  {
    path: "/about",
    element: About,
    name: "About",
    showInNav: false, // Hide duplicate from nav
  },
  {
    path: "/projects",
    element: Projects,
    name: "Projects",
    showInNav: true,
  },
  {
    path: "/skills",
    element: Skills,
    name: "Skills",
    showInNav: true,
  },
  {
    path: "/contact",
    element: Contact,
    name: "Contact",
    showInNav: true,
  },
];

// Helper function to get navigation routes
export const getNavRoutes = () => {
  return routes.filter((route) => route.showInNav);
};
