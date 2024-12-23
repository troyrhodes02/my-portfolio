"use client";

import { Stack, Typography, Box, Button } from "@mui/material";
import Image from "next/image";

export const Hero = () => {
  return (
    <Stack
      sx={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingX: { xs: "20px", sm: "40px", md: "75px" },
        paddingY: { xs: "50px", sm: "75px", md: "150px" },
      }}
    >
      <Stack
        sx={{
          width: "100%",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: "20px", md: "50px" },
        }}
      >
        <Stack
          sx={{
            width: { xs: "100%", md: "500px" },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              textAlign: { xs: "center", md: "left" },
              color: "white",
              fontSize: { xs: "36px", sm: "48px", md: "72px" },
              fontWeight: 400,
              fontStyle: "italic",
              wordWrap: "break-word",
            }}
          >
            Hi, I'm William Rhodes
          </Typography>
        </Stack>
        <Box
          sx={{
            position: "relative",
            width: { xs: "200px", sm: "250px", md: "400px" },
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
              textAlign: { xs: "center", md: "left" },
              color: "white",
              fontSize: { xs: "28px", sm: "36px", md: "48px" },
              fontWeight: 700,
            }}
          >
            Software Engineer
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "white",
              marginTop: "25px",
              color: "#070735",
              fontWeight: "bold",
              fontSize: { xs: "16px", sm: "20px", md: "24px" },
              textTransform: "none",
              padding: { xs: "8px 16px", md: "10px 20px" },
              borderRadius: "20px",
              "&:hover": {
                backgroundColor: "#f0f0f0",
              },
            }}
          >
            View Resume
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};
