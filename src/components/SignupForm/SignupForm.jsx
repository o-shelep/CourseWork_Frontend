import React, { useState } from "react";
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
            <h3 className="heading">Get Started Now</h3>
            <p className="subheading">
              Enter your credentials to create your account
            </p>
          </div>

          <form className="register-form" onSubmit={handleSubmit}>
            <div className="register-input">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="John Doe"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="register-input">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
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

            <button className="register-btn" type="submit" disabled={loading}>
              {loading ? "Signing up..." : "Sign up"}
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
