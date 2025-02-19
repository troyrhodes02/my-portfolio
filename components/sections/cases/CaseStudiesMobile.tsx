"use client";

import React from "react";
import { Box, Typography, Card, Button } from "@mui/material";
import Masonry from "@mui/lab/Masonry";
import { useRouter } from "next/navigation";
import { getAllCaseStudies, CaseStudy } from "../../../data/caseStudies";

export const CaseStudiesMobile = () => {
  const router = useRouter();
  const caseStudies: CaseStudy[] = getAllCaseStudies();

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
      <Box sx={{ margin: "0 auto", maxWidth: 400, ml: "15px" }}>
        <Masonry columns={1} spacing={2}>
          {caseStudies.map((study) => (
            <Box key={study.id} sx={{ breakInside: "avoid", mb: 2 }}>
              <Card sx={{ borderRadius: 2, overflow: "hidden" }}>
                <Box
                  sx={{
                    width: "100%",
                    height: 150,
                    backgroundColor: study.backgroundColor || "#333",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    component="img"
                    src={study.headerImage}
                    alt={study.title}
                    sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </Box>
              </Card>
              <Box sx={{ mt: 1, p: 1 }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                  }}
                >
                  {study.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "white", fontSize: "0.9rem" }}>
                  {study.projectOverview?.missionStatement ||
                    study.missionStatement ||
                    ""}
                </Typography>
              </Box>
              <Box
                sx={{
                  mt: 1,
                  display: "flex",
                  gap: "16px",
                  justifyContent: "center",
                  flexWrap: "wrap",
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
                {study.link && (
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
                        study.id === "premierleaf"
                          ? "https://premierleaf.com"
                          : study.link,
                        "_blank"
                      );
                    }}
                  >
                    {study.id === "premierleaf-wellness" ? "Get App" : "View Site"}
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
