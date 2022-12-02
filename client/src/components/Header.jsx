import React from "react";
import { Link, Outlet } from "react-router-dom";
import { AppBar, Typography } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";

export default function Header() {
  return (
    <>
      <AppBar
        position="static"
        sx={{
          bgcolor: "#023D80",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: 5,
          height: "5rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <SchoolIcon
            sx={{ fontSize: 40, color: "#fff", marginLeft: "1rem" }}
          />
          <Typography
            component={Link}
            to="/"
            variant="h5"
            sx={{
              ml: "1rem",
              color: "#fff",
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            Unimelb Talent Pool
          </Typography>
        </div>
        <Typography variant="h5">Search</Typography>

        <Typography
          component={Link}
          to="/auth"
          variant="h5"
          sx={{
            mr: "2rem",
            color: "#fff",
            textDecoration: "none",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          Sign in/up
        </Typography>
      </AppBar>
      <Outlet />
    </>
  );
}
