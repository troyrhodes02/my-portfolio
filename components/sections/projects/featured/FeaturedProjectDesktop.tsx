"use client";

import React from "react";
import { Stack, Typography, Button, Box } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";

export const FeaturedProjectDesktop = () => {
  return (
    <Stack
      component={motion.div}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingX: { lg: "150px" },
        paddingY: { lg: "125px" },
        gap: "50px",
      }}
    >
      <Stack
        direction={{ lg: "row" }}
        spacing={20}
        alignItems="center"
        justifyContent="center"
        sx={{ width: "100%" }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "white",
            fontWeight: "800",
            fontSize: "5rem",
            textAlign: "center",
            fontStyle: "italic",
          }}
        >
          My Featured Project
        </Typography>
        <Box
          component={motion.div}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          sx={{
            width: "160px",
            height: "145px",
            position: "relative",
            backgroundColor: "#FFFFFF",
            borderRadius: "51px",
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            boxShadow: "-10px 10px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Image
            src="/me3.png"
            alt="Character Avatar"
            layout="intrinsic"
            width={150}
            height={178}
            objectFit="cover"
            priority
          />
        </Box>
      </Stack>

      <Stack
        direction={{ lg: "row" }}
        spacing={20}
        alignItems="center"
        justifyContent="center"
        sx={{ width: "100%" }}
      >
        <Box
          component={motion.div}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05, y: -10 }}
          sx={{
            cursor: "pointer",
            boxShadow: "-10px 10px 20px rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
            width: { xs: "100%", md: "1500px" },
            overflow: "hidden",
          }}
          onClick={() => window.open("https://premierleaf.com", "_blank")}
        >
          <Image
            src="/premierleaf.png"
            alt="PremierLeaf Logo"
            layout="responsive"
            width={600}
            height={400}
            objectFit="cover"
          />
        </Box>

        <Stack
          sx={{
            maxWidth: "650px",
            textAlign: "center",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: "white",
              fontSize: "32px",
              marginBottom: "16px",
              fontWeight: "700",
            }}
          >
            The PremierLeaf web application, built collaboratively with Tavaris
            Johnson using React, MaterialUI, and TypeScript, features a sleek,
            responsive design that showcases the brand’s premium hemp products
            while blending modern aesthetics with robust functionality.
          </Typography>
          <Button
            variant="contained"
            component={motion.button}
            whileHover={{ scale: 1.05 }}
            sx={{
              backgroundColor: "white",
              width: "200px",
              color: "#0A1128",
              fontWeight: "800",
              fontSize: "24px",
              textTransform: "none",
              padding: "10px 20px",
              borderRadius: "20px",
              "&:hover": {
                backgroundColor: "#f0f0f0",
              },
              alignSelf: "center",
            }}
            onClick={() => window.open("https://premierleaf.com", "_blank")}
          >
            GO TO SITE
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};
