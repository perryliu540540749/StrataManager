"use client";

import { useState } from "react";

export default function Report() {
  const [unit, setUnit] = useState("");
  const [issue, setIssue] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/report-issue", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ unit, issue }),
      });
      if (response.redirected) {
        setMessage("Issue reported successfully! Redirected to /report");
        return;
      }
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error("Error submitting issue:", error);
      const errorMessage = error instanceof Error ? error.message : String(error);
      setMessage("Failed to submit issue: " + errorMessage);
    }
  };

  const handleGet = async () => {
    try {
      const response = await fetch(`/api/report-issue?unit=${unit}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error("Error checking status:", error);
      const errorMessage = error instanceof Error ? error.message : String(error);
      setMessage("Failed to check status: " + errorMessage);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Report an Issue</h1>
      <form onSubmit={handleSubmit} style={{ margin: "20px 0" }}>
        <div>
          <label style={{ marginRight: "10px" }}>Unit:</label>
          <input
            type="text"
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            placeholder="e.g., unit-101"
            style={{ padding: "5px", margin: "5px" }}
          />
        </div>
        <div>
          <label style={{ marginRight: "10px" }}>Issue:</label>
          <input
            type="text"
            value={issue}
            onChange={(e) => setIssue(e.target.value)}
            placeholder="e.g., Leaking pipe"
            style={{ padding: "5px", margin: "5px" }}
          />
        </div>
        <button
          type="submit"
          style={{ padding: "10px", backgroundColor: "blue", color: "white", border: "none" }}
        >
          Submit (POST)
        </button>
        <button
          type="button"
          onClick={handleGet}
          style={{ padding: "10px", backgroundColor: "green", color: "white", border: "none", marginLeft: "10px" }}
        >
          Check Status (GET)
        </button>
      </form>
      {message && <p style={{ color: "green" }}>{message}</p>}
    </div>
  );
}
