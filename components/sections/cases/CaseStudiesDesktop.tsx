"use client";

import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import { motion } from "framer-motion";

export const mockProjects = [
  {
    id: 1,
    title: "PremierLeaf Web App",
    description: "Static snapshot loaded from plsite.png.",
    icon: (
      <Box
        component="img"
        src="/plsite.png"
        alt="PremierLeaf"
        sx={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    ),
    backgroundColor: "#a81d14",
    link: "https://premierleaf.com",
  },
  {
    id: 2,
    title: "YoungStarWorld Web App",
    description: "Static snapshot loaded from a hardcoded image.",
    icon: (
      <Box
        component="img"
        src="/youngstarworld.png"
        alt="YoungStarWorld"
        sx={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    ),
    backgroundColor: "#00796b",
    link: "https://youngstarworld.vercel.app",
  },
  {
    id: 3,
    title: "GoNext Web App",
    description: "A futuristic sports platform that redefines the online experience.",
    icon: (
      <Box
        component="img"
        src="/gonextsite.png"
        alt="GoNext Web App"
        sx={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    ),
    backgroundColor: "#512da8",
    link: "https://gonextsports.com",
  },
  {
    id: 4,
    title: "PremierLeaf Wellness Mobile App",
    description: "A mobile app designed to promote wellness with an intuitive interface.",
    icon: (
      <Box
        component="img"
        src="/plhome.png"
        alt="PremierLeaf Wellness App"
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "50% 10%",
        }}
      />
    ),
    backgroundColor: "#E0E0E0",
    link: "https://example.com/premierleaf-wellness",
  },
  {
    id: 5,
    title: "PolitiMap Mobile App",
    description: "A powerful visualization tool to map political data.",
    icon: (
      <Box
        component="img"
        src="/politimap.png"
        alt="PolitiMap"
        sx={{
          width: "80%",
          height: "80%",
          objectFit: "contain",
          margin: "auto",
        }}
      />
    ),
    backgroundColor: "#9ca5d4",
    link: "https://example.com/politimap",
  },
  {
    id: 6,
    title: "GoNext Mobile App",
    description: "Experience the mobile interface of GoNext in a sleek design.",
    icon: (
      <Box
        component="img"
        src="/gonextphone.png"
        alt="GoNext Mobile App"
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    ),
    backgroundColor: "#ffa023",
    link: "https://gonextsports.com/mobile",
  },
];

export const CaseStudiesDesktop = () => {
  return (
    <Box sx={{ minHeight: "100vh", color: "white", p: "40px" }}>
      <Box sx={{ textAlign: "center", mb: "40px" }}>
        <Typography
          sx={{
            mb: "20px",
            fontSize: "8rem",
            fontWeight: "bold",
            letterSpacing: "10px",
            fontStyle: "italic",
            textAlign: "center",
          }}
        >
          Case Studies
        </Typography>
        <Typography sx={{ fontSize: "2.2rem", fontWeight: "500", textAlign: "center" }}>
          Explore my projects and the creative journey behind each one!
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {mockProjects.map((project) => (
          <Grid item xs={4} key={project.id}>
            <motion.div
              initial="rest"
              whileHover="hover"
              animate="rest"
              style={{
                position: "relative",
                borderRadius: "16px",
                overflow: "hidden",
                height: "350px",
              }}
            >
              {project.id === 1 ? (
                <Box sx={{ width: "100%", height: "100%", backgroundColor: project.backgroundColor }}>
                  {project.icon}
                </Box>
              ) : (
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: project.backgroundColor,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: project.id === 6 ? "flex-end" : "center",
                    p: project.id === 6 ? 0 : undefined,
                  }}
                >
                  {project.icon}
                </Box>
              )}
              <motion.div
                variants={{
                  rest: { opacity: 0, backdropFilter: "none" },
                  hover: { opacity: 1, backdropFilter: "blur(2px)" },
                }}
                transition={{ duration: 0.3 }}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "16px",
                  boxSizing: "border-box",
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    mb: "8px",
                    fontWeight: "bold",
                    fontSize: "3rem",
                    fontStyle: "italic",
                    textAlign: "center",
                  }}
                >
                  {project.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ mb: "16px", fontWeight: "bold", fontSize: "1.3rem" }}
                  align="center"
                >
                  {project.description}
                </Typography>
                <Box sx={{ display: "flex", gap: "16px" }}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "white",
                      color: "black",
                      borderRadius: "20px",
                      fontWeight: "bold",
                      "&:hover": { backgroundColor: "white" },
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    Case Study
                  </Button>
                  {project.id === 5 ? null : (
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "white",
                        color: "black",
                        borderRadius: "20px",
                        fontWeight: "bold",
                        "&:hover": { backgroundColor: "white" },
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.link, "_blank");
                      }}
                    >
                      {(project.id === 4 || project.id === 6) ? "Get App" : "View Project"}
                    </Button>
                  )}
                </Box>
              </motion.div>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
