"use client";

import React from "react";
import { useMediaQuery } from "@mui/material";
import { SkillsOverviewDesktop } from "./SkillsOverviewDesktop";
import { SkillsOverviewMobile } from "./SkillsOverviewMobile";

export const SkillsOverview = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return isMobile ? <SkillsOverviewMobile /> : <SkillsOverviewDesktop />;
};

