import React from "react";

import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";

export default function Recommendations({ profile }) {
  const user = JSON.parse(localStorage.getItem("profile"));

  if (profile.recommendations.length > 0) {
    return profile.recommendations.find(
      (recommendation) => recommendation === user?.result?._id
    ) ? (
      <>
        <ThumbUpIcon fontSize="small" />
        &nbsp;
        {profile.recommendations.length} people recommended
      </>
    ) : (
      <>
        <ThumbUpOffAltIcon fontSize="small" />
        &nbsp;
        {profile.recommendations.length} people recommended
      </>
    );
  }
  return (
    <>
      <ThumbUpOffAltIcon fontSize="small" />
    </>
  );
}
