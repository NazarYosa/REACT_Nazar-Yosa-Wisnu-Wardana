import React, { useState } from "react";

export default function OpenAIExample() {
  const [respond, setRespond] = useState();
  const [prompt, setPrompt] = useState("");
  const [isSubmit, setIsSubmit] = useState(false)

  const API_KEY = import.meta.env.VITE_API_KEY;

  async function handleSubmit(e) {
    setIsSubmit(true)
    e.preventDefault();
    const ApiBody = {
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
    };

    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + API_KEY,
          },
          body: JSON.stringify(ApiBody),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch");
      }

      const data = await response.json();
      setRespond(data.choices[0].message.content);
      setPrompt("")
      setIsSubmit(false);
    } catch (error) {
      console.error("Error:", error);
      setRespond("An error occurred while fetching the response.");
      setIsSubmit(false);
    }
  }

  return (
    <div className="bg-gray-100 p-8 min-h-screen flex flex-col justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg flex flex-col gap-4"
      >
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ask your question..."
          className="p-4 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className={`py-2 px-4 rounded transition duration-300 ${
            isSubmit
              ? "bg-gray-400 text-white cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
          disabled={isSubmit}
        >
          {isSubmit ? "Sending..." : "Send"}
        </button>
      </form>

      {respond && (
        <div className="mt-6 bg-white p-4 rounded shadow-lg w-full max-w-lg">
          <p className="text-gray-800">{respond}</p>
        </div>
      )}
    </div>
  );
}
