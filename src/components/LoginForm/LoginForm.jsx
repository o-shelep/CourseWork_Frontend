import React from "react";
// import { Link } from "react-router-dom";
import "./LoginForm.css";
import backgroundImage from "../../assets/Registration_Banner.png";

const LoginForm = () => {
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

          <form className="register-form">
            <div className="register-input">
              <label htmlFor="email">Email address</label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="john_doe3415@domain.com"
                required
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
              />
            </div>
            <div className="forgot-password-container">
              <p>Don't have an account?</p>
              {/* <Link to="/signup">Sign up</Link> */}
            </div>
            <button className="register-btn">Log in</button>
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
