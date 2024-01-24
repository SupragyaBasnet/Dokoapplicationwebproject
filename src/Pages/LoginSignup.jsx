import React, { useState } from "react";
import "./CSS/LoginSignup.css";

export const LoginSignup = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const togglePasswordVisibility = (field) => {
    if (field === "password") {
      setPasswordVisible(!passwordVisible);
    } else if (field === "confirmPassword") {
      setConfirmPasswordVisible(!confirmPasswordVisible);
    }
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <input type="tel" placeholder="Phone Number" />

          <div className="password-container">
            <input
              className={`password-input ${passwordVisible ? "visible" : ""}`}
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
            />
            <span
              className={`toggle-password ${passwordVisible ? "visible" : ""}`}
              onClick={() => togglePasswordVisibility("password")}
            >
              👁️
            </span>
          </div>
          <div className="confirm-password-container">
            <input
              className={`password-input ${
                confirmPasswordVisible ? "visible" : ""
              }`}
              type={confirmPasswordVisible ? "text" : "password"}
              placeholder="Confirm Password"
            />
            <span
              className={`toggle-password ${
                confirmPasswordVisible ? "visible" : ""
              }`}
              onClick={() => togglePasswordVisibility("confirmPassword")}
            >
              👁️
            </span>
          </div>
        </div>
        <button>Sign-up</button>
        <p className="loginsignup-login">
          Already have an account? <span>Login here</span>
          <div className="loginsignup-agree">
            <input type="checkbox" name="" id="" />
            <p>By continuing, I agree to the terms of use and privacy policy</p>
          </div>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
