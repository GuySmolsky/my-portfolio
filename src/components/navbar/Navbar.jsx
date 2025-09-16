import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import { IconButton, Tooltip, Box } from "@mui/material";
import { LightMode, DarkMode } from "@mui/icons-material";
import { float } from "./animations";
import { useThemeToggle } from "../../context/ThemeContext";

// Import our custom components
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import MobileMenu from "./MobileMenu";

// Import routes for navigation
import { getNavRoutes } from "../../routes/routes";

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { isDark, toggleTheme } = useThemeToggle();

  // Get navigation routes from routes config
  const navRoutes = getNavRoutes();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handlePageClick = (route) => {
    handleCloseNavMenu();
    navigate(route.path);
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        background: scrolled
          ? isDark
            ? "rgba(15, 15, 35, 0.95)"
            : "rgba(255, 255, 255, 0.95)"
          : isDark
          ? "rgba(15, 15, 35, 0.9)"
          : "rgba(255, 255, 255, 0.9)",
        backdropFilter: "blur(20px)",
        borderBottom: isDark
          ? "1px solid rgba(0, 255, 255, 0.2)"
          : "1px solid rgba(0, 102, 204, 0.2)",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        zIndex: 1100,
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: isDark
            ? "linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.1), transparent)"
            : "linear-gradient(90deg, transparent, rgba(0, 102, 204, 0.1), transparent)",
          animation: `${float} 3s ease-in-out infinite`,
        },
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Desktop Logo */}
          <Logo isMobile={false} onClick={handleLogoClick} isDark={isDark} />

          {/* Mobile Menu */}
          <MobileMenu
            routes={navRoutes}
            anchorEl={anchorElNav}
            onOpen={handleOpenNavMenu}
            onClose={handleCloseNavMenu}
            onPageClick={handlePageClick}
            isDark={isDark}
          />

          {/* Mobile Logo */}
          <Logo isMobile={true} onClick={handleLogoClick} isDark={isDark} />

          {/* Desktop Navigation */}
          <NavMenu
            routes={navRoutes}
            currentPath={location.pathname}
            onPageClick={handlePageClick}
            isDark={isDark}
          />

          {/* Theme Toggle Button */}
          <Box sx={{ ml: 2 }}>
            <Tooltip
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              <IconButton
                onClick={toggleTheme}
                sx={{
                  color: isDark ? "#00ffff" : "#0066cc",
                  backgroundColor: isDark
                    ? "rgba(0, 255, 255, 0.1)"
                    : "rgba(0, 102, 204, 0.1)",
                  border: isDark
                    ? "1px solid rgba(0, 255, 255, 0.3)"
                    : "1px solid rgba(0, 102, 204, 0.3)",
                  width: 40,
                  height: 40,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: isDark
                      ? "rgba(0, 255, 255, 0.2)"
                      : "rgba(0, 102, 204, 0.2)",
                    transform: "scale(1.1) rotate(180deg)",
                    borderColor: isDark ? "#00ffff" : "#0066cc",
                    boxShadow: isDark
                      ? "0 0 15px rgba(0, 255, 255, 0.4)"
                      : "0 0 15px rgba(0, 102, 204, 0.4)",
                  },
                  "&:active": {
                    transform: "scale(0.95)",
                  },
                }}
              >
                {isDark ? <LightMode /> : <DarkMode />}
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
