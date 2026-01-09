import React from "react";
import {
  Container,
  Box,
  Typography,
  LinearProgress,
  Paper,
  Chip,
} from "@mui/material";
import { Code, Storage, School, TrendingUp } from "@mui/icons-material";
import { useThemeToggle } from "../context/ThemeContext";

const Skills = () => {
  const { isDark } = useThemeToggle();

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
    progressBg: isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
  };

  const skillCategories = [
    {
      title: "Frontend Technologies",
      icon: <Code />,
      color: colors.primary,
      skills: [
        { name: "HTML", level: 100, color: "#e34c26" },
        { name: "CSS", level: 100, color: "#1572b6" },
        { name: "JavaScript", level: 100, color: "#f0db4f" },
        { name: "TypeScript", level: 100, color: "#3178c6" },
        { name: "React", level: 100, color: "#61dafb" },
      ],
    },
    {
      title: "Backend & Database",
      icon: <Storage />,
      color: isDark ? "#ff9800" : "#fd7e14",
      skills: [
        { name: "Node.js", level: 100, color: "#68a063" },
        { name: "Express", level: 100, color: "#68a063" },
        { name: "Python", level: 100, color: "#ffd43b" },
        { name: "Django", level: 100, color: "#092e20" },
        { name: "MongoDB", level: 100, color: "#47a248" },
        { name: "MySQL", level: 100, color: "#00758f" },
      ],
    },
    {
      title: "Tools & Workflow",
      icon: <School />,
      color: colors.secondary,
      skills: [
        { name: "Git & GitHub", level: 100, color: "#f05032" },
        { name: "VS Code", level: 100, color: "#007acc" },
        { name: "Vite", level: 100, color: "#646cff" },
        { name: "Responsive Design", level: 100, color: colors.primary },
      ],
    },
    {
      title: "Currently Learning",
      icon: <TrendingUp />,
      color: colors.secondary,
      skills: [
        { name: "Angular", level: 30, color: "#dd0031" },
        { name: "Vue.js", level: 30, color: "#4fc08d" },
        { name: "Docker", level: 30, color: "#2496ed" },
        { name: "AWS", level: 30, color: "#ff9900" },
      ],
    },
  ];

  const getSkillLevelText = (level) => {
    if (level >= 95) return "Advanced";
    if (level >= 60) return "Intermediate";
    if (level >= 30) return "Learning";
    if (level >= 1) return "Learning";
    return "Learning";
  };

  const getSkillLevelColor = (level) => {
    if (level >= 95) return isDark ? "#00ff00" : "#28a745";
    if (level >= 60) return colors.primary;
    if (level >= 30) return isDark ? "#ff9800" : "#fd7e14";
    if (level >= 1) return colors.secondary;
    return colors.secondary;
  };

  return (
    <Container maxWidth="xl">
      <Box sx={{ paddingTop: "120px", paddingBottom: "60px" }}>
        {/* Header Section */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
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
            Skills & Expertise
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: colors.textSecondary,
              fontFamily: "'Inter', sans-serif",
              mb: 4,
            }}
          >
            My technical skills and learning progress
          </Typography>

          {/* Quick Stats */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 2,
              mb: 4,
            }}
          ></Box>
        </Box>

        {/* Skills Categories */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              lg: "repeat(2, 1fr)",
            },
            gap: 4,
            "& > *": {
              minHeight: "450px",
            },
          }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <Paper
              key={categoryIndex}
              elevation={0}
              sx={{
                p: 4,
                background: colors.cardBg,
                border: `1px solid ${category.color}40`,
                borderRadius: "20px",
                display: "flex",
                flexDirection: "column",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: `0 15px 30px ${category.color}30`,
                  borderColor: category.color,
                },
              }}
            >
              {/* Category Header */}
              <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <Box
                  sx={{
                    color: category.color,
                    mr: 2,
                    fontSize: 30,
                  }}
                >
                  {category.icon}
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: "'Orbitron', monospace",
                    color: category.color,
                    fontWeight: 600,
                  }}
                >
                  {category.title}
                </Typography>
              </Box>

              {/* Skills List */}
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: 3,
                }}
              >
                {category.skills.map((skill, skillIndex) => (
                  <Box key={skillIndex}>
                    {/* Skill Header */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        mb: 1,
                      }}
                    >
                      <Typography
                        sx={{
                          color: colors.text,
                          fontWeight: 500,
                          fontFamily: "'Inter', sans-serif",
                        }}
                      >
                        {skill.name}
                      </Typography>
                      <Chip
                        label={getSkillLevelText(skill.level)}
                        size="small"
                        sx={{
                          backgroundColor: `${getSkillLevelColor(
                            skill.level
                          )}20`,
                          color: getSkillLevelColor(skill.level),
                          border: `1px solid ${getSkillLevelColor(
                            skill.level
                          )}40`,
                          fontSize: "0.7rem",
                          fontFamily: "'Orbitron', monospace",
                        }}
                      />
                    </Box>

                    {/* Progress Bar */}
                    <LinearProgress
                      variant="determinate"
                      value={skill.level}
                      sx={{
                        height: 8,
                        borderRadius: 4,
                        backgroundColor: colors.progressBg,
                        "& .MuiLinearProgress-bar": {
                          backgroundColor: skill.color,
                          borderRadius: 4,
                          boxShadow: `0 0 10px ${skill.color}60`,
                        },
                      }}
                    />

                    {/* Percentage */}
                    <Typography
                      variant="caption"
                      sx={{
                        color: colors.textTertiary,
                        fontSize: "0.8rem",
                        fontFamily: "'Orbitron', monospace",
                        float: "right",
                        mt: 0.5,
                      }}
                    >
                      {skill.level}%
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Paper>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Skills;
