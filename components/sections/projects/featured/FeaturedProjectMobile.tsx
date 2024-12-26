"use client";

import { Stack, Typography, Button, Box } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";

export const FeaturedProjectMobile = () => {
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
        paddingX: "20px",
        paddingY: "50px",
        gap: "30px",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "white",
          fontWeight: "800",
          fontSize: "24px",
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
          width: "140px",
          height: "140px",
          position: "relative",
          backgroundColor: "#FFFFFF",
          borderRadius: "51px",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "-10px 10px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Image
          src="/me3.png"
          alt="Character Avatar"
          layout="intrinsic"
          width={140}
          height={140}
          objectFit="cover"
          priority
        />
      </Box>

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
          width: "60%",
          margin: "0 auto",
        }}
        onClick={() => window.open("https://premierleaf.com", "_blank")}
      >
        <img
          src="/premierleaf.png"
          alt="PremierLeaf Logo"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </Box>

      <Typography
        variant="body1"
        sx={{
          color: "white",
          fontSize: "14px",
          marginBottom: "16px",
          fontWeight: "700",
          textAlign: "center",
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
          width: "150px",
          color: "#0A1128",
          fontWeight: "800",
          fontSize: "14px",
          textTransform: "none",
          padding: "8px 16px",
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
  );
};
