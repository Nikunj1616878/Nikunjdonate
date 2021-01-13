import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles/navbar.module.css";

const Navbar = (props) => {
  return (
    <React.Fragment>
      {/* <div className={styles.bodyPadding}></div> */}
      {/* <nav className={`sticky-top ${styles.navbar}`}>
        <ul className={navBackground}>
          <li>
            <Link to="/">LandingPage</Link>
          </li>
          {localStorage.getItem("token") && (
            <li style={{ float: "right" }}>
              <Link to="/admin/dashboard">Admin-Dashboard</Link>
            </li>
          )}

          <li style={{ float: "right" }}>
            <Link to="/contact-us">CONTACT US</Link>
          </li>
          <li style={{ float: "right" }}>
            <Link to="/about-us">ABOUT US</Link>
          </li>
          <Link to="/admin/login">loginPage</Link>
        </ul>
      </nav> */}

      <nav
        className={`navbar navbar-expand-md sticky-top ${styles.navbar} ${props.navBackground}`}
      >
        <li className={styles.title}>
          <Link className="navbar-brand" to="/">
            LandingPage
          </Link>
        </li>
        <Link to="/admin/login">loginPage</Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <img
              src="data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,255,255, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E"
              alt="navbar-toggler-icon"
            />
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarToggler">
          <ul className={`navbar-nav   `} style={{ margin: "0 0 0 auto" }}>
            <li style={{ float: "right" }}>
              <Link to="/about-us">ABOUT US</Link>
            </li>
            <li style={{ float: "right" }}>
              <Link to="/contact-us">CONTACT US</Link>
            </li>
            {localStorage.getItem("token") && (
              <li style={{ float: "right" }}>
                <Link to="/admin/dashboard">Admin-Dashboard</Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
