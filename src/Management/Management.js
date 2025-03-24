import "../Management/Management.css";
import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../Components/Context/UserContext"; // Import UserContext
import { useState } from "react"; // Import useState

export function Management() {
  const { user, logout } = useUser(); // Get user and logout from context
  const [showLogout, setShowLogout] = useState(false); // State to toggle logout button visibility
  const navigate = useNavigate();

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

  // Function to toggle the logout dropdown
  const toggleLogout = () => {
    setShowLogout(!showLogout);
  };

  // Function to handle logout click
  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    setShowLogout(false); // Hide the logout button after logging out
  };

  // Function to navigate to change password page
  const handleChangePassword = (e) => {
    e.preventDefault();
    setShowLogout(false); // Hide the dropdown
    navigate("/reset-password");
  };

  // Function to close dropdown when clicking outside
  const closeDropdown = () => {
    setShowLogout(false);
  };

  return (
    <>
      <div className="mgmt-page" onClick={closeDropdown}>
        {/* Start of navbar */}
        <div className="mgmt-navbar">
          <div className="mgmt-login">
            {user ? (
              <div
                className="user-dropdown-container"
                onClick={(e) => e.stopPropagation()}
              >
                <span className="desk-username" onClick={toggleLogout}>
                  {user.username}
                </span>
                {showLogout && (
                  <div className="mgmt-left logout-dropdown">
                    <Link
                      className="mgmt-change-password-button"
                      onClick={handleChangePassword}
                    >
                      Change Password
                    </Link>
                    <Link className="mgmt-logout-button" onClick={handleLogout}>
                      Logout
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link className="mgmt-login-button" to="/login">
                  Login
                </Link>
              </>
            )}
          </div>
          <div className="cmpy-logo">
            <Link to="/">
              <img
                className="mgmt-logo"
                src="https://i.ibb.co/PvSFSPcB/hussme-Logo-2-1-white.jpg"
                alt="Hussme"
              />
            </Link>
          </div>
        </div>
        {/* End of navbar */}
        <div className="management-section">
          <div className="mgmt-sidebar">
            <ul>
              <li>
                <Link>
                  <img
                    src="https://i.ibb.co/zTQV8chR/project.png"
                    className="mgmt-sidebar-icn"
                  ></img>
                  <span className="mgmt-sidebar-title">Content Management</span>
                </Link>
              </li>
              <li>
                <Link>
                  <img
                    src="https://i.ibb.co/v6Pyt4G1/training.png"
                    className="mgmt-sidebar-icn"
                  ></img>
                  <span className="mgmt-sidebar-title">
                    Processs & Training
                  </span>
                </Link>
              </li>
              <li>
                <Link>
                  <img
                    src="https://i.ibb.co/DHQZXWQX/acquisition.png"
                    className="mgmt-sidebar-icn"
                  ></img>
                  <span className="mgmt-sidebar-title">Hiring</span>
                </Link>
              </li>
              <li>
                <Link>
                  <img
                    src="https://i.ibb.co/fVfNtpBq/user-avatar.png"
                    className="mgmt-sidebar-icn"
                  ></img>
                  <span className="mgmt-sidebar-title">Company Profile</span>
                </Link>
              </li>
              <li>
                <Link>
                  <img
                    src="https://i.ibb.co/ksFyq9bJ/account-settings.png"
                    className="mgmt-sidebar-icn"
                  ></img>
                  <span className="mgmt-sidebar-title">Settings</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
