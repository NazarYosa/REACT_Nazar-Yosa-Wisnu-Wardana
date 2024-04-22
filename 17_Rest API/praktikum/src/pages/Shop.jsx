import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { checkLogin }  from "../utils/checkLogin";
import axios from "axios";

export default function Shop() {
  const [data, setData] = useState([]);
  const [nama, setNama] = useState("");
  const [umur, setUmur] = useState("");
  const [edit, setEdit] = useState("");
  const link = useRef(null);
  const navigate = useNavigate()

  async function fetchData() {
    const response = await axios.get(import.meta.env.VITE_API_URL);
    setData(response.data);
  }

useEffect(() => {
  fetchData();
  if (!checkLogin()) {
    navigate("/login");
  }
}, []);


  function handleSubmit(e) {
    e.preventDefault();
    if (edit) {
      axios.put(`${import.meta.env.VITE_API_URL}/${edit}`,{ name: nama, age: umur });
    } else {
      axios.post(import.meta.env.VITE_API_URL, { name: nama, age: umur });
    }
    setNama("");
    setUmur("");
  }

  function handleDelete(id) {
    axios.delete(`${import.meta.env.VITE_API_URL}/${id}`);
  }

  function handleEdit(id) {
    const userEdit = data.find(user => user.id === id);
    setNama(userEdit.name);
    setUmur(userEdit.age);
    setEdit(id);
    link.current.scrollIntoView({ behavior: "smooth" }); // Gulir ke atas form
  }

  return (
    <>
      <form action="post" onSubmit={handleSubmit} ref={link} style={{paddingTop: "50px"}}>
        <input
          type="text"
          placeholder="Nama..."
          value={nama}
          onChange={(e) => setNama(e.target.value)}
        />
        <input
          type="number"
          placeholder="Umur..."
          value={umur}
          onChange={(e) => setUmur(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <div style={{display: "flex", flexWrap: "wrap", gap: "50px", paddingTop: "40px"}}>
        {data.map((item) => (
          <div key={item.id} style={{border: "1px solid black", padding: "10px", borderRadius: "10px"}}>
            <p>Nama: {item.name}</p>
            <p>Umur: {item.age}</p>
            <img
              src={item.avatar}
              style={{ width: "150px" }}
              alt={`Avatar of ${item.name}`}
            />
            <button onClick={() => handleDelete(item.id)}>Hapus</button>
            <button onClick={() => handleEdit(item.id)}>Edit</button>
          </div>
        ))}
      </div>
    </>
  );
}