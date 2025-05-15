import React, { useState } from "react";
import { useCreateTask } from "../../hooks/useCreateTask";
import "./CreateNewForm.css";

function CreateNewForm() {
  const [title, setTitle] = useState("");
  const [points, setPoints] = useState("");
  const [deadline, setDeadline] = useState("");
  const [description, setDescription] = useState("");

  const { createTask, message, setMessage } = useCreateTask();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await createTask({ title, points, deadline, description });

    if (success) {
      setTitle("");
      setPoints("");
      setDeadline("");
      setDescription("");
    }
  };

  return (
    <div className="create-new-container">
      <h2>Створіть нову місію</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Предмет
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="ООП"
            required
          />
        </label>
        <label>
          Максимальна кількість балів
          <input
            type="number"
            value={points}
            onChange={(e) => setPoints(e.target.value)}
            placeholder="20.00"
            required
          />
        </label>
        <label>
          Здати до:
          <input
            type="datetime-local"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            required
          />
        </label>
        <label>
          Опис Місії
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Опишіть місію тут..."
            required
          />
        </label>
        <button type="submit" className="create-new-btn">
          Створити
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default CreateNewForm;
