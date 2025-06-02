import React, { useState } from "react";
import "./SubmissionCard.css";
import { useSubmissions } from "../../hooks/useSubmissions";

const SubmissionCard = ({ id, title, description }) => {
  const [showSubmissions, setShowSubmissions] = useState(false);

  const {
    submissions,
    userNames,
    grades,
    setGrades,
    fetchSubmissions,
    handleGrade,
    isLoading,
  } = useSubmissions(id);

  const toggleSubmissions = () => {
    if (!showSubmissions) fetchSubmissions();
    setShowSubmissions(!showSubmissions);
  };

  return (
    <div className="submission-task-card">
      <div className="submission-task-icon">{title}</div>

      <div className="submission-task-content">
        <p className="submission-task-text">{description}</p>
      </div>

      <div className="submission-task-actions">
        <button className="submit-task-btn" onClick={toggleSubmissions}>
          {showSubmissions ? "Сховати подання" : "Переглянути подання"}
        </button>
      </div>

      {showSubmissions && (
        <div className="submission-list">
          <h4>Сабмішини:</h4>
          {isLoading ? (
            <p>Завантаження...</p>
          ) : submissions.length === 0 ? (
            <p>Немає поданих робіт.</p>
          ) : (
            <table className="submission-table">
              <thead>
                <tr>
                  <th>Студент</th>
                  <th>Робота</th>
                  <th>Оцінка</th>
                  <th>Статус</th>
                </tr>
              </thead>
              <tbody>
                {submissions.map((sub) => (
                  <tr key={sub.id}>
                    <td>{userNames[sub.userId] || "Завантаження..."}</td>
                    <td>
                      {(() => {
                        try {
                          const parsed = JSON.parse(sub.content);
                          return (
                            <span>
                              {parsed.content || JSON.stringify(parsed)}
                            </span>
                          );
                        } catch {
                          return (
                            <span>{sub.content.replace(/^"|"$/g, "")}</span>
                          );
                        }
                      })()}
                    </td>
                    <td>
                      {sub.status === "SUBMITTED" ? (
                        <div className="grade-input-inline">
                          <input
                            type="number"
                            min="0"
                            max="100"
                            placeholder="Оцінка"
                            value={grades[sub.id] || ""}
                            onChange={(e) =>
                              setGrades((prev) => ({
                                ...prev,
                                [sub.id]: e.target.value,
                              }))
                            }
                          />
                          <button
                            onClick={() => handleGrade(sub.id, grades[sub.id])}
                          >
                            Оцінити
                          </button>
                        </div>
                      ) : (
                        sub.grade ?? "—"
                      )}
                    </td>
                    <td>{sub.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
};

export default SubmissionCard;
