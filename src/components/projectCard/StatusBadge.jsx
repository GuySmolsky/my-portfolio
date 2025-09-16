import React from "react";
import { Chip, Box } from "@mui/material";

const StatusBadge = ({ status }) => {
  const getStatusColor = (status) => {
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

  const getStatusText = (status) => {
    switch (status) {
      case "completed":
        return "Live";
      case "in-progress":
        return "In Progress";
      case "coming-soon":
        return "Coming Soon";
      default:
        return "Live";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return "🚀";
      case "in-progress":
        return "⚡";
      case "coming-soon":
        return "🔮";
      default:
        return "🚀";
    }
  };

  return (
    <Box
      sx={{
        position: "absolute",
        top: 12,
        right: 12,
        zIndex: 2,
      }}
    >
      <Chip
        label={`${getStatusIcon(status)} ${getStatusText(status)}`}
        size="small"
        sx={{
          backgroundColor: getStatusColor(status),
          color: "#000",
          fontWeight: "bold",
          fontSize: "0.75rem",
          fontFamily: "'Orbitron', monospace",

          // Simple hover effect - just scale
          transition: "transform 0.2s ease",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
      />
    </Box>
  );
};

export default StatusBadge;
