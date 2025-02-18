import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { getAllCaseStudies } from "../../../data/caseStudies"; // Use a helper function to get case studies

export const CaseStudiesDesktop = () => {
  const router = useRouter();
  const caseStudies = getAllCaseStudies(); // Fetch data dynamically

  return (
    <Box sx={{ minHeight: "100vh", color: "white", p: "40px" }}>
      {/* Page Heading */}
      <Box sx={{ textAlign: "center", mb: "40px" }}>
        <Typography
          sx={{
            mb: "20px",
            fontSize: { xs: "4rem", md: "8rem" }, // Responsive font size
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

      {/* Case Study Grid */}
      <Grid container spacing={4}>
        {caseStudies.map((study) => (
          <Grid item xs={12} sm={6} md={4} key={study.id}>
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
              {/* Image Background */}
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
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

              {/* Hover Overlay */}
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
                {/* Case Study Title & Description */}
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
                  {study.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ mb: "16px", fontWeight: "bold", fontSize: "1.3rem" }}
                  align="center"
                >
                  {study.missionStatement}
                </Typography>

                {/* Buttons */}
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
                        "&:hover": { backgroundColor: "white" },
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(study.link, "_blank");
                      }}
                    >
                      View Project
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
