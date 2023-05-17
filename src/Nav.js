import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <Link to="/" className="logo">
                  <img
                    src="assets/images/klassy-logo.png"
                    align="klassy cafe html template"
                  />
                </Link>
                <ul className="nav">
                  <Link to="/">
                    <li className="scroll-to-section active">Home</li>
                  </Link>
                  <Link to="/feedback">
                    <li className="scroll-to-section active"> Feedback</li>
                  </Link>
                  <Link to="/profile">
                    <li className="scroll-to-section active">Profile</li>
                  </Link>
                  <Link to="/docs">
                    <li className="scroll-to-section active">Docs</li>
                  </Link>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
