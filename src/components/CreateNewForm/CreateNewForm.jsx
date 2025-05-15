import React from "react";
import "./CreateNewForm.css";
function CreateNewForm() {
  return (
    <div className="create-new-container">
      <h2>Create a new task</h2>
      <form className="form">
        <label>
          Subject
          <input type="text" placeholder="OOP" />
        </label>
        <label>
          Maximum number of points student a can get
          <input type="text" placeholder="OOP" />
        </label>
        <label>
          Type of submission
          <input type="text" placeholder="Text" />
        </label>
        <label>
          Deadline
          <input type="text" placeholder="23.04.2024, 12.00 a. m." />
        </label>
        <label>
          Task Description
          <textarea placeholder="Describe your task here..." />
        </label>
        <button type="submit" className="create-new-btn">
          Create
        </button>
      </form>
    </div>
  );
}

export default CreateNewForm;
