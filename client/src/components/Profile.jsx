import React, { useState } from "react";
import {
  Avatar,
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardActions,
  CardContent,
  Typography,
  Container,
} from "@mui/material";

import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LanguageIcon from "@mui/icons-material/Language";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

export default function Profile() {
  const [recommended, setRecommended] = useState(false);

  const handleRecommended = () => {
    setRecommended(!recommended);
  };

  return (
    <Card sx={{ maxWidth: 360, mx: 1, mt: 3 }} elevation={5}>
      <CardHeader
        avatar={
          <Avatar
            size="large"
            sx={{ bgcolor: "#023D80", width: "6rem", height: "6rem" }}
          >
            E
          </Avatar>
        }
        title="Ethan Ge"
        titleTypographyProps={{ variant: "h5" }}
      />
      <CardContent>
        <Typography variant="h6" gutterBottom color="text.secondary">
          Software Engineer
        </Typography>
        <Typography variant="body1" gutterBottom color="textSecondary">
          This is my introduction, I am a student at the University of
          Melbourne, I am studying Master of Information Technology and I am
          looking for a software engineer role. This is my introduction, I am a
          student at the University of Melbourne, I am studying Master of
          Information Technology and I am looking for a software engineer role.
        </Typography>
      </CardContent>
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <ButtonGroup
          variant="text"
          size="small"
          color="inherit"
          aria-label="contacts"
        >
          <Button onClick={() => {}}>
            <MailOutlineIcon />
          </Button>
          <Button onClick={() => {}}>
            <LanguageIcon />
          </Button>
          <Button onClick={() => {}}>
            <LinkedInIcon />
          </Button>
          <Button onClick={() => {}}>
            <GitHubIcon />
          </Button>
          <Button onClick={() => {}}>
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
          2 recommendations
        </Typography>
      </CardActions>
    </Card>
  );
}
