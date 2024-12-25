import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

export const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: "center",
        justifyContent: "center",
        color: "#ffffff",
        paddingBottom: "100px",
      }}
    >
      <Box
        component="img"
        src="/me2.png"
        alt="William Rhodes"
        sx={{
          height: isMobile
            ? { xs: "200px", sm: "300px", md: "400px" }
            : "640px",
          width: "auto",
          marginBottom: isMobile ? 3 : 0,
          marginRight: isMobile ? 0 : { md: "50px", lg: "200px" },
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />

      <Box
        sx={{
          textAlign: isMobile ? "center" : "left",
          maxWidth: isMobile ? { xs: "90%", sm: "80%" } : "800px",
        }}
      >
        <Typography
          sx={{
            marginBottom: 2,
            fontSize: isMobile
              ? { xs: "36px", sm: "48px", md: "64px" }
              : "84px",
            fontWeight: "800",
            fontStyle: "italic",
          }}
        >
          Behind The Code
        </Typography>

        <Typography
          sx={{
            fontSize: isMobile
              ? { xs: "16px", sm: "18px", md: "20px" }
              : "22px",
            lineHeight: isMobile
              ? { xs: "1.2", sm: "1.3", md: "1.5" }
              : "1.5",
            fontWeight: "500",
          }}
        >
          Hi, I’m William Rhodes, a senior at Prairie View A&M University, where
          I’m pursuing a degree in Computer Science. Born and raised in Dallas,
          Texas, I’ve always had a passion for exploring new applications and
          technologies, a curiosity that began in sixth grade and has grown into
          a love for software engineering.
          <br />
          <br />
          I specialize in full-stack development, excelling in React and React
          Native, and enjoy tackling challenges with confidence and
          determination. My journey into web development started during my
          freshman year of college, and I’ve been captivated ever since by the
          ability to create intuitive and impactful digital experiences.
          <br />
          <br />
          Outside of coding, I’m a former athlete who now enjoys gaming, going
          to the gym, and cheering on NFL and NBA teams. Whether it’s software
          engineering or personal interests, I approach everything with a mix of
          enthusiasm and dedication.
        </Typography>
      </Box>
    </Box>
  );
};
