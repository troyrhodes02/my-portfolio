"use client";
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  styled,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/navigation";

const NavigationButton = styled(ListItemButton)(({ theme }) => ({
  textTransform: "uppercase",
  color: "white",
  "&:hover": {
    backgroundColor: "transparent",
    color: theme.palette.primary.main,
  },
}));

export const NavbarMobile = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const router = useRouter();

  const handleNavigation = (path: string) => () => {
    setDrawerOpen(false);
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
      position="fixed"
      sx={{
        boxShadow: "none",
        background: "transparent",
        height: "60px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 16px",
        }}
      >
        <Box>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Box>
        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          sx={{
            "& .MuiDrawer-paper": {
              backgroundColor: "#09092C",
              color: "white",
            },
          }}
        >
          <List>
            <ListItem disablePadding>
              <NavigationButton onClick={handleNavigation("/#projects")}>
                Resume
              </NavigationButton>
            </ListItem>
            <ListItem disablePadding>
              <NavigationButton onClick={handleNavigation("/#skills")}>
                Skills
              </NavigationButton>
            </ListItem>
            <ListItem disablePadding>
              <NavigationButton onClick={handleNavigation("/#home")}>
                Home
              </NavigationButton>
            </ListItem>
            <ListItem disablePadding>
              <NavigationButton onClick={handleNavigation("/#about")}>
                Projects
              </NavigationButton>
            </ListItem>
            <ListItem disablePadding>
              <NavigationButton onClick={handleNavigation("/#contact")}>
                About
              </NavigationButton>
            </ListItem>
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};
