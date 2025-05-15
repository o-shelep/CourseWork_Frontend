import React from "react";
import arrowIcon from "../../assets/Arrow.svg";
import "./UserStats.css";
import { useUserProfile } from "../../hooks/useUserProfile";

const UserStats = () => {
  const token = localStorage.getItem("token");
  const { user, loading, error } = useUserProfile(token);

  if (loading) return <p>Завантаження...</p>;
  if (error) return <p>Помилка: {error}</p>;
  if (!user) return <p>Користувача не знайдено.</p>;

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
            <strong>Роль</strong> <span className="role">{user.roles[0]}</span>
          </p>
        </div>
      </div>

      <div className="buttons-section">
        <button className="info-button">
          Дізнатись більше <img src={arrowIcon} alt="Arrow" />
        </button>
        <button className="info-button">
          Допомога <img src={arrowIcon} alt="Arrow" />
        </button>
        <button className="info-button">
          Змінити роль <img src={arrowIcon} alt="Arrow" />
        </button>
        <button className="info-button">
          Вийти з системи <img src={arrowIcon} alt="Arrow" />
        </button>
      </div>
    </div>
  );
};

export default UserStats;
