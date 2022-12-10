import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import { AppBar, Avatar, Typography, TextField } from "@mui/material";
import decode from "jwt-decode";

import SchoolIcon from "@mui/icons-material/School";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

import * as actionTypes from "../constants/actionTypes";
import { getProfilesBySearch } from "../actions/profiles";

export default function Header() {
  const profiles = useSelector((state) => state.profiles);

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [search, setSearch] = useState("");

  const profile = profiles.find((p) => p.userID === user?.result?._id);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      if (search.trim()) {
        dispatch(getProfilesBySearch({ search }));
        navigate(`/search?searchQuery=${search || "none"}`);
      } else {
        navigate("/");
      }
    }
  };

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
        <TextField
          onKeyDown={handleKeyPress}
          name="search"
          value={search}
          placeholder="Search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          onChange={(e) => setSearch(e.target.value)}
          sx={{
            width: "25rem",
            mr: "4rem",
            background: "#fff",
          }}
        />
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
                src={profile?.avatar}
                sx={{ width: "2.5rem", height: "2.5rem" }}
              >
                <PermIdentityIcon />
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
