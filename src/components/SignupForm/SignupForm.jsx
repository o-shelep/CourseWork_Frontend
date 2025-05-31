import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSignup } from "../../hooks/useSignup";
import "../LoginForm/LoginForm.css";
import backgroundImage from "../../assets/Registration_Banner.png";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signup, loading, error } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await signup(name, email, password);

    if (data) {
      localStorage.setItem("token", data.token);

      window.location.href = "/dashboard";
    }
  };

  return (
    <div className="register-container">
      <div className="content-container">
        <div className="form-container">
          <div className="heading-container">
            <h3 className="heading">Розпочніть Вже Зараз</h3>
            <p className="subheading">
              Введіть ваші дані, щоб отримати доступ до акаунту
            </p>
          </div>

          <form className="register-form" onSubmit={handleSubmit}>
            <div className="register-input">
              <label htmlFor="name">Ім'я</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Ольга Шелеп"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="register-input">
              <label htmlFor="email">Електронна адреса</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="shelep.olya@domain.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="register-input">
              <label htmlFor="password">Пароль</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Щонайменше 8 символів"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {error && <p style={{ color: "red" }}>{error}</p>}
            <div className="forgot-password-container">
              <p>Вже маєете акаунт?</p>
              <Link to="/login">Увійти</Link>
            </div>

            <button className="register-btn" type="submit" disabled={loading}>
              {loading ? "Реєстрація..." : "Зареєструватися"}
            </button>
          </form>
        </div>

        <div className="img-container">
          <img
            src={backgroundImage}
            alt="Background"
            className="background-img"
          />
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
