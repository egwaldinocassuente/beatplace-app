import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../app/pages/Home";

export default function RoutesConfig() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
