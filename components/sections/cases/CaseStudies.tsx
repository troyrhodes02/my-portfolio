"use client";

import React from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import { CaseStudiesDesktop } from "./CaseStudiesDesktop";
import { CaseStudiesMobile } from "./CaseStudiesMobile";

export const CaseStudies = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return isMobile ? <CaseStudiesMobile /> : <CaseStudiesDesktop />;
};
