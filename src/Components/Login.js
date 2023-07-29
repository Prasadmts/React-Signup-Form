import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess, loginFailure } from '../redux/ActionRedux';
import axios from 'axios';
// import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
 
  

  const error = useSelector((state) => state.error);
  const success = useSelector((state) => state.success);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.post("https://dummyjson.com/auth/login", {
        username,
        password,
      });

      const ApiResponse = {
        token: result.data.token,
        id: result.data.id,
        username: result.data.username,
        email: result.data.email,
      };
      
      dispatch(loginSuccess(ApiResponse));
    //   useNavigate("/profile");
    } catch (error) {
        console.log(error)
      dispatch(loginFailure("Login failed. Please check your credentials."));
    }
  };
  return (
    <div className="login-main-line">
      <div className="login-sub">
        <form className="login-box" onSubmit={handleSubmit}>
          <div className="login-heading">
            <p className="login-heading-text-welecome">Welcome Back 👋</p>
            <h3 className="login-heading-text">Sign in to your account</h3>
          </div>
          <div className="email-box">
            <label htmlFor="email" className="email-label">
              Your email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className="email-input login-input"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="password-box">
            <label htmlFor="password" className="password-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              className="password-input login-input"
            />
          </div>
          {error && <p className="error-text">{error}</p>}
          {success && <p className="success-text">{success}</p>}
          <div className="submit-box">
            <div className="button-box">
              <button type="submit" className="button-sign login-input">
                CONTINUE
              </button>
            </div>
            <div className="forgot-box">
              <p className="forgot-text">Forget your password?</p>
            </div>
          </div>
        </form>
        <div className="sigup-link">
          {/* Don’t have an account? <span className="sigup-link-text">Sign up</span> */}
        </div>
      </div>
      <div className="line-div"></div>
    </div>
  );
};

export default Login;