"use client";

import React from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import { MoreProjectsDesktop } from "./MoreProjectsDesktop";
import { MoreProjectsMobile } from "./MoreProjectsMobile";

export const MoreProjects = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return isMobile ? <MoreProjectsMobile /> : <MoreProjectsDesktop />;
};
