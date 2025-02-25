"use client";

import React, { useEffect, useRef } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";
import { Navbar } from "../../../components/navbar/Navbar";
import { CaseStudies } from "../../../components/sections/cases/CaseStudies";
import Footer from "../../../components/footer/Footer";

function LiveCodingMatrix() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    const setCanvasSize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = new Array(columns).fill(0);
    const codeChars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-=+{}[]<>?/|";

    function draw() {
      ctx.fillStyle = "rgba(5, 5, 34, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#103309";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = codeChars.charAt(
          Math.floor(Math.random() * codeChars.length)
        );
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += 0.3;
      }
      requestAnimationFrame(draw);
    }

    const animationId = requestAnimationFrame(draw);
    return () => {
      window.removeEventListener("resize", setCanvasSize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
      }}
    />
  );
}

export default function Cases() {
  return (
    <Box sx={{ position: "relative", minHeight: "100vh", overflow: "auto" }}>
      <LiveCodingMatrix />
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <Navbar />
        <CaseStudies />
        <Footer />
      </Box>
    </Box>
  );
}
