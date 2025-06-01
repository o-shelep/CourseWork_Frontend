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

  useEffect(fetchUsers, [token]);

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
    console.log("Зміна ролі:", id, newRole);
    fetch(`${process.env.REACT_APP_API_URL}/admin/users/${id}/role`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ role: newRole }),
    }).then((res) => {
      console.log("Response status:", res.status);
      if (res.ok) {
        fetchUsers();
      } else {
        res.text().then((msg) => {
          console.error("Backend error:", msg);
          alert("Помилка при зміні ролі");
        });
      }
    });
  };

  const updateUser = (id, updatedData) => {
    fetch(`${process.env.REACT_APP_API_URL}/admin/users/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => {
        if (res.ok) {
          fetchUsers();
        } else {
          alert("Помилка при оновленні користувача");
        }
      })
      .catch(() => {
        alert("Помилка при з'єднанні з сервером");
      });
  };

  return { users, loading, error, deleteUser, changeUserRole, updateUser };
};
