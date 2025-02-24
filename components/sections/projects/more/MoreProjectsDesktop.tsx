import React, { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import StarIcon from "@mui/icons-material/Star";
import Image from "next/image";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const MoreProjectsDesktop = () => {
  const cards = [
    {
      id: 1,
      content: <StarIcon sx={{ color: "#FFFFFF", fontSize: "80px" }} />,
      backgroundColor: "#a81d14",
      textColor: "#FFFFFF",
      description: "YOUNGSTARWORLD",
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
          objectFit="cover"
        />
      ),
      backgroundColor: "#FFFFFF",
      textColor: "#a81d14",
      description: "PolitiMap",
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
          objectFit="cover"
        />
      ),
      backgroundColor: "#fff",
      textColor: "#a81d14",
      description: "GoNext Sports",
      route: "https://gonext-landing.vercel.app/",
    },
  ];

  const cardCount = cards.length;
  const angle = 360 / cardCount;
  const radius = 300;

  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => prev + 1);
  };

  const handlePrev = () => {
    setCurrent((prev) => prev - 1);
  };

  const cardVariants = {
    rest: { y: 0 },
    hover: { y: -20 },
  };

  const textVariants = {
    rest: { y: 0, textShadow: "0px 0px 0px rgba(255,255,255,0)" },
    hover: { y: -20, textShadow: "0px 0px 20px rgba(255,255,255,0.8)" },
  };

  return (
    <Box>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Typography
          align="center"
          sx={{
            color: "white",
            fontWeight: "800",
            marginBottom: 2,
            fontSize: "74px",
            fontStyle: "italic",
          }}
        >
          Want to See More Projects?
        </Typography>
      </motion.div>

      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <Typography
          align="center"
          sx={{
            color: "white",
            fontWeight: 600,
            marginBottom: 4,
            fontSize: "26px",
          }}
        >
          Browse through the carousel and click on any card to visit or learn
          more about each project.
        </Typography>
      </motion.div>

      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <Box
          sx={{
            position: "relative",
            width: "700px",
            height: "600px",
            margin: "0 auto",
            perspective: "1000px",
            overflow: "visible",
          }}
        >
          <motion.div
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              transformStyle: "preserve-3d",
            }}
            animate={{ rotateY: current * angle }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
          >
            {cards.map((card, index) => {
              const cardRotation = index * angle;
              return (
                <Box
                  key={card.id}
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    width: "200px",
                    marginTop: "-150px",
                    marginLeft: "-100px",
                    transform: `rotateY(${cardRotation}deg) translateZ(${radius}px)`,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <motion.div
                    initial="rest"
                    whileHover="hover"
                    style={{ cursor: card.route ? "pointer" : "default" }}
                  >
                    <motion.div
                      onClick={() => {
                        if (card.route) {
                          window.open(card.route, "_blank");
                        }
                      }}
                      variants={cardVariants}
                      transition={{ duration: 0.3 }}
                      style={{
                        width: "200px",
                        height: "300px",
                        borderRadius: "16px",
                        backgroundColor: card.backgroundColor,
                        boxShadow: "-10px 10px 20px rgba(0,0,0,0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {card.content}
                    </motion.div>
                    <motion.div
                      variants={textVariants}
                      transition={{ duration: 0.3 }}
                      style={{ marginTop: "10px" }}
                    >
                      <Typography
                        variant="body1"
                        align="center"
                        sx={{ color: "white", fontWeight: 800 }}
                      >
                        {card.description}
                      </Typography>
                    </motion.div>
                  </motion.div>
                </Box>
              );
            })}
          </motion.div>
          <IconButton
            onClick={handlePrev}
            sx={{
              position: "absolute",
              top: "50%",
              left: "-30px",
              transform: "translateY(-50%)",
              color: "white",
            }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>
          <IconButton
            onClick={handleNext}
            sx={{
              position: "absolute",
              top: "50%",
              right: "-30px",
              transform: "translateY(-50%)",
              color: "white",
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </motion.div>
    </Box>
  );
};
