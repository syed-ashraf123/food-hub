import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-4">
      <a className="navbar-brand" href="www.google.com">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="www.google.com">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="www.google.com">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="www.google.com">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="www.google.com">
              Services
            </a>
          </li>
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <li className="nav-item">
              <a className="nav-link" href="/signup">
                Sign Up
              </a>
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
