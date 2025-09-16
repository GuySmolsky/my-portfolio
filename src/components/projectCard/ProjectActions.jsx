import React from "react";
import { CardActions, IconButton, Box, Tooltip } from "@mui/material";
import { GitHub as GitHubIcon } from "@mui/icons-material";

const ProjectActions = ({
  status,
  githubUrl,
  onGithubClick,
  isCardClickable,
}) => {
  return (
    <CardActions
      sx={{
        padding: "12px 20px 16px",
        position: "relative",
        zIndex: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "60px",
      }}
    >
      {/* GitHub Button - Centered */}
      <Tooltip
        title={githubUrl ? "View Source Code" : "Code not available"}
        arrow
      >
        <span>
          <IconButton
            size="large"
            onClick={onGithubClick}
            disabled={!githubUrl}
            sx={{
              color: githubUrl ? "#fff" : "rgba(255, 255, 255, 0.3)",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              transition: "all 0.3s ease",

              "&:hover:not(:disabled)": {
                color: "#00ffff",
                backgroundColor: "rgba(0, 255, 255, 0.1)",
                borderColor: "#00ffff",
                transform: "scale(1.15) rotate(5deg)",
                boxShadow: "0 8px 20px rgba(0, 255, 255, 0.4)",
              },

              "&:active:not(:disabled)": {
                transform: "scale(1.05)",
              },

              "&:disabled": {
                color: "rgba(255, 255, 255, 0.2)",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                borderColor: "rgba(255, 255, 255, 0.1)",
                cursor: "not-allowed",
              },
            }}
          >
            <GitHubIcon fontSize="medium" />
          </IconButton>
        </span>
      </Tooltip>

      {/* Card Click Hint - Only for clickable cards */}
      {isCardClickable && (
        <Box
          sx={{
            position: "absolute",
            bottom: "8px",
            left: "50%",
            transform: "translateX(-50%)",
            opacity: 0.6,
            pointerEvents: "none",
          }}
        >
          <Box
            sx={{
              fontSize: "0.65rem",
              color: "rgba(255, 255, 255, 0.5)",
              fontFamily: "'Orbitron', monospace",
              textAlign: "center",
              whiteSpace: "nowrap",
            }}
          ></Box>
        </Box>
      )}

      {/* Status Indicator Line */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "2px",
          background:
            status === "completed"
              ? "linear-gradient(90deg, #00ffff, #00ffff80, #00ffff)"
              : status === "in-progress"
              ? "linear-gradient(90deg, #ff9800, #ffc107, #ff9800)"
              : "linear-gradient(90deg, #9c27b0, #e91e63, #9c27b0)",
          opacity: 0.6,
        }}
      />
    </CardActions>
  );
};

export default ProjectActions;
