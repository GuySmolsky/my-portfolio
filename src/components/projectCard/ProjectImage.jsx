import React from "react";
import { CardMedia, Box } from "@mui/material";
import {
  Visibility as VisibilityIcon,
  Lock as LockIcon,
} from "@mui/icons-material";

const ProjectImage = ({
  title,
  image,
  status,
  liveUrl,
  onClick,
  isHovered,
}) => {
  const handleImageClick = () => {
    if (onClick && status === "completed" && liveUrl) {
      onClick();
    }
  };

  const getOverlayIcon = () => {
    switch (status) {
      case "completed":
        return <VisibilityIcon sx={{ fontSize: 40, color: "#00ffff" }} />;
      case "in-progress":
        return <VisibilityIcon sx={{ fontSize: 40, color: "#ff9800" }} />;
      case "coming-soon":
        return <LockIcon sx={{ fontSize: 40, color: "#9c27b0" }} />;
      default:
        return <VisibilityIcon sx={{ fontSize: 40, color: "#00ffff" }} />;
    }
  };

  const getOverlayText = () => {
    switch (status) {
      case "completed":
        return "View Live Demo";
      case "in-progress":
        return "Preview Available";
      case "coming-soon":
        return "Coming Soon";
      default:
        return "View Demo";
    }
  };

  const getOverlayColor = () => {
    switch (status) {
      case "completed":
        return "rgba(0, 0, 0, 0.8)";
      case "in-progress":
        return "rgba(255, 152, 0, 0.2)";
      case "coming-soon":
        return "rgba(156, 39, 176, 0.3)";
      default:
        return "rgba(0, 0, 0, 0.8)";
    }
  };

  return (
    <Box sx={{ position: "relative", overflow: "hidden" }}>
      {/* Project Image */}
      <CardMedia
        component="img"
        height="200"
        image={image || "/api/placeholder/400/200"}
        alt={title}
        onClick={handleImageClick}
        sx={{
          cursor: status === "completed" && liveUrl ? "pointer" : "default",
          filter:
            status === "coming-soon"
              ? "grayscale(60%) brightness(0.7)"
              : "none",

          // Simple scale on hover
          transition: "transform 0.3s ease",
          "&:hover": {
            transform:
              status === "completed" && liveUrl ? "scale(1.05)" : "scale(1.02)",
          },
        }}
      />

      {/* Simplified Hover Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: getOverlayColor(),
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",

          // Simple opacity transition
          opacity: isHovered ? 1 : 0,
          transition: "opacity 0.3s ease",
          zIndex: 1,
        }}
      >
        {/* Icon */}
        {getOverlayIcon()}

        {/* Overlay Text */}
        <Box
          sx={{
            color: "#fff",
            fontFamily: "'Orbitron', monospace",
            fontSize: "0.9rem",
            fontWeight: 600,
            textAlign: "center",
            mt: 1,
          }}
        >
          {getOverlayText()}
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectImage;
