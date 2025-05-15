import { useState } from "react";

export function useCreateTask() {
  const [message, setMessage] = useState("");

  const createTask = async ({ title, points, deadline, description }) => {
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/tasks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title,
          description,
          points: parseFloat(points),
          deadline: new Date(deadline).toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error("Не вдалося створити завдання.");
      }

      setMessage("Місію успішно створено!");
      return true;
    } catch (err) {
      setMessage("Виникла помилка: " + err.message);
      return false;
    }
  };

  return { createTask, message, setMessage };
}
