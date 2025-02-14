"use client";

import { useMediaQuery } from "@mui/material";
import { FeaturedProjectMobile } from "./FeaturedProjectMobile";
import { FeaturedProjectTablet } from "./FeaturedProjectTablet";
import { FeaturedProjectDesktop } from "./FeaturedProjectDesktop";

export const FeaturedProject = () => {
  const isTablet = useMediaQuery((theme) =>
    theme.breakpoints.between("sm", "md"),
  );
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  if (isMobile) return <FeaturedProjectMobile />;
  if (isTablet) return <FeaturedProjectTablet />;
  return <FeaturedProjectDesktop />;
};
