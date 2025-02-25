import React from "react";
import { Box, Typography, Button } from "@mui/material";

export const FooterMobile = () => {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box component="footer" sx={footerStyles}>
      <Box sx={textureOverlayStyles} />
      <Box sx={contentWrapperStyles}>
        <Box sx={topSectionStyles}>
          <Typography variant="h2" sx={companyNameStyles}>
            RhodesCode
          </Typography>
          <Typography variant="body2" sx={copyStyles}>
            Thanks for stopping by! I hope you have a great day.
          </Typography>
        </Box>
        <Box sx={buttonGroupStyles}>
          <Button
            component="a"
            href="https://www.linkedin.com/in/williamrhodespvamu/"
            target="_blank"
            rel="noopener noreferrer"
            sx={bubbleButtonStyles}
          >
            LinkedIn
          </Button>
          <Button
            component="a"
            href="mailto:wtrhodes02@gmail.com"
            sx={bubbleButtonStyles}
          >
            Email
          </Button>
          <Button onClick={handleBackToTop} sx={bubbleButtonStyles}>
            Back to Top
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

const footerStyles = {
  position: "relative",
  backgroundImage: "url('/metal.jpg')",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  p: 2,
  overflow: "hidden",
  color: "#fff",
};

const textureOverlayStyles = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  zIndex: 0,
};

const contentWrapperStyles = {
  position: "relative",
  zIndex: 1,
  display: "flex",
  flexDirection: "column" as const,
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center" as const,
  gap: 2,
};

const topSectionStyles = {
  mb: 2,
};

const companyNameStyles = {
  m: 0,
  fontSize: "2rem",
  fontWeight: 700,
  letterSpacing: "3px",
};

const copyStyles = {
  fontSize: "0.85rem",
  mt: 1,
};

const buttonGroupStyles = {
  display: "flex",
  flexDirection: "column" as const,
  gap: 1.5,
  width: "100%",
  alignItems: "center",
};

const bubbleButtonStyles = {
  backgroundColor: "#fff",
  color: "#050522",
  borderRadius: "50px",
  fontWeight: 600,
  boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
  textTransform: "none",
  textDecoration: "none",
  px: 3,
  py: 1.25,
  fontSize: "1.1rem",
  width: "80%",
  maxWidth: "300px",
  "&:hover": {
    backgroundColor: "#f0f0f0",
  },
};

export default FooterMobile;
