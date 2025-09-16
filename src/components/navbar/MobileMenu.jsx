import React from "react";
import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const MobileMenu = ({
  routes,
  anchorEl,
  onOpen,
  onClose,
  onPageClick,
  isDark = true,
}) => {
  const handlePageClick = (route) => {
    onPageClick(route);
    onClose();
  };

  // Theme-aware colors
  const getColors = () => ({
    primary: isDark ? "#00ffff" : "#0066cc",
    text: isDark ? "#fff" : "#212529",
    menuBg: isDark ? "rgba(15, 15, 35, 0.95)" : "rgba(255, 255, 255, 0.95)",
    border: isDark ? "rgba(0, 255, 255, 0.2)" : "rgba(0, 102, 204, 0.2)",
    hoverBg: isDark ? "rgba(0, 255, 255, 0.1)" : "rgba(0, 102, 204, 0.1)",
    shadow: isDark ? "rgba(0, 255, 255, 0.2)" : "rgba(0, 102, 204, 0.2)",
    gradient: isDark
      ? "linear-gradient(90deg, rgba(0, 255, 255, 0.1), rgba(255, 0, 255, 0.1))"
      : "linear-gradient(90deg, rgba(0, 102, 204, 0.1), rgba(111, 66, 193, 0.1))",
  });

  const colors = getColors();

  return (
    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
      <IconButton
        size="large"
        onClick={onOpen}
        sx={{
          color: colors.primary,
          "&:hover": {
            backgroundColor: colors.hoverBg,
            transform: "scale(1.1)",
            transition: "all 0.3s ease",
          },
        }}
      >
        <MenuIcon />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={onClose}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiPaper-root": {
            background: colors.menuBg,
            backdropFilter: "blur(20px)",
            border: `1px solid ${colors.border}`,
            borderRadius: "10px",
            mt: 1,
            minWidth: "200px",
            boxShadow: `0 10px 30px ${colors.shadow}`,
          },
        }}
      >
        {routes.map((route) => (
          <MenuItem
            key={route.path}
            onClick={() => handlePageClick(route)}
            sx={{
              color: colors.text,
              fontFamily: "'Orbitron', sans-serif",
              fontWeight: 500,
              padding: "12px 20px",
              transition: "all 0.3s ease",
              position: "relative",
              "&:hover": {
                backgroundColor: colors.hoverBg,
                color: colors.primary,
                transform: "translateX(5px)",
              },
              "&::before": {
                content: '""',
                position: "absolute",
                left: 0,
                top: 0,
                width: "0%",
                height: "100%",
                background: colors.gradient,
                transition: "width 0.3s ease",
              },
              "&:hover::before": {
                width: "100%",
              },
            }}
          >
            <Typography
              sx={{
                textAlign: "center",
                position: "relative",
                zIndex: 1,
              }}
            >
              {route.name}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default MobileMenu;
