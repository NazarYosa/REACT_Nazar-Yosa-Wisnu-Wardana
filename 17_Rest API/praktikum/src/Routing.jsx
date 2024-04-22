import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Shop from "./pages/Shop";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

export default function Routing() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/shop" element={<Shop/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
      </Router>
    </>
  );
}
