import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { useThemeToggle } from "../context/ThemeContext";
import { routes } from "./routes";
import Navbar from "../components/navbar/Navbar";

const NotFound = () => {
  const { isDark } = useThemeToggle();

  return (
    <Box
      sx={{
        paddingTop: "120px",
        textAlign: "center",
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1
        style={{
          fontFamily: "'Orbitron', monospace",
          color: isDark ? "#ff0066" : "#dc3545",
          fontSize: "4rem",
          marginBottom: "1rem",
        }}
      >
        404
      </h1>
      <p
        style={{
          color: isDark ? "rgba(255, 255, 255, 0.8)" : "rgba(33, 37, 41, 0.8)",
          fontSize: "1.2rem",
          fontFamily: "'Inter', sans-serif",
          marginBottom: "2rem",
        }}
      >
        Page not found
      </p>
      <a
        href="#/"
        style={{
          color: isDark ? "#00ffff" : "#0066cc",
          textDecoration: "none",
          fontFamily: "'Orbitron', monospace",
          border: `1px solid ${isDark ? "#00ffff" : "#0066cc"}`,
          padding: "10px 20px",
          borderRadius: "25px",
        }}
      >
        Back to Home
      </a>
    </Box>
  );
};

const AppRouter = () => {
  const { isDark } = useThemeToggle();

  return (
    <HashRouter>
      <Box
        sx={{
          minHeight: "100vh",
          background: isDark
            ? "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)"
            : "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #dee2e6 100%)",
        }}
      >
        <Navbar />
        <Box component="main">
          <Routes>
            {routes.map((route) => {
              const Component = route.element;
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<Component />}
                />
              );
            })}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Box>
      </Box>
    </HashRouter>
  );
};

export default AppRouter;
