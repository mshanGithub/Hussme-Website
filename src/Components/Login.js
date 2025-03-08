import { Link } from "react-router-dom";
import "../Components/Login.css";
import { useEffect } from "react";
  
export function Login() {
  useEffect(() => {
    const container = document.querySelector(".login-container");
    const registerBtn = document.querySelector(".toggle-signup-btn");
    const loginBtn = document.querySelector(".toggle-login-btn");

    if (registerBtn && loginBtn && container) {
      registerBtn.addEventListener("click", () => {
        container.classList.add("active");
      });

      loginBtn.addEventListener("click", () => {
        container.classList.remove("active");
      });

      // Cleanup event listeners
      return () => {
        registerBtn.removeEventListener("click", () => {
          container.classList.add("active");
        });
        loginBtn.removeEventListener("click", () => {
          container.classList.remove("active");
        });
      };
    }
  }, []);
  return (
    <>
      <div className="login-page">
        <div className="login-container">
          <div className="form-box login">
            <form action="">
              <h1>Login</h1>
              <div className="input-box">
                <input type="text" placeholder="Username" required />
                <i class="bx bxs-user"></i>
              </div>
              <div className="input-box">
                <input type="password" placeholder="Password" required />
                <i class="bx bxs-lock-alt"></i>
              </div>
              <div className="forgot-link">
                <Link to="#">Forgot the password?</Link>
              </div>
              <button type="submit" className="login-btn">
                Login
              </button>
            </form>
          </div>

          <div className="form-box signup">
            <form action="">
              <h1>Signup</h1>
              <div className="input-box">
                <input type="text" placeholder="Username" required />
                <i class="bx bxs-user"></i>
              </div>
              <div className="input-box">
                <input type="email" placeholder="Email" required />
                <i class="bx bxs-envelope"></i>
              </div>
              <div className="input-box">
                <input type="password" placeholder="Password" required />
                <i class="bx bxs-lock-alt"></i>
              </div>

              <button type="submit" className="login-btn">
                Signup
              </button>
            </form>
          </div>

          <div className="toggle-box">
            <div className="toggle-panel toggle-left">
              <h1>Hello! Welcome</h1>
              <p>Don't have an account?</p>
              <button className="toggle-signup-btn">Signup </button>
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
