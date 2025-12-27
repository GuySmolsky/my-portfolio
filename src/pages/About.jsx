import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  Avatar,
  Chip,
  Paper,
  Modal,
  IconButton,
} from "@mui/material";
import { Code, School, Work, Person, Close } from "@mui/icons-material";
import { useThemeToggle } from "../context/ThemeContext";

// Helper function to get correct image paths for both development and production
const getImagePath = (imagePath) => {
  const basePath = import.meta.env.DEV ? "" : "/my-portfolio";
  return `${basePath}${imagePath}`;
};

const About = () => {
  const [selectedTimelineItem, setSelectedTimelineItem] = useState(null);
  const { isDark } = useThemeToggle();

  // Theme-aware colors
  const colors = {
    primary: isDark ? "#00ffff" : "#0066cc",
    secondary: isDark ? "#ff00ff" : "#6f42c1",
    text: isDark ? "#fff" : "#212529",
    textSecondary: isDark
      ? "rgba(255, 255, 255, 0.8)"
      : "rgba(33, 37, 41, 0.8)",
    cardBg: isDark ? "rgba(15, 15, 35, 0.95)" : "rgba(255, 255, 255, 0.95)",
    border: isDark ? "rgba(0, 255, 255, 0.2)" : "rgba(0, 102, 204, 0.2)",
    gradient: isDark
      ? "linear-gradient(45deg, #00ffff, #ff00ff)"
      : "linear-gradient(45deg, #0066cc, #6f42c1)",
  };

  const skills = {
    Stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "Git",
      "VS Code",
      "TypeScript",
      "MySQL",
      "Python",
      "Django",
    ],
  };

  const timeline = [
    {
      title: "Computer Science Studies",
      description:
        "Majored computers science in school with 5 units and created my first projects in HTML, CSS, and JavaScript",
      fullDescription:
        "During my computer science studies in school, I completed 5 units focusing on programming fundamentals and web development. This foundational period introduced me to the core concepts of programming logic, algorithms, and basic data structures. I created my first web projects using HTML for structure, CSS for styling, and JavaScript for interactivity. These early projects, while simple, sparked my passion for web development and laid the groundwork for my future learning journey. The academic environment provided me with a solid understanding of computer science principles that continue to inform my approach to problem-solving in development.",
      icon: <School />,
      color: isDark ? "#00ffff" : "#0066cc",
      date: "School",
    },
    {
      title: "Started HackerU Course",
      description:
        "Enrolled in comprehensive web development program, expanding skills across multiple languages",
      fullDescription:
        "At the end of 2024, I made the pivotal decision to enroll in HackerU's comprehensive web development program. This intensive course has been transformational, taking me from basic HTML/CSS knowledge to advanced full-stack development skills. The curriculum covers modern web technologies including React for frontend development, Node.js and Express for backend services, and MongoDB for database management. The hands-on approach and project-based learning methodology have accelerated my growth exponentially. Working alongside fellow students and experienced instructors has not only improved my technical skills but also taught me valuable collaboration and problem-solving techniques essential in the tech industry.",
      icon: <Code />,
      color: isDark ? "#f0db4f" : "#ffc107",
      date: "End 2024",
    },
    {
      title: "Building Portfolio",
      description:
        "Currently building this portfolio project while actively seeking my first professional role as a full-stack developer.",
      fullDescription:
        "This portfolio project represents the culmination of my learning journey so far. Built with React and Material-UI, it showcases not just my technical capabilities but also my understanding of user experience design and modern web development practices. Currently, I'm actively seeking my first professional role as a full-stack developer, leveraging the comprehensive skills I've acquired at HackerU. This project demonstrates my ability to create responsive, interactive web applications with clean code architecture. Each component has been carefully crafted to reflect best practices in React development, from state management to component composition. The portfolio serves as both a demonstration of my abilities and a testament to my commitment to continuous learning and growth in the tech industry.",
      icon: <Work />,
      color: isDark ? "#61dafb" : "#17a2b8",
      date: "Current",
    },
    {
      title: "Job Seeking",
      description:
        "Finished HackerU program and transitioning to professional development career",
      icon: <Person />,
      color: isDark ? "#ff00ff" : "#6f42c1",
    },
  ];

  const handleTimelineClick = (item) => {
    setSelectedTimelineItem(item);
  };

  const handleModalClose = () => {
    setSelectedTimelineItem(null);
  };

  return (
    <Container maxWidth="xl">
      <Box sx={{ paddingTop: "120px", paddingBottom: "60px" }}>
        {/* Header Section */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Avatar
            sx={{
              width: 150,
              height: 150,
              margin: "0 auto",
              mb: 4,
              border: `3px solid ${colors.primary}`,
              boxShadow: `0 0 20px ${colors.primary}80`,
            }}
            src={getImagePath("/images/other images/ProfileImage.jpg")}
            alt="Guy Smolsky"
          >
            GS
          </Avatar>

          <Typography
            variant="h2"
            sx={{
              fontFamily: "'Orbitron', monospace",
              fontWeight: 700,
              background: colors.gradient,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              mb: 3,
              fontSize: { xs: "2.5rem", md: "3.75rem" },
            }}
          >
            About Me
          </Typography>

          <Typography
            variant="h5"
            sx={{
              color: colors.textSecondary,
              fontFamily: "'Inter', sans-serif",
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: 1.6,
              fontSize: { xs: "1.1rem", md: "1.5rem" },
              px: 2,
            }}
          >
            Passionate web developer on a journey to master full-stack
            development
          </Typography>
        </Box>

        {/* Main Content - CSS Grid for Equal Heights */}
        <Box
          sx={{
            mb: 10,
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 4,
            "& > *": {
              minHeight: "480px",
            },
          }}
        >
          {/* Personal Story */}
          <Paper
            elevation={0}
            sx={{
              p: 3,
              background: colors.cardBg,
              border: `1px solid ${colors.border}`,
              borderRadius: "20px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontFamily: "'Orbitron', monospace",
                color: colors.primary,
                mb: 2,
                textAlign: "center",
                fontSize: "1.3rem",
              }}
            >
              My Story
            </Typography>

            <Box
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                gap: 2,
              }}
            >
              <Typography
                sx={{
                  color: colors.textSecondary,
                  lineHeight: 1.6,
                  fontSize: "0.9rem",
                  textAlign: "left",
                }}
              >
                I'm Guy Smolsky, a passionate web developer who discovered the
                exciting world of coding and fell in love with creating digital
                experiences.
              </Typography>

              <Typography
                sx={{
                  color: colors.textSecondary,
                  lineHeight: 1.6,
                  fontSize: "0.9rem",
                  textAlign: "left",
                }}
              >
                My journey started with HTML and CSS, building static websites
                and learning the fundamentals of web design. As I progressed, I
                dove into JavaScript, creating interactive applications and
                discovering the power of dynamic programming.
              </Typography>

              <Typography
                sx={{
                  color: colors.textSecondary,
                  lineHeight: 1.6,
                  fontSize: "0.9rem",
                  textAlign: "left",
                }}
              >
                Currently, I'm expanding my skills with React and backend
                technologies like Node.js and MongoDB. I believe in continuous
                learning and pushing boundaries. Every project I build teaches
                me something new.
              </Typography>

              <Typography
                sx={{
                  color: colors.textSecondary,
                  lineHeight: 1.6,
                  fontSize: "0.9rem",
                  textAlign: "left",
                }}
              >
                When I'm not coding, I enjoy exploring new technologies and
                planning my next development challenge. My goal is to become a
                full-stack developer and contribute to meaningful projects that
                make a real difference.
              </Typography>

              <Typography
                sx={{
                  color: colors.textSecondary,
                  lineHeight: 1.6,
                  fontSize: "0.9rem",
                  textAlign: "left",
                }}
              >
                I'm always eager to take on new challenges and collaborate with
                other developers to create amazing web experiences. The tech
                industry is constantly evolving, and I love staying up-to-date
                with the latest trends and best practices.
              </Typography>
            </Box>
          </Paper>

          {/* Skills Section */}
          <Paper
            elevation={0}
            sx={{
              p: 3,
              background: colors.cardBg,
              border: `1px solid ${colors.border}`,
              borderRadius: "20px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontFamily: "'Orbitron', monospace",
                color: colors.primary,
                mb: 2,
                textAlign: "center",
                fontSize: "1.3rem",
              }}
            >
              Skills & Technologies
            </Typography>

            <Box
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                py: 2,
              }}
            >
              {/* Current Skills */}
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: isDark ? "#00ff00" : "#28a745",
                    fontFamily: "'Orbitron', monospace",
                    mb: 2,
                    fontSize: "1rem",
                  }}
                >
                  Current Skills
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 1,
                    justifyContent: "center",
                  }}
                >
                  {skills.current.map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      sx={{
                        backgroundColor: isDark
                          ? "rgba(0, 255, 0, 0.1)"
                          : "rgba(40, 167, 69, 0.1)",
                        color: isDark ? "#00ff00" : "#28a745",
                        border: isDark
                          ? "1px solid rgba(0, 255, 0, 0.3)"
                          : "1px solid rgba(40, 167, 69, 0.3)",
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.75rem",
                        height: "28px",
                      }}
                    />
                  ))}
                </Box>
              </Box>

              {/* Learning */}
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: isDark ? "#ff9800" : "#fd7e14",
                    fontFamily: "'Orbitron', monospace",
                    mb: 2,
                    fontSize: "1rem",
                  }}
                >
                  Currently Learning
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 1,
                    justifyContent: "center",
                  }}
                >
                  {skills.learning.map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      sx={{
                        backgroundColor: isDark
                          ? "rgba(255, 152, 0, 0.1)"
                          : "rgba(253, 126, 20, 0.1)",
                        color: isDark ? "#ff9800" : "#fd7e14",
                        border: isDark
                          ? "1px solid rgba(255, 152, 0, 0.3)"
                          : "1px solid rgba(253, 126, 20, 0.3)",
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.75rem",
                        height: "28px",
                      }}
                    />
                  ))}
                </Box>
              </Box>

              {/* Future Plans */}
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: colors.secondary,
                    fontFamily: "'Orbitron', monospace",
                    mb: 2,
                    fontSize: "1rem",
                  }}
                >
                  Future Plans
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 1,
                    justifyContent: "center",
                  }}
                >
                  {skills.future.map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      sx={{
                        backgroundColor: isDark
                          ? "rgba(255, 0, 255, 0.1)"
                          : "rgba(111, 66, 193, 0.1)",
                        color: colors.secondary,
                        border: isDark
                          ? "1px solid rgba(255, 0, 255, 0.3)"
                          : "1px solid rgba(111, 66, 193, 0.3)",
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.75rem",
                        height: "28px",
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Box>
          </Paper>
        </Box>

        {/* Journey Section - Now Clickable */}
        <Box sx={{ mt: 8 }}>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "'Orbitron', monospace",
              color: colors.primary,
              textAlign: "center",
              mb: 6,
              fontSize: { xs: "2rem", md: "3rem" },
            }}
          >
            My Development Journey
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 3,
              justifyContent: "center",
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            {timeline.map((item, index) => (
              <Box
                key={index}
                sx={{
                  width: {
                    xs: "100%",
                    sm: "calc(50% - 12px)",
                    md: "calc(25% - 18px)",
                  },
                  minWidth: "250px",
                  maxWidth: "280px",
                }}
              >
                <Paper
                  elevation={0}
                  onClick={() => handleTimelineClick(item)}
                  sx={{
                    p: 2,
                    background: colors.cardBg,
                    border: `1px solid ${item.color}40`,
                    borderRadius: "15px",
                    height: "220px",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    "&:hover": {
                      transform: "translateY(-8px) scale(1.02)",
                      borderColor: item.color,
                      boxShadow: `0 15px 35px ${item.color}40`,
                    },
                  }}
                >
                  {/* Icon Section */}
                  <Box
                    sx={{
                      textAlign: "center",
                      height: "70px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      sx={{
                        color: item.color,
                        backgroundColor: `${item.color}20`,
                        borderRadius: "50%",
                        p: 1.5,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 40,
                        height: 40,
                        mb: 1,
                      }}
                    >
                      {item.icon}
                    </Box>

                    <Typography
                      variant="caption"
                      sx={{
                        color: colors.textSecondary,
                        fontStyle: "italic",
                        fontFamily: "'Orbitron', monospace",
                        fontSize: "0.7rem",
                      }}
                    >
                      {item.date}
                    </Typography>
                  </Box>

                  {/* Title Section */}
                  <Box
                    sx={{
                      height: "50px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 1,
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        color: item.color,
                        fontFamily: "'Orbitron', monospace",
                        textAlign: "center",
                        fontSize: "0.9rem",
                        lineHeight: 1.1,
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Box>

                  {/* Description Section - Fixed overflow */}
                  <Box
                    sx={{
                      flex: 1,
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "center",
                      px: 1,
                      overflow: "hidden",
                    }}
                  >
                    <Typography
                      sx={{
                        color: colors.textSecondary,
                        lineHeight: 1.3,
                        textAlign: "center",
                        fontSize: "0.75rem",
                        display: "-webkit-box",
                        WebkitLineClamp: 4,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Box>

                  {/* Click indicator */}
                  <Box
                    sx={{
                      textAlign: "center",
                      mt: 1,
                      opacity: 0.7,
                    }}
                  >
                    <Typography
                      sx={{
                        color: item.color,
                        fontSize: "0.6rem",
                        fontFamily: "'Orbitron', monospace",
                      }}
                    ></Typography>
                  </Box>
                </Paper>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Modal for Timeline Details */}
        <Modal
          open={Boolean(selectedTimelineItem)}
          onClose={handleModalClose}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: { xs: "90%", md: "70%", lg: "60%" },
              maxWidth: "800px",
              maxHeight: "80vh",
              overflow: "auto",
              background: colors.cardBg,
              border: selectedTimelineItem
                ? `2px solid ${selectedTimelineItem.color}`
                : `2px solid ${colors.primary}`,
              borderRadius: "20px",
              p: 4,
              backdropFilter: "blur(20px)",
              boxShadow: selectedTimelineItem
                ? `0 25px 50px ${selectedTimelineItem.color}30`
                : `0 25px 50px ${colors.primary}30`,
              animation: "modalSlideIn 0.3s ease-out",
              "@keyframes modalSlideIn": {
                "0%": {
                  opacity: 0,
                  transform: "scale(0.7) translateY(50px)",
                },
                "100%": {
                  opacity: 1,
                  transform: "scale(1) translateY(0)",
                },
              },
            }}
          >
            {/* Close Button */}
            <IconButton
              onClick={handleModalClose}
              sx={{
                position: "absolute",
                top: 16,
                right: 16,
                color: selectedTimelineItem?.color || colors.primary,
                backgroundColor: isDark
                  ? "rgba(255, 255, 255, 0.1)"
                  : "rgba(0, 0, 0, 0.1)",
                "&:hover": {
                  backgroundColor: isDark
                    ? "rgba(255, 255, 255, 0.2)"
                    : "rgba(0, 0, 0, 0.2)",
                  transform: "scale(1.1)",
                },
              }}
            >
              <Close />
            </IconButton>

            {selectedTimelineItem && (
              <>
                {/* Header */}
                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <Box
                    sx={{
                      color: selectedTimelineItem.color,
                      backgroundColor: `${selectedTimelineItem.color}20`,
                      borderRadius: "50%",
                      p: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mr: 3,
                    }}
                  >
                    {selectedTimelineItem.icon}
                  </Box>
                  <Box>
                    <Typography
                      variant="h4"
                      sx={{
                        color: selectedTimelineItem.color,
                        fontFamily: "'Orbitron', monospace",
                        fontWeight: 600,
                        mb: 1,
                      }}
                    >
                      {selectedTimelineItem.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: colors.textSecondary,
                        fontFamily: "'Orbitron', monospace",
                        fontSize: "0.9rem",
                      }}
                    >
                      {selectedTimelineItem.date}
                    </Typography>
                  </Box>
                </Box>

                {/* Content */}
                <Typography
                  sx={{
                    color: colors.textSecondary,
                    lineHeight: 1.8,
                    fontSize: "1rem",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {selectedTimelineItem.fullDescription}
                </Typography>
              </>
            )}
          </Box>
        </Modal>
      </Box>
    </Container>
  );
};

export default About;
