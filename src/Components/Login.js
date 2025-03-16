import { Link, useNavigate } from "react-router-dom";
import "../Components/Login.css";
import { useEffect, useState } from "react";
import { useUser } from "../Components/Context/UserContext";

export function Login() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useUser();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      const result = await response.json();
      if (response.ok) {
        alert('Login Sussfull');
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();
      if (response.ok) {
        login(result.Token);
        alert("Login Successful!");
        navigate("/"); // Redirect to home after login
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Login Failed!");
    }
  };

  useEffect(() => {
    const container = document.querySelector(".login-container");
    const registerBtn = document.querySelector(".toggle-signup-btn");
    const loginBtn = document.querySelector(".toggle-login-btn");

    if (registerBtn && loginBtn && container) {
      const handleRegisterClick = () => container.classList.add("active");
      const handleLoginClick = () => container.classList.remove("active");

      registerBtn.addEventListener("click", handleRegisterClick);
      loginBtn.addEventListener("click", handleLoginClick);

      return () => {
        registerBtn.removeEventListener("click", handleRegisterClick);
        loginBtn.removeEventListener("click", handleLoginClick);
      };
    }
  }, []);

  return (
    <>
      <div className="login-page">
        <div className="login-container">
          {/* Login Form */}
          <div className="form-box login">
            <form onSubmit={handleLoginSubmit}>
              <h1>Login</h1>
              <div className="input-box">
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  required
                />
                <i className="bx bxs-user"></i>
              </div>
              <div className="input-box">
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                />
                <i className="bx bxs-lock-alt"></i>
              </div>
              <div className="forgot-link">
                <Link to="#">Forgot the password?</Link>
              </div>
              <button type="submit" className="login-btn">
                Login
              </button>
            </form>
          </div>

          {/* Signup Form */}
          <div className="form-box signup">
            <form onSubmit={handleSubmit}>
              <h1>Signup</h1>
              <div className="input-box">
                <input
                  type="text"
                  placeholder="Username"
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <i className="bx bxs-user"></i>
              </div>
              <div className="input-box">
                <input
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <i className="bx bxs-envelope"></i>
              </div>
              <div className="input-box">
                <input
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <i className="bx bxs-lock-alt"></i>
              </div>

              <button type="submit" className="signup-btn">
                Signup
              </button>
            </form>
          </div>

          {/* Toggle Box */}
          <div className="toggle-box">
            <div className="toggle-panel toggle-left">
              <h1>Hello! Welcome</h1>
              <p>Don't have an account?</p>
              <button className="toggle-signup-btn">Signup</button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Welcome Back</h1>
              <p>Already have an account?</p>
              <button className="toggle-login-btn">Login</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
