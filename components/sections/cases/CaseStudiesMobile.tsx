"use client";

import React from "react";
import { Box, Typography, Card, Button } from "@mui/material";
import Masonry from "@mui/lab/Masonry";

export const mockProjects = [
  {
    id: 1,
    title: "PremierLeaf Web App",
    description: "Prioritize your self-care, boost energy, and reclaim your life today with PremierLeaf.",
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
    description:
      "Meet Alyssa, a 21-year-old Dallas entrepreneur whose bold, empowering fashion lets youth shine.",
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

export const CaseStudiesMobile = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography
        variant="h4"
        align="center"
        sx={{
          color: "white",
          fontWeight: 800,
          marginBottom: 2,
          fontStyle: "italic",
        }}
      >
        Case Studies
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        sx={{
          color: "white",
          fontWeight: 600,
          marginBottom: 4,
        }}
      >
        Explore my projects and the creative journey behind each one.
      </Typography>
      <Box sx={{ margin: "0 auto", maxWidth: 400, marginLeft: "15px" }}>
        <Masonry columns={1} spacing={2}>
          {mockProjects.map((project) => (
            <Box key={project.id} sx={{ breakInside: "avoid", marginBottom: 2 }}>
              <Card sx={{ borderRadius: 2, overflow: "hidden" }}>
                <Box
                  sx={{
                    width: "100%",
                    height: 150,
                    backgroundColor: project.backgroundColor,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {project.icon}
                </Box>
              </Card>
              <Box sx={{ mt: 1, p: 1 }}>
                <Typography variant="h6" sx={{ color: "white", fontWeight: "bold", fontSize: "1.2rem" }}>
                  {project.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "white", fontSize: "0.9rem" }}>
                  {project.description}
                </Typography>
              </Box>
              <Box sx={{ mt: 1, display: "flex", gap: "16px", justifyContent: "center" }}>
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
                    {(project.id === 4 || project.id === 6) ? "Get App" : "View Site"}
                  </Button>
                )}
              </Box>
            </Box>
          ))}
        </Masonry>
      </Box>
    </Box>
  );
};
