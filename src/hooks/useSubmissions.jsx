import { useState } from "react";

export const useSubmissions = (taskId) => {
  const [submissions, setSubmissions] = useState([]);
  const [userNames, setUserNames] = useState({});
  const [grades, setGrades] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const token = localStorage.getItem("token");

  const fetchUserName = async (userId) => {
    if (userNames[userId] || !token) return;

    try {
      const res = await fetch(`http://localhost:8080/admin/users/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.ok) {
        const data = await res.json();
        setUserNames((prev) => ({ ...prev, [userId]: data.name }));
      } else {
        console.error(`Помилка при запиті імені юзера ${userId}`);
      }
    } catch (err) {
      console.error("Помилка при запиті юзера:", err);
    }
  };

  const fetchSubmissions = async () => {
    if (!token) return;
    setIsLoading(true);

    try {
      const response = await fetch(
        `http://localhost:8080/submissions/task/${taskId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const data = await response.json();

      if (Array.isArray(data)) {
        setSubmissions(data);
        const uniqueUserIds = [...new Set(data.map((s) => s.userId))];
        uniqueUserIds.forEach(fetchUserName);
      } else {
        setSubmissions([]);
      }
    } catch (err) {
      console.error("Помилка при запиті сабмішинів:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGrade = async (submissionId, grade) => {
    if (!token) return;

    try {
      const res = await fetch(
        `http://localhost:8080/submissions/${submissionId}/grade?grade=${grade}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!res.ok) {
        const errData = await res.json();
        console.error("Помилка при оцінюванні:", errData);
      } else {
        console.log("Успішно оцінено!");
      }
    } catch (err) {
      console.error("Fetch помилка:", err);
    }
  };

  return {
    submissions,
    userNames,
    grades,
    setGrades,
    fetchSubmissions,
    handleGrade,
    isLoading,
  };
};
