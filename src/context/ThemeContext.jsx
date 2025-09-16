import React, { createContext, useContext, useState, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Create the theme context
const ThemeToggleContext = createContext();

// Hook to use the theme context
export const useThemeToggle = () => {
  const context = useContext(ThemeToggleContext);
  if (!context) {
    throw new Error("useThemeToggle must be used within a ThemeToggleProvider");
  }
  return context;
};

// Theme configuration
const createAppTheme = (mode) => {
  const isDark = mode === "dark";

  return createTheme({
    palette: {
      mode,
      background: {
        default: isDark
          ? "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)"
          : "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #dee2e6 100%)",
        paper: isDark ? "rgba(15, 15, 35, 0.95)" : "rgba(255, 255, 255, 0.95)",
      },
      primary: {
        main: isDark ? "#00ffff" : "#0066cc",
      },
      secondary: {
        main: isDark ? "#ff00ff" : "#6f42c1",
      },
      text: {
        primary: isDark ? "#ffffff" : "#212529",
        secondary: isDark
          ? "rgba(255, 255, 255, 0.8)"
          : "rgba(33, 37, 41, 0.8)",
      },
      // Custom colors for your portfolio
      custom: {
        neon: {
          cyan: isDark ? "#00ffff" : "#0066cc",
          magenta: isDark ? "#ff00ff" : "#6f42c1",
          green: isDark ? "#00ff00" : "#28a745",
          orange: isDark ? "#ff9800" : "#fd7e14",
          purple: isDark ? "#9c27b0" : "#6f42c1",
        },
        navbar: {
          background: isDark
            ? "rgba(15, 15, 35, 0.95)"
            : "rgba(255, 255, 255, 0.95)",
          border: isDark ? "rgba(0, 255, 255, 0.2)" : "rgba(0, 102, 204, 0.2)",
        },
        card: {
          background: isDark
            ? "rgba(15, 15, 35, 0.95)"
            : "rgba(255, 255, 255, 0.95)",
          border: isDark ? "rgba(0, 255, 255, 0.3)" : "rgba(0, 102, 204, 0.3)",
        },
      },
    },
    typography: {
      fontFamily: "'Inter', sans-serif",
      h1: {
        fontFamily: "'Orbitron', monospace",
      },
      h2: {
        fontFamily: "'Orbitron', monospace",
      },
      h3: {
        fontFamily: "'Orbitron', monospace",
      },
      h4: {
        fontFamily: "'Orbitron', monospace",
      },
      h5: {
        fontFamily: "'Orbitron', monospace",
      },
      h6: {
        fontFamily: "'Orbitron', monospace",
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            background: isDark
              ? "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)"
              : "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #dee2e6 100%)",
            minHeight: "100vh",
          },
        },
      },
    },
  });
};

// Theme Provider Component
export const CustomThemeProvider = ({ children }) => {
  // Initialize theme from localStorage or default to dark
  const [themeMode, setThemeMode] = useState(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    return savedTheme || "dark";
  });

  // Update localStorage when theme changes
  useEffect(() => {
    localStorage.setItem("portfolio-theme", themeMode);
  }, [themeMode]);

  // Toggle function
  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  };

  // Create the theme
  const theme = createAppTheme(themeMode);

  const value = {
    themeMode,
    toggleTheme,
    isDark: themeMode === "dark",
    theme,
  };

  return (
    <ThemeToggleContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeToggleContext.Provider>
  );
};
