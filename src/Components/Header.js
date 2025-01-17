import { useState } from "react";
import logo from "../Components/Assets/hussme Logo-2 1-white.jpg";
import "../Components/Header.css";
export function Header() {
  return (
    <div className="nav-bar">
      <header>
        <div className="logo">
          <img src={logo} alt="" />
          
        </div>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Business</a>
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
            <li className="login-button">
              <a href="/">Login</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
