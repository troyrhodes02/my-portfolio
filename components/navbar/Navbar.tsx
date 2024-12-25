"use client";

import React from "react";
import { Stack, useMediaQuery, useTheme } from "@mui/material";
import { NavbarMobile } from "./NavbarMobile";
import { NavbarDesktop } from "./NavbarDesktop";
import { useRouter } from "next/navigation";

export const Navbar = () => {
  const router = useRouter();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  return <Stack>{isMobile ? <NavbarMobile /> : <NavbarDesktop />}</Stack>;
};
