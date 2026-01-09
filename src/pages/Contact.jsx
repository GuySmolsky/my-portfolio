import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  Paper,
  IconButton,
  Snackbar,
  Alert,
} from "@mui/material";
import { Email, LinkedIn, GitHub, Download } from "@mui/icons-material";
import { useThemeToggle } from "../context/ThemeContext";

const Contact = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const { isDark } = useThemeToggle();

  // Theme-aware colors
  const colors = {
    primary: isDark ? "#00ffff" : "#0066cc",
    secondary: isDark ? "#ff00ff" : "#6f42c1",
    text: isDark ? "#fff" : "#212529",
    textSecondary: isDark
      ? "rgba(255, 255, 255, 0.8)"
      : "rgba(33, 37, 41, 0.8)",
    textTertiary: isDark ? "rgba(255, 255, 255, 0.9)" : "rgba(33, 37, 41, 0.9)",
    cardBg: isDark ? "rgba(15, 15, 35, 0.95)" : "rgba(255, 255, 255, 0.95)",
    border: isDark ? "rgba(0, 255, 255, 0.2)" : "rgba(0, 102, 204, 0.2)",
    borderLight: isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
    hoverBg: isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)",
    gradient: isDark
      ? "linear-gradient(45deg, #00ffff, #ff00ff)"
      : "linear-gradient(45deg, #0066cc, #6f42c1)",
  };

  const contactInfo = [
    {
      icon: <Email />,
      label: "Email",
      value: "guysmolsky@gmail.com",
      link: "mailto:guysmolsky@gmail.com",
      color: colors.primary,
    },
    {
      icon: <LinkedIn />,
      label: "LinkedIn",
      value: "Guy Smolsky",
      link: "https://www.linkedin.com/in/guy-smolsky-550445341/",
      color: isDark ? "#0077b5" : "#0066cc",
    },
    {
      icon: <GitHub />,
      label: "GitHub",
      value: "GuySmolsky",
      link: "https://github.com/GuySmolsky",
      color: colors.text,
    },
    {
      icon: <Download />,
      label: "Resume",
      value: "Download my CV",
      link: `${import.meta.env.BASE_URL}cv/Guy smolski.pdf`,
      color: isDark ? "#ff9800" : "#fd7e14",
      download: true,
    },
  ];

  const handleContactClick = (contact) => {
    if (contact.download) {
      const link = document.createElement("a");
      link.href = contact.link;
      link.download = "Guy_Smolsky_CV.pdf";
      link.click();
    } else if (contact.link) {
      window.open(contact.link, "_blank");
    }
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
            Get In Touch
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: colors.textSecondary,
              fontFamily: "'Inter', sans-serif",
              mb: 4,
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Ready to collaborate or discuss opportunities? I'd love to hear from
            you!
          </Typography>
        </Box>

        {/* Main Content - Contact Information Only */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: 8,
          }}
        >
          {/* Contact Information - Centered */}
          <Paper
            elevation={0}
            sx={{
              p: 4,
              background: colors.cardBg,
              border: `1px solid ${colors.border}`,
              borderRadius: "20px",
              maxWidth: "600px",
              width: "100%",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontFamily: "'Orbitron', monospace",
                color: colors.primary,
                mb: 4,
                fontSize: "1.8rem",
                textAlign: "center",
              }}
            >
              Contact Information
            </Typography>

            {contactInfo.map((contact, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 4,
                  p: 3,
                  borderRadius: "15px",
                  transition: "all 0.3s ease",
                  cursor: contact.link ? "pointer" : "default",
                  border: `1px solid ${colors.borderLight}`,
                  "&:hover": contact.link
                    ? {
                        backgroundColor: colors.hoverBg,
                        transform: "translateX(10px)",
                        borderColor: contact.color,
                        boxShadow: `0 5px 15px ${contact.color}30`,
                      }
                    : {},
                }}
                onClick={() => handleContactClick(contact)}
              >
                <IconButton
                  sx={{
                    color: contact.color,
                    mr: 3,
                    backgroundColor: `${contact.color}20`,
                    width: 50,
                    height: 50,
                    "&:hover": {
                      backgroundColor: `${contact.color}30`,
                      transform: "scale(1.1)",
                    },
                  }}
                >
                  {contact.icon}
                </IconButton>

                <Box sx={{ flex: 1 }}>
                  <Typography
                    sx={{
                      color: colors.text,
                      fontWeight: 600,
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "1.1rem",
                      mb: 0.5,
                    }}
                  >
                    {contact.label}
                  </Typography>
                  <Typography
                    sx={{
                      color: colors.textSecondary,
                      fontSize: "1rem",
                    }}
                  >
                    {contact.value}
                  </Typography>
                </Box>
              </Box>
            ))}

            {/* Available For Section */}
            <Box
              sx={{
                mt: 5,
                p: 4,
                backgroundColor: isDark
                  ? "rgba(0, 255, 255, 0.1)"
                  : "rgba(0, 102, 204, 0.1)",
                borderRadius: "20px",
                border: `1px solid ${colors.primary}40`,
              }}
            >
              <Typography
                sx={{
                  color: colors.primary,
                  fontFamily: "'Orbitron', monospace",
                  fontWeight: 600,
                  mb: 3,
                  fontSize: "1.2rem",
                  textAlign: "center",
                }}
              >
                Available for:
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {[
                  "Frontend Development junior role",
                  "Backend Development junior role",
                  "FullStack Development junior role",
                ].map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        backgroundColor: colors.primary,
                        mr: 2,
                        boxShadow: `0 0 10px ${colors.primary}50`,
                      }}
                    />
                    <Typography
                      sx={{
                        color: colors.textTertiary,
                        fontSize: "1rem",
                        lineHeight: 1.6,
                      }}
                    >
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Paper>
        </Box>

        {/* Quick Connect Section */}
        <Box sx={{ textAlign: "center" }}>
          <Paper
            elevation={0}
            sx={{
              p: 4,
              background: colors.cardBg,
              border: `1px solid ${colors.border}`,
              borderRadius: "20px",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontFamily: "'Orbitron', monospace",
                color: colors.primary,
                mb: 3,
              }}
            >
              Let's Connect!
            </Typography>

            <Typography
              sx={{
                color: colors.textSecondary,
                fontSize: "1.1rem",
                mb: 4,
                maxWidth: "600px",
                margin: "0 auto 2rem",
              }}
            >
              Whether you have a project in mind, want to collaborate, or just
              want to say hello, I'm always excited to connect with fellow
              developers.
            </Typography>

            <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
              <IconButton
                onClick={() => window.open("mailto:guysmolsky@gmail.com")}
                sx={{
                  backgroundColor: isDark
                    ? "rgba(0, 255, 255, 0.1)"
                    : "rgba(0, 102, 204, 0.1)",
                  color: colors.primary,
                  width: 50,
                  height: 50,
                  "&:hover": {
                    backgroundColor: isDark
                      ? "rgba(0, 255, 255, 0.2)"
                      : "rgba(0, 102, 204, 0.2)",
                    transform: "scale(1.1)",
                  },
                }}
              >
                <Email />
              </IconButton>

              <IconButton
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/guy-smolsky-550445341/",
                    "_blank"
                  )
                }
                sx={{
                  backgroundColor: isDark
                    ? "rgba(0, 119, 181, 0.1)"
                    : "rgba(0, 102, 204, 0.1)",
                  color: isDark ? "#0077b5" : "#0066cc",
                  width: 50,
                  height: 50,
                  "&:hover": {
                    backgroundColor: isDark
                      ? "rgba(0, 119, 181, 0.2)"
                      : "rgba(0, 102, 204, 0.2)",
                    transform: "scale(1.1)",
                  },
                }}
              >
                <LinkedIn />
              </IconButton>

              <IconButton
                onClick={() =>
                  window.open("https://github.com/GuySmolsky", "_blank")
                }
                sx={{
                  backgroundColor: isDark
                    ? "rgba(255, 255, 255, 0.1)"
                    : "rgba(0, 0, 0, 0.1)",
                  color: colors.text,
                  width: 50,
                  height: 50,
                  "&:hover": {
                    backgroundColor: isDark
                      ? "rgba(255, 255, 255, 0.2)"
                      : "rgba(0, 0, 0, 0.2)",
                    transform: "scale(1.1)",
                  },
                }}
              >
                <GitHub />
              </IconButton>
            </Box>
          </Paper>
        </Box>

        {/* Success Snackbar */}
        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={() => setOpenSnackbar(false)}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            onClose={() => setOpenSnackbar(false)}
            severity="success"
            sx={{
              backgroundColor: isDark
                ? "rgba(0, 255, 0, 0.1)"
                : "rgba(40, 167, 69, 0.1)",
              color: isDark ? "#00ff00" : "#28a745",
              border: isDark
                ? "1px solid rgba(0, 255, 0, 0.3)"
                : "1px solid rgba(40, 167, 69, 0.3)",
              "& .MuiAlert-icon": {
                color: isDark ? "#00ff00" : "#28a745",
              },
            }}
          >
            Message sent successfully! I'll get back to you soon.
          </Alert>
        </Snackbar>
      </Box>
    </Container>
  );
};

export default Contact;
