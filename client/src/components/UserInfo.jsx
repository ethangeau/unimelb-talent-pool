import React, { useState } from "react";
import { Avatar, Button, Paper, Grid, Container } from "@mui/material";
import { useDispatch } from "react-redux";
import { createProfile, updateProfile } from "../actions/profiles";

import FileBase from "react-file-base64";
import Input from "./Auth/Input";

const initialProfileData = {
  avatar: "",
  firstName: "",
  lastName: "",
  role: "",
  introduction: "",
  email: "",
  personalSite: "",
  linkedin: "",
  github: "",
  instagram: "",
};

export default function UserInfo() {
  const userProfile = null;
  const hasInfo = false;
  const [formData, setFormData] = useState(
    userProfile ? userProfile : initialProfileData
  );

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userProfile) {
      dispatch(updateProfile(userProfile._id, formData));
    } else {
      dispatch(createProfile(formData));
    }
    // Can't figure out why this is not working
    clearFormData();
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const clearFormData = () => {
    setFormData(initialProfileData);
  };

  return (
    <Container maxWidth="md">
      <Paper
        elevation={3}
        sx={{
          mt: 2,
          p: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <form onSubmit={handleSubmit}>
          <Grid container spacing={1}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                width: "100%",
                margin: "1rem",
              }}
            >
              <Avatar
                sx={{
                  mr: 2,
                  bgcolor: "#023D80",
                  width: "6rem",
                  height: "6rem",
                }}
              >
                A
              </Avatar>
              <FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }) =>
                  setFormData({ ...formData, avatar: base64 })
                }
              />
            </div>
            <Input
              name="firstName"
              label="First Name"
              handleChange={handleChange}
              autoFocus
              isHalf
              required
            />
            <Input
              name="lastName"
              label="Last Name"
              handleChange={handleChange}
              isHalf
              required
            />
            <Input
              name="role"
              label="Role"
              handleChange={handleChange}
              isHalf
              required
            />
            <Input
              name="email"
              label="Email"
              handleChange={handleChange}
              isHalf
              required
            />
            <Input
              name="introduction"
              label="Introduction"
              handleChange={handleChange}
              multiline
              required
            />
            <Input
              name="personalSite"
              label="Personal Site"
              handleChange={handleChange}
              isHalf
            />
            <Input
              name="linkedin"
              label="Linkedin"
              handleChange={handleChange}
              isHalf
            />
            <Input
              name="github"
              label="Github"
              handleChange={handleChange}
              isHalf
            />
            <Input
              name="instagram"
              label="Instagram"
              handleChange={handleChange}
              isHalf
            />
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ backgroundColor: "#023D80", mt: 2 }}
          >
            {hasInfo ? "Reset/Delete" : "Submit"}
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
