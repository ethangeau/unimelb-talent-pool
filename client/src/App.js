import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Profiles from "./components/Profiles";
import Auth from "./components/Auth/Auth";
import NotFound from "./components/NotFound";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Profiles />} />
          <Route path="auth" element={<Auth />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
