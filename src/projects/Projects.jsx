import React from "react";
import { Box, Container, Typography, Grid, Chip } from "@mui/material";
import ProjectCard from "../ProjectCard/ProjectCard";
import { getAllProjects, getProjectCounts } from "../data/projects";

const ProjectsPage = () => {
  const projects = getAllProjects();
  const counts = getProjectCounts();

  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          paddingTop: "120px",
          paddingBottom: "60px",
        }}
      >
        {/* Header Section */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "'Orbitron', monospace",
              fontWeight: 700,
              background: "linear-gradient(45deg, #00ffff, #ff00ff)",
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
              color: "rgba(255, 255, 255, 0.8)",
              fontFamily: "'Inter', sans-serif",
              mb: 3,
            }}
          >
            A showcase of my development journey
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
                backgroundColor: "rgba(0, 255, 255, 0.1)",
                color: "#00ffff",
                border: "1px solid rgba(0, 255, 255, 0.3)",
                fontFamily: "'Orbitron', monospace",
              }}
            />
            <Chip
              label={`${counts.completed} Completed`}
              sx={{
                backgroundColor: "rgba(0, 255, 0, 0.1)",
                color: "#00ff00",
                border: "1px solid rgba(0, 255, 0, 0.3)",
                fontFamily: "'Orbitron', monospace",
              }}
            />
            <Chip
              label={`${counts.comingSoon} Coming Soon`}
              sx={{
                backgroundColor: "rgba(255, 0, 255, 0.1)",
                color: "#ff00ff",
                border: "1px solid rgba(255, 0, 255, 0.3)",
                fontFamily: "'Orbitron', monospace",
              }}
            />
          </Box>
        </Box>

        {/* Projects Grid */}
        <Grid container spacing={4} sx={{ justifyContent: "center" }}>
          {projects.map((project) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={project.id}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>

        {/* Category Breakdown */}
        <Box sx={{ mt: 8, textAlign: "center" }}>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "'Orbitron', monospace",
              color: "#00ffff",
              mb: 3,
            }}
          >
            Skills Overview
          </Typography>
          <Grid container spacing={3} sx={{ justifyContent: "center" }}>
            <Grid item xs={12} sm={6} md={3}>
              <Box
                sx={{
                  p: 3,
                  border: "1px solid rgba(227, 76, 38, 0.3)",
                  borderRadius: "15px",
                  background: "rgba(227, 76, 38, 0.1)",
                }}
              >
                <Typography
                  variant="h3"
                  sx={{ color: "#e34c26", fontFamily: "'Orbitron', monospace" }}
                >
                  {counts.htmlcss}
                </Typography>
                <Typography sx={{ color: "#fff", mt: 1 }}>
                  HTML/CSS Projects
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box
                sx={{
                  p: 3,
                  border: "1px solid rgba(240, 219, 79, 0.3)",
                  borderRadius: "15px",
                  background: "rgba(240, 219, 79, 0.1)",
                }}
              >
                <Typography
                  variant="h3"
                  sx={{ color: "#f0db4f", fontFamily: "'Orbitron', monospace" }}
                >
                  {counts.javascript}
                </Typography>
                <Typography sx={{ color: "#fff", mt: 1 }}>
                  JavaScript Projects
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box
                sx={{
                  p: 3,
                  border: "1px solid rgba(97, 218, 251, 0.3)",
                  borderRadius: "15px",
                  background: "rgba(97, 218, 251, 0.1)",
                }}
              >
                <Typography
                  variant="h3"
                  sx={{ color: "#61dafb", fontFamily: "'Orbitron', monospace" }}
                >
                  {counts.react}
                </Typography>
                <Typography sx={{ color: "#fff", mt: 1 }}>
                  React Projects
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box
                sx={{
                  p: 3,
                  border: "1px solid rgba(104, 160, 99, 0.3)",
                  borderRadius: "15px",
                  background: "rgba(104, 160, 99, 0.1)",
                }}
              >
                <Typography
                  variant="h3"
                  sx={{ color: "#68a063", fontFamily: "'Orbitron', monospace" }}
                >
                  {counts.nodejs}
                </Typography>
                <Typography sx={{ color: "#fff", mt: 1 }}>
                  Node.js Projects
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default ProjectsPage;
