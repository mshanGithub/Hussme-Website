import { Link } from "react-router-dom";
import logo from "../Components/Assets/Home-Header-Footer/hussme Logo-2 1-white.jpg";
import "../Components/Header.css";
import cross from "../Components/Assets/Home-Header-Footer/cross.png";
import { useUser } from "../Components/Context/UserContext"; // Import UserContext

export function Header() {
  const { user, logout } = useUser(); // Get user and logout from context

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
              <img className="cross-icn" src={cross} alt="" />
            </li>
            <li onClick={hideSidebar}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={hideSidebar}>
              <Link to="/business">Business</Link>
            </li>
            <li onClick={hideSidebar}>
              <Link to="/talent">Talent</Link>
            </li>
            <li onClick={hideSidebar}>
              <Link to="/blog">Blog</Link>
            </li>
            <li onClick={hideSidebar}>
              <Link to="/contact">Contact US</Link>
            </li>
            <li onClick={hideSidebar}>
              <div className="login-button">
                {user ? (
                  <>
                    <span>Welcome, {user.username}</span>
                    <button onClick={logout}>Logout</button>
                  </>
                ) : (
                  <>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Signup</Link>
                  </>
                )}
              </div>
            </li>
          </ul>

          <ul className="desk-navbar">
            <li>
              <div className="logo">
                <Link to="/">
                  <img src={logo} alt="" />
                </Link>
              </div>
            </li>
            <li className="hideWhileMobileOn">
              <Link to="/">Home</Link>
            </li>
            <li className="hideWhileMobileOn">
              <Link to="/business">Business</Link>
            </li>
            <li className="hideWhileMobileOn">
              <Link to="/talent">Talent</Link>
            </li>
            <li className="hideWhileMobileOn">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="hideWhileMobileOn">
              <Link to="/contact">Contact US</Link>
            </li>
            <li className="hideWhileMobileOn">
              {user ? (
                <>
                  <span>Welcome, {user.username}</span>
                  <button onClick={logout}>Logout</button>
                </>
              ) : (
                <>
                  <Link to="/login">Login</Link>
                  <Link to="/signup">Signup</Link>
                </>
              )}
            </li>
            <li className="menu-button" onClick={showSidebar}>
              <Link to="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="40px"
                  viewBox="0 -960 960 960"
                  width="40px"
                  fill="9747FF"
                >
                  <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                </svg>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
