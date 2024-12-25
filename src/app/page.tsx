"use client";

import { Box } from "@mui/material";
import { Hero } from "../../components/sections/Hero";
import { Navbar } from "../../components/navbar/Navbar";
import { SkillsOverview } from "../../components/sections/skills/SkillsOverview";

export default function Home() {
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
          backgroundImage: `url('/code-screen.jpg')`,
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
        <Hero />
        <SkillsOverview/>
      </Box>
    </Box>
  );
}
