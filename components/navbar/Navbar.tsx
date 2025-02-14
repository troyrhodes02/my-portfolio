"use client";

import React from "react";
import { Stack, useMediaQuery, useTheme } from "@mui/material";
import { NavbarMobile } from "./NavbarMobile";
import { NavbarDesktop } from "./NavbarDesktop";

export const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  return <Stack>{isMobile ? <NavbarMobile /> : <NavbarDesktop />}</Stack>;
};
