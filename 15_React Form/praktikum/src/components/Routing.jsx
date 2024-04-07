import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import CreateProduct from "./CreateProduct"
import Profile from "./Profile.jsx"


export default function Routing() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={LandingPage} />
        <Route path="/create-product" Component={CreateProduct} />
        <Route path="/create-product/:id" Component={Profile} />
      </Routes>
    </Router>
  );
}
