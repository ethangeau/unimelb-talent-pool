import React, { useState } from "react";
import { Avatar, Button, Paper, Grid, Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  createProfile,
  updateProfile,
  deleteProfile,
} from "../actions/profiles";

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
  userID: "",
};

export default function UserInfo() {
  const user = JSON.parse(localStorage.getItem("profile"));

  const userProfile = useSelector((state) =>
    state.profiles.find((p) => p.userID === user.result._id)
  );

  const [formData, setFormData] = useState(
    userProfile ? userProfile : initialProfileData
  );
  console.log("formData", formData);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      userID: user.userID,
      [e.target.name]: e.target.value,
    });
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
              src={formData.avatar}
              sx={{
                mr: 2,
                bgcolor: "#023D80",
                width: "6rem",
                height: "6rem",
              }}
            >
              {formData.firstName.toUpperCase().charAt(0)}
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
            defaultValue={formData.firstName}
          />
          <Input
            name="lastName"
            label="Last Name"
            handleChange={handleChange}
            isHalf
            required
            defaultValue={formData.lastName}
          />
          <Input
            name="role"
            label="Role"
            handleChange={handleChange}
            isHalf
            required
            defaultValue={formData.role}
          />
          <Input
            name="email"
            label="Email"
            handleChange={handleChange}
            isHalf
            required
            defaultValue={formData.email}
          />
          <Input
            name="introduction"
            label="Introduction"
            handleChange={handleChange}
            multiline
            required
            defaultValue={formData.introduction}
          />
          <Input
            name="personalSite"
            label="Personal Site"
            handleChange={handleChange}
            isHalf
            defaultValue={formData.personalSite}
          />
          <Input
            name="linkedin"
            label="Linkedin"
            handleChange={handleChange}
            isHalf
            defaultValue={formData.linkedin}
          />
          <Input
            name="github"
            label="Github"
            handleChange={handleChange}
            isHalf
            defaultValue={formData.github}
          />
          <Input
            name="instagram"
            label="Instagram"
            handleChange={handleChange}
            isHalf
            defaultValue={formData.instagram}
          />
        </Grid>
        {userProfile ? (
          <>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ backgroundColor: "#023D80", mt: 2 }}
              onClick={() => {
                dispatch(updateProfile(userProfile._id, formData));
                navigate("/");
              }}
            >
              Resubmit
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="warning"
              sx={{ mt: 2 }}
              onClick={() => {
                dispatch(deleteProfile(userProfile._id));
                navigate("/");
              }}
            >
              Delete Profile
            </Button>
          </>
        ) : (
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ backgroundColor: "#023D80", mt: 2 }}
            onClick={() => {
              dispatch(createProfile(formData));
              navigate("/");
            }}
          >
            Submit
          </Button>
        )}
      </Paper>
    </Container>
  );
}
