import React from "react";
import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { styled } from "@mui/system";

import { Actors, MovieInformation, Movies, NavBar, Profile } from "./";

const Root = styled("div")({
  display: "flex",
  height: "100%",
});

//Toolbar
const Toolbar = styled("div")({
  height: "70px",
});

//content
const Content = styled("main")({
  flexGrow: 1,
  padding: "2em",
});

function App() {
  return (
    <Root>
      <CssBaseline />
      <NavBar />
      <Content>
        <Toolbar />
        <Routes>
          <Route path="/movie/:id" element={<MovieInformation />} />
          <Route path="/actors/:id" element={<Actors />} />
          <Route path="/" element={<Movies />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </Content>
    </Root>
  );
}

export default App;
