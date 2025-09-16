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
        { name: "React", level: 100, color: "#61dafb" },
      ],
    },
    {
      title: "Backend & Database",
      icon: <Storage />,
      color: isDark ? "#ff9800" : "#fd7e14",
      skills: [
        { name: "Node.js", level: 100, color: "#68a063" },
        { name: "MongoDB", level: 100, color: "#47a248" },
        { name: "MySQL", level: 10, color: "#00758f" },
        { name: "Express", level: 100, color: "#68a063" },
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
        { name: "Python", level: 10, color: "#ffd43b" },
        { name: "TypeScript", level: 10, color: "#3178c6" },
        { name: "Docker", level: 10, color: "#0db7ed" },
        { name: "AWS", level: 10, color: "#ff9900" },
      ],
    },
  ];

  // Learning goals - simple data
  const learningGoals = [
    {
      title: "Master React",
      description:
        "Advanced hooks, state management, and component architecture",
      color: "#61dafb",
      borderColor: "rgba(97, 218, 251, 0.3)",
      background: "rgba(97, 218, 251, 0.1)",
    },
    {
      title: "Full-Stack",
      description: "Node.js, Express, and database integration",
      color: "#68a063",
      borderColor: "rgba(104, 160, 99, 0.3)",
      background: "rgba(104, 160, 99, 0.1)",
    },
    {
      title: "Python",
      description: "Data analysis, automation, and backend development",
      color: "#ffd43b",
      borderColor: "rgba(255, 212, 59, 0.3)",
      background: "rgba(255, 212, 59, 0.1)",
    },
    {
      title: "DevOps",
      description: "Docker, deployment, and cloud technologies",
      color: colors.secondary,
      borderColor: isDark
        ? "rgba(255, 0, 255, 0.3)"
        : "rgba(111, 66, 193, 0.3)",
      background: isDark ? "rgba(255, 0, 255, 0.1)" : "rgba(111, 66, 193, 0.1)",
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
          >
            <Chip
              label="6 HTML/CSS Projects"
              sx={{
                backgroundColor: "rgba(227, 76, 38, 0.1)",
                color: "#e34c26",
                border: "1px solid rgba(227, 76, 38, 0.3)",
                fontFamily: "'Orbitron', monospace",
              }}
            />
            <Chip
              label="6 JavaScript Projects"
              sx={{
                backgroundColor: "rgba(240, 219, 79, 0.1)",
                color: "#f0db4f",
                border: "1px solid rgba(240, 219, 79, 0.3)",
                fontFamily: "'Orbitron', monospace",
              }}
            />
            <Chip
              label="1 React Project"
              sx={{
                backgroundColor: "rgba(97, 218, 251, 0.1)",
                color: "#61dafb",
                border: "1px solid rgba(97, 218, 251, 0.3)",
                fontFamily: "'Orbitron', monospace",
              }}
            />
            <Chip
              label="1 Node.js Project"
              sx={{
                backgroundColor: "rgba(104, 160, 99, 0.1)",
                color: "#68a063",
                border: "1px solid rgba(104, 160, 99, 0.3)",
                fontFamily: "'Orbitron', monospace",
              }}
            />
          </Box>
        </Box>

        {/* Skills Categories - Fixed Grid Layout */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              lg: "repeat(2, 1fr)",
            },
            gap: 4,
            mb: 8,
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

        {/* Learning Goals Section - Simple Static Cards */}
        <Box sx={{ mt: 8 }}>
          <Paper
            elevation={0}
            sx={{
              p: 6,
              background: colors.cardBg,
              border: `1px solid ${colors.border}`,
              borderRadius: "20px",
              textAlign: "center",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontFamily: "'Orbitron', monospace",
                color: colors.primary,
                mb: 3,
              }}
            >
              2025 Learning Goals
            </Typography>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "repeat(2, 1fr)",
                  md: "repeat(4, 1fr)",
                },
                gap: 3,
                px: 2,
                py: 2,
              }}
            >
              {learningGoals.map((goal, index) => (
                <Paper
                  key={index}
                  elevation={0}
                  sx={{
                    p: 3,
                    border: `1px solid ${goal.borderColor}`,
                    borderRadius: "15px",
                    background: goal.background,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: "180px",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: goal.color,
                      fontFamily: "'Orbitron', monospace",
                      mb: 2,
                      fontWeight: 600,
                      textAlign: "center",
                    }}
                  >
                    {goal.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: colors.textSecondary,
                      fontSize: "0.9rem",
                      textAlign: "center",
                      lineHeight: 1.4,
                    }}
                  >
                    {goal.description}
                  </Typography>
                </Paper>
              ))}
            </Box>
          </Paper>
        </Box>
      </Box>
    </Container>
  );
};

export default Skills;
