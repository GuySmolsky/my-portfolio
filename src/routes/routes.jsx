import React from "react";
import { useThemeToggle } from "../context/ThemeContext";

// Import page components
import About from "../pages/About";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
import Contact from "../pages/Contact";

// Theme-aware Home component
const Home = () => {
  const { isDark } = useThemeToggle();

  const colors = {
    primary: isDark ? "#00ffff" : "#0066cc",
    secondary: isDark ? "#ff00ff" : "#6f42c1",
    text: isDark ? "#fff" : "#212529",
    textSecondary: isDark
      ? "rgba(255, 255, 255, 0.8)"
      : "rgba(33, 37, 41, 0.8)",
    gradient: isDark
      ? "linear-gradient(45deg, #00ffff, #ff00ff)"
      : "linear-gradient(45deg, #0066cc, #6f42c1)",
  };

  return (
    <div
      style={{
        paddingTop: "120px",
        textAlign: "center",
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1
        style={{
          fontFamily: "'Orbitron', monospace",
          fontSize: "3rem",
          marginBottom: "1rem",
          // Use solid color as base, then apply gradient
          color: colors.primary,
          background: colors.gradient,
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          transition: "all 0.3s ease",
          // Ensure text is always visible as fallback
          position: "relative",
        }}
      >
        Welcome to My Portfolio
      </h1>
      <p
        style={{
          color: colors.textSecondary,
          fontSize: "1.2rem",
          fontFamily: "'Inter', sans-serif",
          transition: "color 0.3s ease",
        }}
      >
        Explore my projects and skills
      </p>
    </div>
  );
};

// Route configuration
export const routes = [
  {
    path: "/",
    element: Home,
    name: "Home",
    showInNav: false, // Don't show in navigation
  },
  {
    path: "/about",
    element: About,
    name: "About",
    showInNav: true,
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
