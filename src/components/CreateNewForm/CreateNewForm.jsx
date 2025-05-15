import React from "react";
import "./CreateNewForm.css";
function CreateNewForm() {
  return (
    <div className="create-new-container">
      <h2>Створіть нову місію</h2>
      <form className="form">
        <label>
          Предмет
          <input type="text" placeholder="ООП" />
        </label>
        <label>
          Максимальна кількість балів, яку може отримати студент
          <input type="text" placeholder="20.00" />
        </label>
        <label>
          Здати до:
          <input type="text" placeholder="23.04.2024, 12.00 a. m." />
        </label>
        <label>
          Опис Місії
          <textarea placeholder="Опишіть місію тут..." />
        </label>
        <button type="submit" className="create-new-btn">
          Створити
        </button>
      </form>
    </div>
  );
}

export default CreateNewForm;
