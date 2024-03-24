import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./pages/Hero Section/Hero.jsx";
import About from "./pages/About Us/About.jsx";
import Contact from "./pages/Contact Us/Contact.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={Hero}></Route>
          <Route path="/about" Component={About}></Route>
          <Route path="/contact" Component={Contact}></Route>
          <Route path="*" Component={NotFound}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
