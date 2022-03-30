import React, { useState } from "react";
import welcome from "../../assets/img/welcome.svg";
import Message from "../../components/Message";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const OnSubmit = (e) => {
    e.preventDefault();
    if (user.email !== "" || user.password !== "") {
      navigate("/to-do");
    } else {
      setError("All fields are required!");
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };
  return (
    <div className="container-bg">
      <div className="container-1400 container">
        <div className="card">
          <div className="container-img-logo">
            <img src={welcome} alt="welcome-img" />
          </div>
          <div className="container-login">
            <h1>Welcome To-do App</h1>
            <p className="description">¡I hope your visit is to your liking!</p>
            {error && <Message type="error"> {error} </Message>}
            <form onSubmit={OnSubmit} className="container-form">
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
              </div>
              <div className="input-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  value={user.password}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                  id="password"
                />
              </div>
              <div>
                <p className="link-form">Did you forget your password?</p>
                <button className="btn-form">Log In</button>
                <p className="description-form">
                  You do not have an account ?{" "}
                  <a className="link-form">Sign up</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
