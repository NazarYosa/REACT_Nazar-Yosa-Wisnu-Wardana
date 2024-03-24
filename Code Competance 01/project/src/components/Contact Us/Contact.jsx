import React, { useState, useEffect } from "react";

function ContactUs() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });

  const [submittedData, setSubmittedData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData((prevState) => [...prevState, formData]);
    setFormData({
      username: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <div className="bg-gray-100 py-16 h-screen pt-48">
        <div className="max-w-3xl mx-auto mt-8">
          <h1 className="text-3xl font-bold text-center mb-4">Contact Us</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="username" className="block font-semibold">
                Username:
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-400"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-semibold">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-400"
              />
            </div>
            <div>
              <label htmlFor="message" className="block font-semibold">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-400"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
          <div className="mt-8">
            {submittedData.map((data, index) => (
              <div
                key={index}
                className="bg-gray-500 p-4 rounded-md mb-4 text-white"
              >
                <h2 className="text-2xl font-bold mb-4">Submitted Data:</h2>
                <p>
                  <span className="font-semibold">Username:</span>{" "}
                  {data.username}
                </p>
                <p>
                  <span className="font-semibold">Email:</span> {data.email}
                </p>
                <p>
                  <span className="font-semibold">Message:</span> {data.message}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
