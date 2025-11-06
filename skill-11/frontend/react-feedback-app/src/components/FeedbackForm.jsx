import { useState } from "react";
import axios from "axios";

const FeedbackForm = ({ onSubmitSuccess }) => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!name || !comment) {
      setError("All fields are required");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/feedback", { name, comment });
      setName("");
      setComment("");
      onSubmitSuccess();
    } catch (err) {
      setError("Error submitting feedback");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        background: "#f8f9fa",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: "10px" }}
      />
      <textarea
        placeholder="Enter your comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        style={{ padding: "10px" }}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button
        type="submit"
        style={{
          background: "#007bff",
          color: "white",
          padding: "10px",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Submit
      </button>
    </form>
  );
};

export default FeedbackForm;