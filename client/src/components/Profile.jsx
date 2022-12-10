import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Avatar,
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardActions,
  CardContent,
  Container,
  Typography,
} from "@mui/material";

import { updateRecommendations } from "../actions/profiles";

import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LanguageIcon from "@mui/icons-material/Language";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import Recommendations from "./Recommendations";

export default function Profile({ profile }) {
  const user = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
        borderRadius: "15px",
        maxWidth: 360,
        height: 460,
        mx: 1,
        mt: 3,
      }}
      elevation={5}
    >
      <CardHeader
        avatar={
          <Avatar
            size="large"
            src={profile.avatar}
            sx={{ bgcolor: "#023D80", width: "6rem", height: "6rem" }}
          >
            <Typography variant="h4">{profile.firstName[0]}</Typography>
          </Avatar>
        }
        title={`${profile.firstName} ${profile.lastName}`}
        titleTypographyProps={{ variant: "h5" }}
        subheader={profile.role}
        subheaderTypographyProps={{ variant: "subtitle1" }}
      />
      <CardContent sx={{ height: 250, overflow: "auto" }}>
        <Typography variant="body1" gutterBottom color="textSecondary">
          {profile.introduction}
        </Typography>
      </CardContent>
      <Container sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
        <ButtonGroup
          variant="text"
          size="small"
          color="inherit"
          aria-label="contacts"
        >
          <Button onClick={() => window.open(profile.email, "_blank")}>
            <MailOutlineIcon />
          </Button>
          <Button onClick={() => window.open(profile.personalSite, "_blank")}>
            <LanguageIcon />
          </Button>
          <Button onClick={() => window.open(profile.linkedin, "_blank")}>
            <LinkedInIcon />
          </Button>
          <Button onClick={() => window.open(profile.github, "_blank")}>
            <GitHubIcon />
          </Button>
          <Button onClick={() => window.open(profile.instagram, "_blank")}>
            <InstagramIcon />
          </Button>
        </ButtonGroup>
      </Container>

      <CardActions>
        <Button
          size="small"
          color="inherit"
          sx={{
            minWidth: 0,
            textTransform: "none",
            ":disabled": { color: "grey" },
          }}
          disabled={!user?.result}
          onClick={() => dispatch(updateRecommendations(profile._id))}
        >
          <Recommendations profile={profile} />
        </Button>
      </CardActions>
    </Card>
  );
}
