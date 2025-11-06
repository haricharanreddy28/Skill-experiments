import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [feedbacks, setFeedbacks] = useState([]);

  const fetchFeedback = async () => {
    const res = await axios.get("http://localhost:5000/api/feedback");
    setFeedbacks(res.data);
  };

  useEffect(() => {
    fetchFeedback();
    const interval = setInterval(fetchFeedback, 3000); // refresh every 3s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container" style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
      <h1 style={{ textAlign: "center" }}>Feedback Form</h1>
      <FeedbackForm onSubmitSuccess={fetchFeedback} />
      <h2 style={{ marginTop: 30 }}>All Feedback</h2>
      <FeedbackList feedbacks={feedbacks} />
    </div>
  );
}

export default App;