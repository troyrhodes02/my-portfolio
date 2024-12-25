"use client";

import React, { useState } from "react";
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

export const SkillsOverviewMobile = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        width: "100%",
        margin: "auto",
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(139, 0, 0, 0.9)",
          borderRadius: "24px",
          padding: "10px 15px",
          marginBottom: "30px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: "#FFFFFF",
            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: "10px",
            fontSize: "24px",
            paddingX: "20px",
            paddingY: "5px",
            fontStyle: "italic",
          }}
        >
          Skills Overview
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          overflowY: "auto",
          maxHeight: "400px",
          width: "100%",
        }}
      >
        {icons.map(({ Icon, color, name, link }, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              padding: "10px 20px",
              backgroundColor:
                index % 2 === 0 ? "rgba(0, 0, 0, 0.1)" : "rgba(0, 0, 0, 0.2)",
              borderRadius: "8px",
              marginBottom: "10px",
            }}
          >
            <Icon size={40} color={color} />
            <Typography
              sx={{
                color: "#FFFFFF",
                fontSize: "18px",
                fontWeight: "bold",
                flexGrow: 1,
                textAlign: "center",
              }}
            >
              {name}
            </Typography>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#61dafb",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Learn More
            </a>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
