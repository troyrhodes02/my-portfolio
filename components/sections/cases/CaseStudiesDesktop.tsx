"use client";

import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { getAllCaseStudies } from "../../../data/caseStudies";

const gridItemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const CaseStudiesDesktop = () => {
  const router = useRouter();
  const caseStudies = getAllCaseStudies();

  return (
    <Box sx={{ minHeight: "100vh", color: "white", p: "40px" }}>
      <Box sx={{ textAlign: "center", mb: "40px" }}>
        <Typography
          sx={{
            mb: "20px",
            fontSize: { xs: "4rem", md: "8rem" },
            fontWeight: "bold",
            letterSpacing: "10px",
            fontStyle: "italic",
          }}
        >
          Case Studies
        </Typography>
        <Typography
          sx={{ fontSize: "2.2rem", fontWeight: "500", textAlign: "center" }}
        >
          Explore my projects and the creative journey behind each one!
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {caseStudies.map((study) => (
          <Grid item xs={12} sm={6} md={6} key={study.id}>
            <motion.div
              variants={gridItemVariants}
              initial="hidden"
              animate="visible"
            >
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
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: study.backgroundColor || "#333",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                  }}
                >
                  <Image
                    src={study.headerImage}
                    alt={study.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </Box>
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
                    }}
                  >
                    {study.title}
                  </Typography>
                  <Box sx={{ maxWidth: "80%" }}>
                    <Typography
                      variant="body2"
                      sx={{
                        mb: "16px",
                        fontWeight: "bold",
                        fontSize: "1.3rem",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                      align="center"
                    >
                      {study.projectOverview?.missionStatement ||
                        "No mission statement provided."}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      gap: "16px",
                      flexWrap: "wrap",
                      justifyContent: "center",
                    }}
                  >
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "white",
                        color: "black",
                        borderRadius: "20px",
                        fontWeight: "bold",
                        width: "200px",
                        "&:hover": { backgroundColor: "white" },
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        router.push(`/cases/${study.id}`);
                      }}
                    >
                      Case Study
                    </Button>
                    {(study.link || study.id === "premierleaf") && (
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "white",
                          color: "black",
                          borderRadius: "20px",
                          fontWeight: "bold",
                          width: "200px",
                          "&:hover": { backgroundColor: "white" },
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          const link = study.link || "https://premierleaf.com";
                          window.open(link, "_blank");
                        }}
                      >
                        View Project
                      </Button>
                    )}
                    {study.id === "premierleaf-wellness" && (
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "white",
                          color: "black",
                          borderRadius: "20px",
                          fontWeight: "bold",
                          width: "200px",
                          "&:hover": { backgroundColor: "white" },
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(
                            "https://premierleaf.com/wellness-app",
                            "_blank",
                          );
                        }}
                      >
                        Get App
                      </Button>
                    )}
                    {study.id === "gonext" && (
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "white",
                          color: "black",
                          borderRadius: "20px",
                          fontWeight: "bold",
                          width: "200px",
                          "&:hover": { backgroundColor: "white" },
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(
                            "https://gonext-landing.vercel.app/",
                            "_blank",
                          );
                        }}
                      >
                        View Site
                      </Button>
                    )}
                  </Box>
                </motion.div>
              </motion.div>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
