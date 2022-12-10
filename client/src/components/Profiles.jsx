import React from "react";
import { useSelector } from "react-redux";
import { Container, Grid } from "@mui/material";

import Profile from "./Profile";
// import { dummyUsers } from "../constants/dummyUsers";

export default function Profiles() {
  const profiles = useSelector((state) => state.profiles);
  console.log("profiles", profiles);
  return (
    <>
      <Container maxWidth="false">
        <Grid container spacing={2}>
          {profiles.map((profile) => (
            <Grid item key={profile._id} xs={12} sm={6} md={4} lg={3} xl={2.4}>
              <Profile key={profile._id} profile={profile} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
