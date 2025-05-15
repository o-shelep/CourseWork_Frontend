import React from "react";
// import { Link } from "react-router-dom";
import "../LoginForm/LoginForm.css";
import backgroundImage from "../../assets/Registration_Banner.png";

const SignupForm = () => {
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
              <label htmlFor="email">Name</label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="John Doe"
                required
              />
            </div>
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
              <label htmlFor="email">Role</label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="e. g.  STUDENT"
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
              <p>Already have an account?</p>
              {/* <Link to="/login">Sign up</Link> */}
            </div>
            <button className="register-btn">Sign up</button>
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
