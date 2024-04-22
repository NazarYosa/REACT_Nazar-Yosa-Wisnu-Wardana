import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate()
  function handleClick() {
    navigate("/login")
  }
  return (
    <>
      <h1>Welcome!</h1>
      <button onClick={handleClick}>Next</button>
    </>
  );
}
