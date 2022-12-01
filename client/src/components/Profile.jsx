import React, { useState } from "react";
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

import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LanguageIcon from "@mui/icons-material/Language";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

export default function Profile({ user }) {
  console.log(user.email);
  const [recommended, setRecommended] = useState(false);

  const handleRecommended = () => {
    setRecommended(!recommended);
  };

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
        borderRadius: "15px",
        maxWidth: 360,
        height: 500,
        mx: 1,
        mt: 3,
      }}
      elevation={5}
    >
      <CardHeader
        avatar={
          <Avatar
            size="large"
            sx={{ bgcolor: "#023D80", width: "6rem", height: "6rem" }}
          >
            E
          </Avatar>
        }
        title={`${user.first_name} ${user.last_name}`}
        titleTypographyProps={{ variant: "h5" }}
        subheader={user.role}
        subheaderTypographyProps={{ variant: "subtitle1" }}
      />
      <CardContent sx={{ height: 250, overflow: "auto" }}>
        <Typography variant="body1" gutterBottom color="textSecondary">
          {user.introduction}
        </Typography>
      </CardContent>
      <Container sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
        <ButtonGroup
          variant="text"
          size="small"
          color="inherit"
          aria-label="contacts"
        >
          <Button onClick={() => window.open(user.email, "_blank")}>
            <MailOutlineIcon />
          </Button>
          <Button onClick={() => window.open(user.personalSite, "_blank")}>
            <LanguageIcon />
          </Button>
          <Button onClick={() => window.open(user.linkedin, "_blank")}>
            <LinkedInIcon />
          </Button>
          <Button onClick={() => window.open(user.github, "_blank")}>
            <GitHubIcon />
          </Button>
          <Button onClick={() => window.open(user.instagram, "_blank")}>
            <InstagramIcon />
          </Button>
        </ButtonGroup>
      </Container>

      <CardActions>
        <Button
          size="small"
          color="inherit"
          sx={{ minWidth: 0 }}
          onClick={handleRecommended}
        >
          {recommended ? <ThumbUpIcon /> : <ThumbUpOffAltIcon />}
        </Button>
        <Typography variant="body2" color="inherit">
          {user.recommendations} recommendations
        </Typography>
      </CardActions>
    </Card>
  );
}
