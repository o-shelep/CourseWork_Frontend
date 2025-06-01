import { useParams } from "react-router-dom";
import { useTasks } from "./useTasks";
import { useState } from "react";

export const useTaskDetail = () => {
  const { taskId } = useParams();
  const { tasks } = useTasks();
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");

  const task = tasks.find((t) => String(t.id) === taskId);

  const handleSubmit = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/submissions/${taskId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            taskId: Number(taskId),
            content: content,
          }),
        }
      );

      if (response.ok) {
        setMessage("Роботу успішно здано!");
        setContent("");
      } else {
        const errorText = await response.text();
        setMessage(`Помилка: ${errorText}`);
      }
    } catch (error) {
      setMessage("Сталася помилка при надсиланні.");
      console.error(error);
    }
  };

  return {
    task,
    content,
    setContent,
    message,
    handleSubmit,
  };
};
