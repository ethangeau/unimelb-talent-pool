import React, { useState, useEffect } from "react";

import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from "@mui/material";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import Input from "./Input";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function Auth() {
  const [formState, setFormState] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = () => {};
  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleIsSignup = () => {
    setFormState(initialState);
    setIsSignup(!isSignup);
    console.log("initialState", initialState);
    // form state is not reset to initialState
    console.log("formState", formState);
    setShowPassword(false);
  };

  return (
    <Container maxWidth="xs">
      <Paper
        elevation={3}
        sx={{
          mt: 3,
          p: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, backgroundColor: "#023D80" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography gutterBottom variant="h5">
          {isSignup ? "Sign up" : "Sign in"}
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                />
              </>
            )}
            <Input
              name="email"
              label="Email"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignup && (
              <Input
                name="confirmPassword"
                label="Confirm Password"
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ backgroundColor: "#023D80", mt: 2 }}
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>
          <Button
            fullWidth
            onClick={handleIsSignup}
            color="inherit"
            sx={{
              mt: 1,
              textTransform: "none",
              fontSize: "1rem",
            }}
          >
            {isSignup
              ? "Already have an account? Sign in"
              : "Don't have an account? Sign Up"}
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
