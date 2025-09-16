import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  Chip,
  Tabs,
  Tab,
} from "@mui/material";
import ProjectCard from "../components/projectCard/ProjectCard";
import {
  getAllProjects,
  getProjectCounts,
  projectsData,
} from "../data/projects";
import { useThemeToggle } from "../context/ThemeContext";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { isDark } = useThemeToggle();

  const allProjects = getAllProjects();
  const counts = getProjectCounts();

  // Theme-aware colors
  const colors = {
    primary: isDark ? "#00ffff" : "#0066cc",
    secondary: isDark ? "#ff00ff" : "#6f42c1",
    text: isDark ? "#fff" : "#212529",
    textSecondary: isDark
      ? "rgba(255, 255, 255, 0.8)"
      : "rgba(33, 37, 41, 0.8)",
    textTertiary: isDark ? "rgba(255, 255, 255, 0.6)" : "rgba(33, 37, 41, 0.6)",
    cardBg: isDark ? "rgba(15, 15, 35, 0.95)" : "rgba(255, 255, 255, 0.95)",
    border: isDark ? "rgba(0, 255, 255, 0.2)" : "rgba(0, 102, 204, 0.2)",
    gradient: isDark
      ? "linear-gradient(45deg, #00ffff, #ff00ff)"
      : "linear-gradient(45deg, #0066cc, #6f42c1)",
    success: isDark ? "#00ff00" : "#28a745",
    warning: isDark ? "#ff9800" : "#fd7e14",
  };

  const categories = [
    { key: "all", label: "All Projects", count: counts.total },
    { key: "htmlcss", label: "HTML/CSS", count: counts.htmlcss },
    { key: "javascript", label: "JavaScript", count: counts.javascript },
    { key: "react", label: "React", count: counts.react },
    { key: "nodejs", label: "Node.js", count: counts.nodejs },
    {
      key: "python",
      label: "Python",
      count: counts.python || projectsData.python?.length || 0,
    },
  ];

  const getFilteredProjects = () => {
    if (selectedCategory === "all") {
      return allProjects;
    }
    return projectsData[selectedCategory] || [];
  };

  const handleCategoryChange = (event, newValue) => {
    setSelectedCategory(newValue);
  };

  const filteredProjects = getFilteredProjects();

  return (
    <Container maxWidth="xl">
      <Box sx={{ paddingTop: "120px", paddingBottom: "60px" }}>
        {/* Header Section */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "'Orbitron', monospace",
              fontWeight: 700,
              background: colors.gradient,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              mb: 2,
            }}
          >
            My Projects
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: colors.textSecondary,
              fontFamily: "'Inter', sans-serif",
              mb: 4,
            }}
          >
            A showcase of my development journey and technical skills
          </Typography>

          {/* Project Stats */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 2,
              mb: 4,
            }}
          >
            <Chip
              label={`${counts.total} Total Projects`}
              sx={{
                backgroundColor: isDark
                  ? "rgba(0, 255, 255, 0.1)"
                  : "rgba(0, 102, 204, 0.1)",
                color: colors.primary,
                border: `1px solid ${colors.primary}40`,
                fontFamily: "'Orbitron', monospace",
              }}
            />
            <Chip
              label={`${counts.completed} Completed`}
              sx={{
                backgroundColor: isDark
                  ? "rgba(0, 255, 0, 0.1)"
                  : "rgba(40, 167, 69, 0.1)",
                color: colors.success,
                border: `1px solid ${colors.success}40`,
                fontFamily: "'Orbitron', monospace",
              }}
            />
            <Chip
              label={`${counts.comingSoon || 0} Coming Soon`}
              sx={{
                backgroundColor: isDark
                  ? "rgba(255, 0, 255, 0.1)"
                  : "rgba(111, 66, 193, 0.1)",
                color: colors.secondary,
                border: `1px solid ${colors.secondary}40`,
                fontFamily: "'Orbitron', monospace",
              }}
            />
          </Box>
        </Box>

        {/* Category Tabs */}
        <Box sx={{ mb: 6 }}>
          <Tabs
            value={selectedCategory}
            onChange={handleCategoryChange}
            centered
            sx={{
              "& .MuiTabs-indicator": {
                backgroundColor: colors.primary,
                height: 3,
              },
              "& .MuiTab-root": {
                color: colors.textSecondary,
                fontFamily: "'Orbitron', monospace",
                fontWeight: 500,
                minWidth: 120,
                "&.Mui-selected": {
                  color: colors.primary,
                },
                "&:hover": {
                  color: colors.primary,
                  backgroundColor: isDark
                    ? "rgba(0, 255, 255, 0.1)"
                    : "rgba(0, 102, 204, 0.1)",
                },
              },
            }}
          >
            {categories.map((category) => (
              <Tab
                key={category.key}
                label={`${category.label} (${category.count})`}
                value={category.key}
              />
            ))}
          </Tabs>
        </Box>

        {/* Projects Grid */}
        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "'Orbitron', monospace",
              color: colors.primary,
              mb: 4,
              textAlign: "center",
            }}
          >
            {selectedCategory === "all"
              ? `All Projects (${filteredProjects.length})`
              : `${
                  categories.find((c) => c.key === selectedCategory)?.label
                } Projects (${filteredProjects.length})`}
          </Typography>

          <Grid container spacing={4} sx={{ justifyContent: "center" }}>
            {filteredProjects.map((project) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={project.id}>
                <ProjectCard project={project} />
              </Grid>
            ))}
          </Grid>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <Box sx={{ textAlign: "center", py: 8 }}>
              <Typography
                variant="h5"
                sx={{
                  color: colors.textTertiary,
                  fontFamily: "'Orbitron', monospace",
                  mb: 2,
                }}
              >
                No projects in this category yet
              </Typography>
              <Typography
                sx={{
                  color: colors.textTertiary,
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Check back soon for new projects!
              </Typography>
            </Box>
          )}
        </Box>

        {/* Technology Overview */}
        <Box sx={{ mt: 8, textAlign: "center" }}>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "'Orbitron', monospace",
              color: colors.primary,
              mb: 4,
            }}
          >
            Technology Breakdown
          </Typography>

          <Grid container spacing={3} sx={{ justifyContent: "center" }}>
            <Grid item xs={6} sm={3}>
              <Box
                sx={{
                  p: 3,
                  border: "1px solid rgba(227, 76, 38, 0.3)",
                  borderRadius: "15px",
                  background: "rgba(227, 76, 38, 0.1)",
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "translateY(-5px)" },
                }}
              >
                <Typography
                  variant="h3"
                  sx={{ color: "#e34c26", fontFamily: "'Orbitron', monospace" }}
                >
                  {counts.htmlcss}
                </Typography>
                <Typography sx={{ color: colors.text, mt: 1 }}>
                  HTML/CSS
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={6} sm={3}>
              <Box
                sx={{
                  p: 3,
                  border: "1px solid rgba(240, 219, 79, 0.3)",
                  borderRadius: "15px",
                  background: "rgba(240, 219, 79, 0.1)",
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "translateY(-5px)" },
                }}
              >
                <Typography
                  variant="h3"
                  sx={{ color: "#f0db4f", fontFamily: "'Orbitron', monospace" }}
                >
                  {counts.javascript}
                </Typography>
                <Typography sx={{ color: colors.text, mt: 1 }}>
                  JavaScript
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={6} sm={3}>
              <Box
                sx={{
                  p: 3,
                  border: "1px solid rgba(97, 218, 251, 0.3)",
                  borderRadius: "15px",
                  background: "rgba(97, 218, 251, 0.1)",
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "translateY(-5px)" },
                }}
              >
                <Typography
                  variant="h3"
                  sx={{ color: "#61dafb", fontFamily: "'Orbitron', monospace" }}
                >
                  {counts.react}
                </Typography>
                <Typography sx={{ color: colors.text, mt: 1 }}>
                  React
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={6} sm={3}>
              <Box
                sx={{
                  p: 3,
                  border: "1px solid rgba(104, 160, 99, 0.3)",
                  borderRadius: "15px",
                  background: "rgba(104, 160, 99, 0.1)",
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "translateY(-5px)" },
                }}
              >
                <Typography
                  variant="h3"
                  sx={{ color: "#68a063", fontFamily: "'Orbitron', monospace" }}
                >
                  {counts.nodejs}
                </Typography>
                <Typography sx={{ color: colors.text, mt: 1 }}>
                  Node.js
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Projects;
