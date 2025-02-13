"use client";
import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Stack,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useRouter } from "next/navigation";

const NavigationButton = styled(Button)(({ theme }) => ({
  fontSize: 16,
  letterSpacing: 1,
  color: "white",
  textTransform: "uppercase",
  backgroundColor: "transparent",
  position: "relative",
  transition: "opacity 0.3s ease-in-out",
  "&:hover": {
    backgroundColor: "transparent",
    opacity: 0.7,
  },
  "&:after": {
    content: '""',
    position: "absolute",
    left: 0,
    bottom: -2,
    height: 2,
    width: 0,
    backgroundColor: theme.palette.primary.main,
    transition: "width 0.3s ease-in-out",
  },
  "&:hover:after": {
    width: "100%",
  },
}));

export const NavbarDesktop = () => {
  const router = useRouter();
  const theme = useTheme();
  const isSmallerScreen = useMediaQuery(theme.breakpoints.down("lg"));

  const handleNavigation = (path: string) => () => {
    if (path.startsWith("/#")) {
      const elementId = path.substring(2);
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    router.push(path);
  };

  return (
    <AppBar
      position="static"
      sx={{
        boxShadow: "none",
        background: "transparent",
        height: "80px",
        display: "flex",
        justifyContent: "center",
        transition: "background-color 0.3s ease",
        alignItems: "center",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: isSmallerScreen ? "0 20px" : "0 80px",
        }}
      >
        <Stack direction="row" spacing={isSmallerScreen ? 2 : 5}>
          <NavigationButton onClick={handleNavigation("/#casestudy")}>
            Case Studies
          </NavigationButton>
          <NavigationButton onClick={handleNavigation("/#skills")}>
            Skills
          </NavigationButton>
          <NavigationButton onClick={handleNavigation("/#home")}>
            Home
          </NavigationButton>
          <NavigationButton onClick={handleNavigation("/projects")}>
            Projects
          </NavigationButton>
          <NavigationButton onClick={handleNavigation("/#contact")}>
            Contact
          </NavigationButton>
          <NavigationButton onClick={handleNavigation("/#about")}>
            About
          </NavigationButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
