import React from "react";
import { Box, Button } from "@mui/material";

const NavMenu = ({ routes, currentPath, onPageClick, isDark = true }) => {
  // Theme-aware colors
  const getColors = () => ({
    primary: isDark ? "#00ffff" : "#0066cc",
    text: isDark ? "white" : "#212529",
    secondary: isDark ? "#ff00ff" : "#6f42c1",
    hoverBg: isDark ? "rgba(0, 255, 255, 0.1)" : "rgba(0, 102, 204, 0.1)",
    activeBg: isDark ? "rgba(0, 255, 255, 0.1)" : "rgba(0, 102, 204, 0.1)",
    glowColor: isDark ? "rgba(0, 255, 255, 0.3)" : "rgba(0, 102, 204, 0.3)",
    shimmer: isDark
      ? "linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.2), transparent)"
      : "linear-gradient(90deg, transparent, rgba(0, 102, 204, 0.2), transparent)",
    gradient: isDark
      ? "linear-gradient(90deg, #00ffff, #ff00ff)"
      : "linear-gradient(90deg, #0066cc, #6f42c1)",
  });

  const colors = getColors();

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: "none", md: "flex" },
        justifyContent: "center",
      }}
    >
      {routes.map((route, index) => (
        <Button
          key={route.path}
          onClick={() => onPageClick(route)}
          sx={{
            mx: 1,
            my: 2,
            color: currentPath === route.path ? colors.primary : colors.text,
            fontFamily: "'Orbitron', sans-serif",
            fontWeight: 500,
            fontSize: "0.95rem",
            position: "relative",
            overflow: "hidden",
            borderRadius: "25px",
            padding: "8px 20px",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            backgroundColor:
              currentPath === route.path ? colors.activeBg : "transparent",

            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: "-100%",
              width: "100%",
              height: "100%",
              background: colors.shimmer,
              transition: "left 0.5s ease",
            },
            "&:hover": {
              color: colors.primary,
              backgroundColor: colors.hoverBg,
              transform: "translateY(-2px)",
              boxShadow: `0 10px 20px ${colors.glowColor}`,
              "&::before": {
                left: "100%",
              },
            },
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: 0,
              left: "50%",
              width: currentPath === route.path ? "80%" : "0%",
              height: "2px",
              background: colors.gradient,
              transition: "all 0.3s ease",
              transform: "translateX(-50%)",
            },
            "&:hover::after": {
              width: "80%",
            },
            animationDelay: `${index * 0.1}s`,
          }}
        >
          {route.name}
        </Button>
      ))}
    </Box>
  );
};

export default NavMenu;
