import React from "react";
import { Container, Grid, Typography } from "@mui/material";

import Profile from "./Profile";

export default function Profiles() {
  const numOfProfiles = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <Container>
        <Grid container spacing={2}>
          {numOfProfiles.map((profile) => (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={profile}>
              <Profile />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
