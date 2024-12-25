"use client";

import React from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import { SkillsOverviewDesktop } from "./SkillsOverviewDesktop";
import { SkillsOverviewMobile } from "./SkillsOverviewMobile";

export const SkillsOverview = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  return isMobile ? <SkillsOverviewMobile /> : <SkillsOverviewDesktop />;
};
