import React, { useState } from "react";
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
            <h3 className="heading">Get Started Now</h3>
            <p className="subheading">
              Enter your credentials to access your account
            </p>
          </div>

          <form className="register-form" onSubmit={handleSubmit}>
            <div className="register-input">
              <label htmlFor="email">Email address</label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="john_doe3415@domain.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="register-input">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="minimum 8 characters"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {error && <p style={{ color: "red" }}>{error}</p>}

            <div className="forgot-password-container">
              <p>Don't have an account?</p>
            </div>
            <button className="register-btn" disabled={loading}>
              {loading ? "Logging in..." : "Log in"}
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
