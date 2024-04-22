import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const dummyAcces = { username: "admin", password: "admin" };
    if (username === dummyAcces.username && password === dummyAcces.password) {
      localStorage.setItem("user", JSON.stringify(dummyAcces)); // "user" itu key, kanan user, adalah value nya
      localStorage.setItem("isLoggedIn", true);
      navigate("/shop");
    } else {
      setErrorMessage("error bos");
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="username"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
    </>
  );
}
