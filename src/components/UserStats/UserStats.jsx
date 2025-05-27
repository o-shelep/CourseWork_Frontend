import React, { useState } from "react";
import arrowIcon from "../../assets/Arrow.svg";
import "./UserStats.css";
import { useUserProfile } from "../../hooks/useUserProfile";
import { getMainRole } from "../../utils/roleUtils";

const ConfirmationModal = ({ message, onConfirm, onCancel }) => (
  <div className="modal-overlay">
    <div className="modal">
      <p>{message}</p>
      <div className="modal-buttons">
        <button className="confirm-button" onClick={onConfirm}>
          Так
        </button>
        <button className="cancel-button" onClick={onCancel}>
          Скасувати
        </button>
      </div>
    </div>
  </div>
);

const UserStats = () => {
  const [modalData, setModalData] = useState({
    visible: false,
    message: "",
    onConfirm: null,
  });

  const token = localStorage.getItem("token");
  const { user, loading, error } = useUserProfile(token);

  if (loading) return <p>Завантаження...</p>;
  if (error) return <p>Помилка: {error}</p>;
  if (!user) return <p>Користувача не знайдено.</p>;

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  const openGitHub = () => {
    window.location.href = "https://github.com/o-shelep/CourseWork_Frontend";
  };

  return (
    <div className="user-info-container">
      <div className="user-info-scrollable">
        <h2 className="statistic-title">Статистика</h2>

        <div className="achievement-circle">
          <span className="achievement-number">{user.level}</span>
        </div>
        <div className="heading-container">
          <h3 className="user-greeting">Привіт, {user.name}</h3>
          <p className="achievement-text">Продовжуйте відкривати досягнення!</p>
        </div>

        <div className="divider"></div>

        <div className="achievements-section">
          <h4 className="section-title">Відкриті досягнення</h4>
          <div className="achievements">
            {user.achievements.length > 0 ? (
              user.achievements.map((ach, idx) => (
                <button key={idx} className="achievement active">
                  {ach}
                </button>
              ))
            ) : (
              <p>Поки немає досягнень</p>
            )}
          </div>
        </div>

        <div className="info-section">
          <p>
            <strong>Твої Бали</strong>{" "}
            <span className="points">{user.points}</span>
          </p>
          <p>
            <strong>Роль</strong>{" "}
            <span className="role">{getMainRole(user.roles)}</span>
          </p>
        </div>
      </div>

      <div className="buttons-section">
        <button
          className="info-button"
          onClick={() =>
            setModalData({
              visible: true,
              message:
                "Щоб дізнатись більше про нас, прочитайте README.md. Перейти до GitHub репозиторію?",
              onConfirm: openGitHub,
            })
          }
        >
          Дізнатись більше <img src={arrowIcon} alt="Arrow" />
        </button>
        <button
          className="info-button"
          onClick={() =>
            setModalData({
              visible: true,
              message:
                "Для допомоги скористайтесь README.md. Перейти до GitHub репозиторію?",
              onConfirm: openGitHub,
            })
          }
        >
          Допомога <img src={arrowIcon} alt="Arrow" />
        </button>
        <button
          className="info-button"
          onClick={() =>
            setModalData({
              visible: true,
              message:
                "Ця дія доступна лише адміністратору. Ви хочете зв'язатись з адміністратором?",
              onConfirm: openGitHub,
            })
          }
        >
          Змінити роль <img src={arrowIcon} alt="Arrow" />
        </button>
        <button
          className="info-button"
          onClick={() =>
            setModalData({
              visible: true,
              message: "Ви впевнені, що хочете вийти?",
              onConfirm: handleLogout,
            })
          }
        >
          Вийти з системи <img src={arrowIcon} alt="Arrow" />
        </button>
      </div>

      {modalData.visible && (
        <ConfirmationModal
          message={modalData.message}
          onConfirm={() => {
            modalData.onConfirm();
            setModalData({ visible: false, message: "", onConfirm: null });
          }}
          onCancel={() =>
            setModalData({ visible: false, message: "", onConfirm: null })
          }
        />
      )}
    </div>
  );
};

export default UserStats;
