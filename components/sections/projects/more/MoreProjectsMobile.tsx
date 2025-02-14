"use client";

import React from "react";
import { Box, Typography, Card, CardActionArea } from "@mui/material";
import Masonry from "@mui/lab/Masonry";
import Image from "next/image";
import StarIcon from "@mui/icons-material/Star";
import { motion } from "framer-motion";

export const MoreProjectsMobile = () => {
  const cards = [
    {
      id: 1,
      content: <StarIcon sx={{ color: "#FFFFFF", fontSize: "80px" }} />,
      backgroundColor: "#a81d14",
      route: "https://youngstarworld.vercel.app",
    },
    {
      id: 2,
      content: (
        <Image
          src="/politimap.png"
          alt="PolitiMap"
          layout="intrinsic"
          width={100}
          height={200}
          objectFit="contain"
        />
      ),
      backgroundColor: "#FFFFFF",
    },
    {
      id: 3,
      content: (
        <Image
          src="/gonext.png"
          alt="GoNext"
          layout="intrinsic"
          width={150}
          height={225}
          objectFit="contain"
        />
      ),
      backgroundColor: "#fff",
      route: "https://gonextsports.com",
    },
  ];

  return (
    <Box sx={{ padding: 2 }}>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
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
          More Projects
        </Typography>
      </motion.div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <Typography
          variant="subtitle1"
          align="center"
          sx={{
            color: "white",
            fontWeight: 600,
            marginBottom: 4,
          }}
        >
          Browse through the projects and tap on any card to visit or learn
          more.
        </Typography>
      </motion.div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <Box sx={{ margin: "0 auto", ml: "15px" }}>
          <Masonry columns={2} spacing={2}>
            {cards.map((card) => (
              <Box key={card.id} sx={{ breakInside: "avoid", marginBottom: 2 }}>
                {card.route ? (
                  <CardActionArea
                    onClick={() => window.open(card.route, "_blank")}
                    sx={{
                      backgroundColor: card.backgroundColor,
                      borderRadius: 2,
                      padding: 2,
                      height: 200,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      overflow: "hidden",
                    }}
                  >
                    {card.content}
                  </CardActionArea>
                ) : (
                  <Card
                    sx={{
                      backgroundColor: card.backgroundColor,
                      borderRadius: 2,
                      padding: 2,
                      height: 200,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      overflow: "hidden",
                    }}
                  >
                    {card.content}
                  </Card>
                )}
              </Box>
            ))}
          </Masonry>
        </Box>
      </motion.div>
    </Box>
  );
};
