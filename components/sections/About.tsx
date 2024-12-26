"use client"

import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";

export const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, staggerChildren: 0.3 },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <Box
        id="about"
      component={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
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
        component={motion.img}
        src="/me2.png"
        alt="William Rhodes"
        variants={childVariants}
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
        component={motion.div}
        variants={childVariants}
        sx={{
          textAlign: isMobile ? "center" : "left",
          maxWidth: isMobile ? { xs: "90%", sm: "80%" } : "800px",
        }}
      >
        <Typography
          component={motion.div}
          variants={childVariants}
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
          component={motion.div}
          variants={childVariants}
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
