import React from "react";
import { Box, Typography } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import { glitch, pulse } from "./animations";

const Logo = ({ isMobile = false, onClick, isDark = true }) => {
  // Theme-aware colors
  const colors = {
    primary: isDark ? "#00ffff" : "#0066cc",
    secondary: isDark ? "#ff00ff" : "#6f42c1",
    gradient: isDark
      ? "linear-gradient(45deg, #00ffff, #ff00ff, #00ffff)"
      : "linear-gradient(45deg, #0066cc, #6f42c1, #0066cc)",
  };

  const logoStyles = {
    display: isMobile ? { xs: "flex", md: "none" } : { xs: "none", md: "flex" },
    alignItems: "center",
    cursor: "pointer",
    ...(isMobile && { flexGrow: 1 }),
  };

  const iconStyles = {
    mr: 1,
    fontSize: isMobile ? 28 : 32,
    color: colors.primary,
    animation: `${pulse} 2s infinite`,
    "&:hover": {
      animation: `${glitch} 0.3s ease-in-out`,
      color: colors.secondary,
    },
  };

  const textStyles = {
    fontFamily: "'Orbitron', monospace",
    fontWeight: 700,
    letterSpacing: ".05rem",
    color: "transparent",
    background: colors.gradient,
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    textDecoration: "none",
    fontSize: isMobile ? "1.3rem" : "1.5rem",
    position: "relative",
    transition: "transform 0.3s ease",
    ml: 1.5,

    "&:hover": {
      transform: "scale(1.05)",
    },
  };

  return (
    <Box sx={logoStyles} onClick={onClick}>
      <CodeIcon sx={iconStyles} />
      <Typography
        variant={isMobile ? "h5" : "h6"}
        noWrap
        component="div"
        sx={textStyles}
      >
        Guy Smolsky
      </Typography>
    </Box>
  );
};

export default Logo;
