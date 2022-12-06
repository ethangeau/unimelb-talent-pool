import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import { AppBar, Avatar, Typography } from "@mui/material";
import decode from "jwt-decode";

import SchoolIcon from "@mui/icons-material/School";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";

import * as actionTypes from "../constants/actionTypes";

export default function Header() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    dispatch({ type: actionTypes.LOGOUT });

    navigate("/auth");

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

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
        {user?.result ? (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Link to="/userinfo">
              <Avatar
                size="small"
                src={user.avatar}
                sx={{ width: "2.5rem", height: "2.5rem" }}
              >
                <InsertEmoticonIcon />
              </Avatar>
            </Link>
            <Typography
              onClick={logout}
              variant="h5"
              sx={{
                ml: "1rem",
                mr: "2rem",
                color: "#fff",
                textDecoration: "none",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Logout
            </Typography>
          </div>
        ) : (
          <div>
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
          </div>
        )}
      </AppBar>
      <Outlet />
    </>
  );
}
