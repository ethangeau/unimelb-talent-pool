import React from "react";
import { Container, Grid, Typography } from "@mui/material";

import Profile from "./Profile";
import { dummyUsers } from "../constants/dummyUsers";

export default function Profiles() {
  return (
    <>
      <Container maxWidth="false">
        <Grid container spacing={2}>
          {dummyUsers.map((user) => (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2.4}>
              <Profile key={user._id} user={user} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
