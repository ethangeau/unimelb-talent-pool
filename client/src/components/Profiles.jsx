import React from "react";
import { Container, Grid, Typography } from "@mui/material";

import Profile from "./Profile";

export default function Profiles() {
  const numOfProfiles = [...Array(16).keys()];
  return (
    <>
      <Container maxWidth="false">
        <Grid container spacing={2}>
          {numOfProfiles.map((profile) => (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2.4} key={profile}>
              <Profile />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
