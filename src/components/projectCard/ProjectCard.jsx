import React, { useState } from "react";
import { Card } from "@mui/material";

// Import our custom components
import StatusBadge from "./StatusBadge";
import ProjectImage from "./ProjectImage";
import ProjectContent from "./ProjectContent";
import ProjectActions from "./ProjectActions";

const ProjectCard = ({
  project = {
    id: 1,
    title: "Sample Project",
    description: "This is a sample project description to test the component.",
    image: "/api/placeholder/400/200",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    status: "completed",
  },
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const {
    id,
    title,
    description,
    image,
    technologies = [],
    liveUrl,
    githubUrl,
    status = "completed", // 'completed', 'in-progress', 'coming-soon'
  } = project;

  const handleCardClick = () => {
    if (liveUrl && (status === "completed" || status === "in-progress")) {
      window.open(liveUrl, "_blank", "noopener,noreferrer");
    }
  };

  const handleGithubClick = (e) => {
    e.stopPropagation(); // Prevent card click when clicking GitHub button
    if (githubUrl) {
      window.open(githubUrl, "_blank", "noopener,noreferrer");
    }
  };

  const getCardBackground = () => {
    switch (status) {
      case "completed":
        return "rgba(15, 15, 35, 0.95)";
      case "in-progress":
        return "rgba(35, 25, 15, 0.95)";
      case "coming-soon":
        return "rgba(25, 15, 35, 0.95)";
      default:
        return "rgba(15, 15, 35, 0.95)";
    }
  };

  const getBorderColor = () => {
    switch (status) {
      case "completed":
        return "rgba(0, 255, 255, 0.3)";
      case "in-progress":
        return "rgba(255, 152, 0, 0.3)";
      case "coming-soon":
        return "rgba(156, 39, 176, 0.3)";
      default:
        return "rgba(0, 255, 255, 0.3)";
    }
  };

  const getHoverBorderColor = () => {
    switch (status) {
      case "completed":
        return "#00ffff";
      case "in-progress":
        return "#ff9800";
      case "coming-soon":
        return "#9c27b0";
      default:
        return "#00ffff";
    }
  };

  const getGlowColor = () => {
    switch (status) {
      case "completed":
        return "rgba(0, 255, 255, 0.2)";
      case "in-progress":
        return "rgba(255, 152, 0, 0.2)";
      case "coming-soon":
        return "rgba(156, 39, 176, 0.2)";
      default:
        return "rgba(0, 255, 255, 0.2)";
    }
  };

  const isClickable =
    liveUrl && (status === "completed" || status === "in-progress");

  return (
    <Card
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
      sx={{
        maxWidth: 400,
        minWidth: 320,
        height: 480,
        display: "flex",
        flexDirection: "column",
        background: getCardBackground(),
        border: `1px solid ${getBorderColor()}`,
        borderRadius: "20px",
        position: "relative",
        overflow: "hidden",
        cursor: isClickable ? "pointer" : "default",

        // Enhanced hover animation for clickable cards
        transition: "all 0.3s ease",
        "&:hover": {
          transform: isClickable
            ? "translateY(-12px) scale(1.02)"
            : "translateY(-8px)",
          boxShadow: `0 25px 50px ${getGlowColor()}`,
          borderColor: getHoverBorderColor(),
        },

        // Reduced opacity for coming soon
        ...(status === "coming-soon" && {
          opacity: 0.8,
        }),

        // Responsive design
        "@media (max-width: 600px)": {
          maxWidth: "100%",
          minWidth: 280,
          height: 460,
        },
      }}
    >
      {/* Status Badge */}
      <StatusBadge status={status} />

      {/* Project Image */}
      <ProjectImage
        title={title}
        image={image}
        status={status}
        liveUrl={liveUrl}
        onClick={handleCardClick}
        isHovered={isHovered}
      />

      {/* Project Content */}
      <ProjectContent
        title={title}
        description={description}
        technologies={technologies}
      />

      {/* Project Actions - Updated */}
      <ProjectActions
        status={status}
        liveUrl={liveUrl}
        githubUrl={githubUrl}
        onGithubClick={handleGithubClick}
        isCardClickable={isClickable}
      />

      {/* Click Indicator for Clickable Cards */}
      {isClickable && (
        <div
          style={{
            position: "absolute",
            bottom: "10px",
            left: "50%",
            transform: "translateX(-50%)",
            opacity: isHovered ? 1 : 0,
            transition: "opacity 0.3s ease",
            color: getHoverBorderColor(),
            fontSize: "0.7rem",
            fontFamily: "'Orbitron', monospace",
            pointerEvents: "none",
            zIndex: 10,
          }}
        >
          Source Code
        </div>
      )}
    </Card>
  );
};

export default ProjectCard;
