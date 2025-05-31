import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginForm.css";
import backgroundImage from "../../assets/Registration_Banner.png";
import { useLogin } from "../../hooks/useLogin";

const LoginForm = () => {
  const { login, loading, error } = useLogin();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await login(email, password);

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
              <label htmlFor="email">Електронна адреса</label>
              <input
                type="text"
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
              <p>Не маєте акаунту?</p>
              <Link to="/register">Зареєструватися</Link>
            </div>

            <button className="register-btn" disabled={loading}>
              {loading ? "Вхід..." : "Увійти"}
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

export default LoginForm;
