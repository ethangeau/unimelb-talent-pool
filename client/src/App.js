import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Profiles from "./components/Profiles";
import Auth from "./components/Auth/Auth";
import NotFound from "./components/NotFound";
import UserInfo from "./components/UserInfo";
import { getProfiles } from "./actions/profiles";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfiles());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Profiles />} />
          <Route path="search" element={<Profiles />} />
          <Route path="auth" element={<Auth />} />
          <Route path="userinfo" element={<UserInfo />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
