import React from "react";
import arrowIcon from "../../assets/Arrow.svg";
import "./UserStats.css";

const UserStats = () => {
  return (
    <div className="user-info-container">
      <div className="user-info-scrollable">
        <h2 className="statistic-title">Statistic</h2>

        <div className="achievement-circle">
          <span className="achievement-number">1</span>
        </div>
        <div className="heading-container">
          <h3 className="user-greeting">Hello, User</h3>
          <p className="achievement-text">Continue gaining achievements!</p>
        </div>

        <div className="divider"></div>

        <div className="achievements-section">
          <h4 className="section-title">Current Achievements</h4>
          <div className="achievements">
            <button className="achievement active">Newbie</button>
          </div>
        </div>

        <div className="info-section">
          <p>
            <strong>Your Points</strong> <span className="points">0, 00</span>
          </p>
          <p>
            <strong>Role</strong> <span className="role">STUDENT</span>
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
