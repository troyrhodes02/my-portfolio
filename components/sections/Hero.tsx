"use client";

import React from "react";
import { Stack, Typography, Box, Button } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export const Hero = () => {
  const router = useRouter();

  return (
    <Stack
      component={motion.div}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingX: { xs: "20px", sm: "40px", md: "75px" },
        paddingY: { xs: "50px", sm: "75px", md: "150px" },
        gap: "50px",
      }}
    >
      <Stack
        sx={{
          width: "100%",
          flexDirection: { xs: "column", md: "column", lg: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: "20px", md: "50px" },
          paddingBottom: { md: "50px" },
        }}
      >
        <Stack
          component={motion.div}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          sx={{
            width: { xs: "100%", md: "450px" },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              textAlign: { xs: "center", md: "center" },
              color: "white",
              fontSize: { xs: "36px", sm: "48px", md: "72px" },
              fontWeight: 400,
              fontStyle: "italic",
            }}
          >
            {`Hi, I'm`}
          </Typography>
          <Typography
            variant="h1"
            sx={{
              textAlign: { xs: "center", md: "center" },
              color: "white",
              fontSize: { xs: "48px", sm: "64px", md: "96px" },
              fontWeight: 400,
              fontStyle: "italic",
            }}
          >
            William Rhodes
          </Typography>
        </Stack>
        <Box
          component={motion.div}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          whileHover={{ scale: 1.1, y: -10 }}
          sx={{
            position: "relative",
            width: { xs: "200px", sm: "250px", md: "400px", lg: "550px" },
            height: { xs: "300px", sm: "350px", md: "600px" },
          }}
        >
          <Image
            src="/me1.png"
            alt="William Rhodes"
            layout="fill"
            objectFit="cover"
            priority
          />
        </Box>
        <Stack
          component={motion.div}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          sx={{
            width: "auto",
            alignItems: { xs: "center", md: "center" },
            paddingTop: { xs: "20px", sm: "0" },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              textAlign: { xs: "center", md: "left" },
              color: "white",
              fontSize: { xs: "28px", sm: "36px", md: "48px" },
              fontWeight: 700,
            }}
          >
            Full-Stack
          </Typography>
          <Typography
            variant="h1"
            sx={{
              textAlign: { xs: "center", md: "center" },
              color: "white",
              fontSize: { xs: "28px", sm: "36px", md: "48px" },
              fontWeight: 700,
            }}
          >
            Software Engineer
          </Typography>
          <Button
            variant="contained"
            component={motion.button}
            whileHover={{ scale: 1.05 }}
            sx={{
              backgroundColor: "white",
              marginTop: "25px",
              color: "#0A1128",
              fontWeight: "bold",
              fontSize: { xs: "16px", sm: "20px", md: "24px" },
              textTransform: "none",
              padding: { xs: "8px 16px", md: "10px 20px" },
              borderRadius: "20px",
              "&:hover": {
                backgroundColor: "#f0f0f0",
              },
              alignSelf: "center",
            }}
            onClick={() => router.push("/cases")}
          >
            VIEW CASE STUDIES
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};
