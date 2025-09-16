import React from "react";
import { CardContent, Typography, Chip, Box } from "@mui/material";
import { glow } from "./animations";

const ProjectContent = ({ title, description, technologies = [] }) => {
  const getTechColor = (tech) => {
    const techColors = {
      HTML: {
        bg: "rgba(227, 76, 38, 0.2)",
        border: "#e34c26",
        text: "#e34c26",
      },
      CSS: {
        bg: "rgba(21, 114, 182, 0.2)",
        border: "#1572b6",
        text: "#1572b6",
      },
      JavaScript: {
        bg: "rgba(240, 219, 79, 0.2)",
        border: "#f0db4f",
        text: "#f0db4f",
      },
      React: {
        bg: "rgba(97, 218, 251, 0.2)",
        border: "#61dafb",
        text: "#61dafb",
      },
      "Node.js": {
        bg: "rgba(104, 160, 99, 0.2)",
        border: "#68a063",
        text: "#68a063",
      },
      Python: {
        bg: "rgba(255, 212, 59, 0.2)",
        border: "#ffd43b",
        text: "#ffd43b",
      },
      MongoDB: {
        bg: "rgba(71, 162, 72, 0.2)",
        border: "#47a248",
        text: "#47a248",
      },
      MySQL: {
        bg: "rgba(0, 117, 143, 0.2)",
        border: "#00758f",
        text: "#00758f",
      },
    };

    return (
      techColors[tech] || {
        bg: "rgba(0, 255, 255, 0.1)",
        border: "#00ffff",
        text: "#00ffff",
      }
    );
  };

  return (
    <CardContent
      sx={{
        flexGrow: 1,
        color: "#fff",
        position: "relative",
        zIndex: 2,
        padding: "16px 20px",
      }}
    >
      {/* Project Title */}
      <Typography
        gutterBottom
        variant="h6"
        component="div"
        sx={{
          fontFamily: "'Orbitron', monospace",
          fontWeight: 600,
          background: "linear-gradient(45deg, #00ffff, #ffffff)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent",
          marginBottom: 1.5,
          fontSize: "1.1rem",
          lineHeight: 1.3,
          transition: "all 0.3s ease",
          "&:hover": {
            background: "linear-gradient(45deg, #00ffff, #ff00ff)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            transform: "translateX(2px)",
          },
        }}
      >
        {title}
      </Typography>

      {/* Project Description */}
      <Typography
        variant="body2"
        sx={{
          color: "rgba(255, 255, 255, 0.85)",
          lineHeight: 1.6,
          marginBottom: 2,
          height: "3.2em",
          overflow: "hidden",
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          fontSize: "0.9rem",
          fontFamily: "'Inter', sans-serif",
          letterSpacing: "0.2px",
        }}
      >
        {description}
      </Typography>

      {/* Technology Tags */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 0.8,
          mb: 1,
          minHeight: "32px",
          alignItems: "flex-start",
        }}
      >
        {/* Main Technology Tags */}
        {technologies.slice(0, 3).map((tech, index) => {
          const colors = getTechColor(tech);
          return (
            <Chip
              key={tech}
              label={tech}
              size="small"
              sx={{
                backgroundColor: colors.bg,
                color: colors.text,
                border: `1px solid ${colors.border}40`,
                fontSize: "0.75rem",
                height: "26px",
                fontWeight: 500,
                fontFamily: "'Inter', sans-serif",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: colors.bg.replace("0.2", "0.3"),
                  borderColor: colors.border,
                  transform: "translateY(-1px)",
                  boxShadow: `0 4px 8px ${colors.border}30`,
                  animation: `${glow} 1s ease-in-out`,
                },
                // Staggered entrance animation
                animationDelay: `${index * 0.1}s`,
              }}
            />
          );
        })}

        {/* More Technologies Indicator */}
        {technologies.length > 3 && (
          <Chip
            label={`+${technologies.length - 3} more`}
            size="small"
            sx={{
              backgroundColor: "rgba(255, 0, 255, 0.15)",
              color: "#ff00ff",
              border: "1px solid rgba(255, 0, 255, 0.4)",
              fontSize: "0.7rem",
              height: "26px",
              fontWeight: 500,
              fontFamily: "'Inter', sans-serif",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "rgba(255, 0, 255, 0.25)",
                borderColor: "#ff00ff",
                transform: "scale(1.05)",
                cursor: "help",
              },
              // Tooltip effect on hover
              position: "relative",
              "&::after": {
                content: `"${technologies.slice(3).join(", ")}"`,
                position: "absolute",
                bottom: "100%",
                left: "50%",
                transform: "translateX(-50%)",
                backgroundColor: "rgba(0, 0, 0, 0.9)",
                color: "#fff",
                padding: "4px 8px",
                borderRadius: "4px",
                fontSize: "0.7rem",
                opacity: 0,
                pointerEvents: "none",
                transition: "opacity 0.3s ease",
                zIndex: 10,
                maxWidth: "200px",
                wordBreak: "break-word",
                // Remove the whiteSpace property or change it to:
                // whiteSpace: "pre-wrap",
              },
              "&:hover::after": {
                opacity: 1,
              },
            }}
          />
        )}
      </Box>

      {/* Difficulty/Complexity Indicator */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          mt: 1,
        }}
      >
        <Typography
          variant="caption"
          sx={{
            color: "rgba(255, 255, 255, 0.6)",
            fontSize: "0.7rem",
            fontFamily: "'Orbitron', monospace",
          }}
        >
          Complexity:
        </Typography>
        <Box sx={{ display: "flex", gap: 0.5 }}>
          {[1, 2, 3].map((level) => (
            <Box
              key={level}
              sx={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                backgroundColor:
                  level <= technologies.length / 2
                    ? "#00ffff"
                    : "rgba(255, 255, 255, 0.2)",
                transition: "all 0.3s ease",
                boxShadow:
                  level <= technologies.length / 2 ? "0 0 4px #00ffff" : "none",
              }}
            />
          ))}
        </Box>
      </Box>
    </CardContent>
  );
};

export default ProjectContent;
