import logo from "../Components/Assets/hussme Logo-2 1-white.jpg";
import "../Components/Header.css";
import { Business } from "./Pages/Business";
export function Header() {
  function showSidebar(event) {
    event.preventDefault();
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
  }
  function hideSidebar(event) {
    event.preventDefault();
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
  }

  return (
    <div className="nav-bar">
      <header>
        <nav>
          <ul className="sidebar">
            <li onClick={hideSidebar}>
              <a href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="40px"
                  viewBox="0 -960 960 960"
                  width="40px"
                  fill="#9747ff"
                >
                  <path d="M317.33-285.33 80-522.67 317.33-760 365-712.67l-190 190 190 190-47.67 47.34ZM812.67-200v-157.33q0-56.67-37.67-94.34-37.67-37.66-94.33-37.66H395l156.67 156.66L504-285.33 266.67-522.67 504-760l47.67 47.33L395-556h285.67q84.33 0 141.5 57.17 57.16 57.16 57.16 141.5V-200h-66.66Z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/Business">Business</a>
            </li>
            <li>
              <a href="/">Talent</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
            <li>
              <a href="/">Contact US</a>
            </li>
            <li>
              <div className="login-button">
                <a href="/">Login</a>
              </div>
            </li>
          </ul>

          <ul>
            <li>
              <div className="logo">
                <img src={logo} alt="" />
              </div>
            </li>
            <li className="hideWhileMobileOn">
              <a href="/">Home</a>
            </li>
            <li className="hideWhileMobileOn">
              <a href="/">Business</a>
            </li>
            <li className="hideWhileMobileOn">
              <a href="/">Talent</a>
            </li>
            <li className="hideWhileMobileOn">
              <a href="/">Blog</a>
            </li>
            <li className="hideWhileMobileOn">
              <a href="/">Contact US</a>
            </li>
            <li className="hideWhileMobileOn">
              <div className="login-button ">
                <a href="/">Login</a>
              </div>
            </li>
            <li className="menu-button" onClick={showSidebar}>
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="40px"
                  viewBox="0 -960 960 960"
                  width="40px"
                  fill="9747FF"
                >
                  <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
