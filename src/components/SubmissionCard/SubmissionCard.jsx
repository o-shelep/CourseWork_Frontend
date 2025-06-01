import React, { useState } from "react";
import "../TaskCard/TaskCard.css";

const SubmissionCard = ({ id, title, description }) => {
  const [submissions, setSubmissions] = useState([]);
  const [showSubmissions, setShowSubmissions] = useState(false);

  const fetchSubmissions = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/submissions/task/${id}`
      );
      const data = await response.json();

      if (Array.isArray(data)) {
        setSubmissions(data);
      } else {
        console.error("Невірний формат відповіді, очікувався масив:", data);
        setSubmissions([]);
      }
    } catch (error) {
      console.error("Помилка при завантаженні сабмішинів:", error);
      setSubmissions([]);
    }
  };

  const handleGrade = async (submissionId, grade) => {
    try {
      const response = await fetch(
        `http://localhost:8080/submissions/${submissionId}/grade?grade=${grade}`,
        { method: "POST" }
      );
      const updated = await response.json();
      setSubmissions((prev) =>
        prev.map((sub) => (sub.id === updated.id ? updated : sub))
      );
    } catch (error) {
      console.error("Помилка при оцінюванні:", error);
    }
  };

  const toggleSubmissions = () => {
    if (!showSubmissions) {
      fetchSubmissions();
    }
    setShowSubmissions(!showSubmissions);
  };

  return (
    <div className="task-card">
      <div className="task-icon">{title}</div>

      <div className="task-content">
        <p className="task-text">{description}</p>
      </div>

      <div className="task-actions">
        <button className="submit-task-btn" onClick={toggleSubmissions}>
          {showSubmissions ? "Сховати подання" : "Переглянути подання"}
        </button>
      </div>

      {showSubmissions && (
        <div className="submission-list">
          <h4>Сабмішини:</h4>
          {submissions.length === 0 ? (
            <p>Немає поданих робіт.</p>
          ) : (
            submissions.map((sub) => (
              <div key={sub.id} className="submission-item">
                <p>
                  <strong>Студент ID:</strong> {sub.userId} <br />
                  <strong>Посилання:</strong>{" "}
                  <a
                    href={sub.content.replace(/"/g, "")}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Відкрити
                  </a>{" "}
                  <br />
                  <strong>Оцінка:</strong> {sub.grade}{" "}
                  {sub.status === "SUBMITTED" && (
                    <>
                      <input
                        type="number"
                        min="0"
                        max="100"
                        placeholder="Оцінка"
                        onChange={(e) => (sub._newGrade = e.target.value)}
                      />
                      <button
                        onClick={() => handleGrade(sub.id, sub._newGrade)}
                      >
                        Оцінити
                      </button>
                    </>
                  )}
                </p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default SubmissionCard;
