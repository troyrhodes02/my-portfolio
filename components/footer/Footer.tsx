import React from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import FooterDesktop from "./FooterDesktop";
import FooterMobile from "./FooterMobile";

export const Footer = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return isDesktop ? <FooterDesktop /> : <FooterMobile />;
};

export default Footer;
