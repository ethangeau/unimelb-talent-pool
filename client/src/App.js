import React from "react";

import Header from "./components/Header";
import Profiles from "./components/Profiles";
import Container from "@mui/material/Container";

import "./styles.css";

export default function App() {
  return (
    <>
      <Header />
      <Profiles />
    </>
  );
}
