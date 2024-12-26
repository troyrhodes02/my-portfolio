"use client";

import React from "react";
import { Box, Typography, Button } from "@mui/material";

export const AllProjects = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "#FFFFFF",
        padding: { xs: "30px", sm: "40px", md: "50px" },
        borderRadius: "8px",
        paddingBottom: { xs: "60px", sm: "80px", md: "100px" },
      }}
    >
      <Typography
        sx={{
          marginBottom: "20px",
          fontWeight: "800",
          fontSize: { xs: "42px", sm: "56px", md: "92px" },
          fontStyle: "italic",
        }}
      >
        Want to See More?
      </Typography>
      <Typography
        sx={{
          marginBottom: "30px",
          maxWidth: "1000px",
          fontWeight: "500",
          fontSize: { xs: "16px", sm: "24px", md: "36px" },
          paddingX: { xs: "10px", sm: "20px", md: "0" },
        }}
      >
        My other projects are currently in progress and will be displayed here
        soon—stay tuned! In the meantime, feel free to view my resume or email
        me with any questions or requests to see more of my work.
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: "10px", sm: "20px" },
          alignItems: "center",
        }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#FFFFFF",
            color: "#0A0A23",
            fontWeight: "800",
            fontSize: { xs: "16px", sm: "20px", md: "26px" },
            padding: { xs: "8px 16px", sm: "10px 20px" },
            "&:hover": {
              backgroundColor: "#EDEDED",
            },
            borderRadius: "26px",
            width: { xs: "200px", sm: "275px" },
          }}
        >
          VIEW RESUME
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#FFFFFF",
            color: "#0A0A23",
            fontWeight: "800",
            fontSize: { xs: "16px", sm: "20px", md: "26px" },
            padding: { xs: "8px 16px", sm: "10px 20px" },
            "&:hover": {
              backgroundColor: "#EDEDED",
            },
            borderRadius: "26px",
            width: { xs: "200px", sm: "275px" },
          }}
          href="mailto:wtrhodes02@gmail.com"
        >
          EMAIL
        </Button>
      </Box>
    </Box>
  );
};
