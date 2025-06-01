import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useAdminUsers } from "../../hooks/useAdminUsers";
import EditIcon from "../../assets/Edit.svg";
import DeleteIcon from "../../assets/Delete.svg";
import "./ManageUsersPage.css";

const ManageUsersPage = () => {
  const { users, loading, error, deleteUser, changeUserRole, updateUser } =
    useAdminUsers();
  const [roleModalUser, setRoleModalUser] = useState(null);
  const [editModalUser, setEditModalUser] = useState(null);
  const [newRole, setNewRole] = useState("ROLE_STUDENT");
  const [editForm, setEditForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  if (loading) return <p>Завантаження...</p>;
  if (error) return <p className="error-message">{error}</p>;

  const handleChangeRole = () => {
    if (roleModalUser) {
      changeUserRole(roleModalUser.id, newRole);
      setRoleModalUser(null);
    }
  };

  const handleEditUser = () => {
    if (editModalUser) {
      updateUser(editModalUser.id, editForm);
      setEditModalUser(null);
    }
  };

  const openEditModal = (user) => {
    setEditForm({ name: user.name, email: user.email, password: "" });
    setEditModalUser(user);
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar-container">
        <Sidebar />
      </div>

      <div className="dashboard-container-content">
        <h2>Керування користувачами</h2>
        <table className="user-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Ім’я</th>
              <th>Email</th>
              <th>Ролі</th>
              <th>Дії</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.roles.join(", ")}</td>
                <td className="actions-cell">
                  <button
                    className="btn-icon"
                    title="Редагувати"
                    onClick={() => openEditModal(user)}
                  >
                    <span className="icon">
                      <img src={EditIcon} alt="Edit Users" />
                    </span>
                  </button>
                  <button
                    className="btn-icon"
                    onClick={() => deleteUser(user.id)}
                    title="Видалити"
                  >
                    <span className="icon">
                      <img src={DeleteIcon} alt="Delete Users" />
                    </span>
                  </button>
                  <button
                    className="btn-role"
                    onClick={() => setRoleModalUser(user)}
                  >
                    Змінити роль
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {roleModalUser && (
          <div className="modal-backdrop">
            <div className="modal">
              <h3>Змінити роль для {roleModalUser.name}</h3>
              <select
                value={newRole}
                onChange={(e) => setNewRole(e.target.value)}
              >
                <option value="ROLE_STUDENT">Студент</option>
                <option value="ROLE_TEACHER">Викладач</option>
                <option value="ROLE_ADMIN">Адміністратор</option>
              </select>
              <div className="modal-actions">
                <button onClick={handleChangeRole} className="confirm">
                  Зберегти
                </button>
                <button
                  onClick={() => setRoleModalUser(null)}
                  className="cancel"
                >
                  Скасувати
                </button>
              </div>
            </div>
          </div>
        )}

        {editModalUser && (
          <div className="modal-backdrop">
            <div className="modal">
              <h3>Редагувати дані користувача: {editModalUser.name}</h3>
              <input
                type="text"
                placeholder="Ім’я"
                value={editForm.name}
                onChange={(e) =>
                  setEditForm({ ...editForm, name: e.target.value })
                }
              />
              <input
                type="email"
                placeholder="Email"
                value={editForm.email}
                onChange={(e) =>
                  setEditForm({ ...editForm, email: e.target.value })
                }
              />
              <input
                type="password"
                placeholder="Новий пароль"
                value={editForm.password}
                onChange={(e) =>
                  setEditForm({ ...editForm, password: e.target.value })
                }
              />
              <div className="modal-actions">
                <button onClick={handleEditUser} className="confirm">
                  Зберегти
                </button>
                <button
                  onClick={() => setEditModalUser(null)}
                  className="cancel"
                >
                  Скасувати
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageUsersPage;
