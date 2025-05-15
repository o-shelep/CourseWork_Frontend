import React from "react";
import arrowIcon from "../../assets/Arrow.svg";
import "./UserStats.css";
import { useUserProfile } from "../../hooks/useUserProfile";

const UserStats = () => {
  const token = localStorage.getItem("token");
  const { user, loading, error } = useUserProfile(token);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!user) return <p>No user data found.</p>;

  return (
    <div className="user-info-container">
      <div className="user-info-scrollable">
        <h2 className="statistic-title">Statistic</h2>

        <div className="achievement-circle">
          <span className="achievement-number">{user.level}</span>
        </div>
        <div className="heading-container">
          <h3 className="user-greeting">Hello, {user.name}</h3>
          <p className="achievement-text">Continue gaining achievements!</p>
        </div>

        <div className="divider"></div>

        <div className="achievements-section">
          <h4 className="section-title">Current Achievements</h4>
          <div className="achievements">
            {user.achievements.length > 0 ? (
              user.achievements.map((ach, idx) => (
                <button key={idx} className="achievement active">
                  {ach}
                </button>
              ))
            ) : (
              <p>No achievements yet</p>
            )}
          </div>
        </div>

        <div className="info-section">
          <p>
            <strong>Your Points</strong>{" "}
            <span className="points">{user.points}</span>
          </p>
          <p>
            <strong>Role</strong> <span className="role">{user.roles[0]}</span>
          </p>
        </div>
      </div>

      <div className="buttons-section">
        <button className="info-button">
          Log out <img src={arrowIcon} alt="Arrow" />
        </button>
        <button className="info-button">
          Know more <img src={arrowIcon} alt="Arrow" />
        </button>
        <button className="info-button">
          Help <img src={arrowIcon} alt="Arrow" />
        </button>
        <button className="info-button">
          Change role <img src={arrowIcon} alt="Arrow" />
        </button>
      </div>
    </div>
  );
};

export default UserStats;
