"use client";

import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { FaJsSquare, FaPython, FaReact, FaHtml5 } from "react-icons/fa";
import {
  SiCplusplus,
  SiTypescript,
  SiMui,
  SiGraphql,
  SiNextdotjs,
  SiMongodb,
} from "react-icons/si";

const icons = [
  {
    Icon: FaJsSquare,
    color: "#F7DF1E",
    name: "JavaScript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    Icon: FaPython,
    color: "#3776AB",
    name: "Python",
    link: "https://www.python.org",
  },
  {
    Icon: FaReact,
    color: "#61DAFB",
    name: "React",
    link: "https://reactjs.org",
  },
  {
    Icon: SiCplusplus,
    color: "#00599C",
    name: "C++",
    link: "https://isocpp.org",
  },
  {
    Icon: FaHtml5,
    color: "#E34F26",
    name: "HTML5",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    Icon: SiTypescript,
    color: "#3178C6",
    name: "TypeScript",
    link: "https://www.typescriptlang.org",
  },
  {
    Icon: SiMui,
    color: "#0081CB",
    name: "Material-UI",
    link: "https://mui.com",
  },
  {
    Icon: SiGraphql,
    color: "#E10098",
    name: "GraphQL",
    link: "https://graphql.org",
  },
  {
    Icon: SiNextdotjs,
    color: "#000000",
    name: "Next.js",
    link: "https://nextjs.org",
  },
  {
    Icon: SiMongodb,
    color: "#47A248",
    name: "MongoDB",
    link: "https://www.mongodb.com",
  },
];

export const SkillsOverviewDesktop = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 500);

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % icons.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getPosition = (index: number) => {
    const relativeIndex = (index - currentIndex + icons.length) % icons.length;

    switch (relativeIndex) {
      case 0:
        return {
          transform: "translateX(0px) scale(1)",
          zIndex: 5,
          opacity: 1,
          filter: "drop-shadow(0px 0px 15px white)",
        };
      case 1:
        return {
          transform: "translateX(250px) scale(0.9)",
          zIndex: 4,
          opacity: 0.9,
        };
      case 2:
        return {
          transform: "translateX(500px) scale(0.8)",
          zIndex: 3,
          opacity: 0.8,
        };
      case icons.length - 1:
        return {
          transform: "translateX(-250px) scale(0.9)",
          zIndex: 4,
          opacity: 0.9,
        };
      case icons.length - 2:
        return {
          transform: "translateX(-500px) scale(0.8)",
          zIndex: 3,
          opacity: 0.8,
        };
      default:
        return {
          transform: "scale(0)",
          opacity: 0,
          zIndex: 0,
        };
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "50px",
        width: "100%",
        margin: "auto",
        marginBottom: "200px",
        animation: isLoaded ? "fadeInLoad 1s ease-in-out" : "none",
        "@keyframes fadeInLoad": {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(139, 0, 0, 0.9)",
          borderRadius: "48px",
          padding: "10px 20px",
          marginBottom: "50px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "#FFFFFF",
            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: "15px",
            fontSize: "64px",
            paddingX: "50px",
            paddingY: "10px",
            fontStyle: "italic",
          }}
        >
          Skills Overview
        </Typography>
      </Box>

      <Box
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          maxWidth: "1000px",
          height: "250px",
        }}
      >
        {icons.map(({ Icon, color, name, link }, index) => (
          <Box
            key={index}
            sx={{
              position: "absolute",
              textAlign: "center",
              transition: "all 0.8s ease-in-out",
              ...getPosition(index),
            }}
          >
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Icon size={150} color={color} />
            </a>
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          textAlign: "center",
          minHeight: "40px",
        }}
      >
        <Typography
          sx={{
            color: "#FFFFFF",
            fontSize: "28px",
            fontWeight: "bold",
          }}
        >
          {icons[currentIndex].name}
        </Typography>
      </Box>
    </Box>
  );
};
