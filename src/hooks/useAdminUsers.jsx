import { useEffect, useState } from "react";

export const useAdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = localStorage.getItem("token");

  const fetchUsers = () => {
    fetch(`${process.env.REACT_APP_API_URL}/admin/users`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch users");
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Не вдалося завантажити користувачів");
        setLoading(false);
      });
  };

  useEffect(fetchUsers, []);

  const deleteUser = (id) => {
    fetch(`${process.env.REACT_APP_API_URL}/admin/users/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      if (res.ok) {
        setUsers((prev) => prev.filter((user) => user.id !== id));
      } else {
        alert("Помилка при видаленні");
      }
    });
  };

  const changeUserRole = (id, newRole) => {
    fetch(`${process.env.REACT_APP_API_URL}/admin/users/${id}/role`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ role: newRole }),
    }).then((res) => {
      if (res.ok) {
        fetchUsers();
      } else {
        alert("Помилка при зміні ролі");
      }
    });
  };

  return { users, loading, error, deleteUser, changeUserRole };
};
