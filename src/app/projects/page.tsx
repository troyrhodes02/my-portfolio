"use client";

import { Box } from "@mui/material";
import { Navbar } from "../../../components/navbar/Navbar";
import { FeaturedProject } from "../../../components/sections/projects/featured/FeaturedProject";
import { AllProjects } from "../../../components/sections/projects/AllProjects";

export default function Projects() {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        overflow: "auto",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url('/code-screen2.jpg')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          opacity: 0.1,
          zIndex: 1,
        }}
      />

      <Box
        sx={{
          position: "relative",
          zIndex: 2,
        }}
      >
        <Navbar />
        <FeaturedProject />
        <AllProjects/>
      </Box>
    </Box>
  );
}
