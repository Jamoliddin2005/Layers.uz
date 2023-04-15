import React from "react";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className={classes.Navbar}>
      <div className="container">
        <div className={`row ${classes.row}`}>
          <div className={classes.navbar__left}>
            <Link to={"/"}>
              <img src="/images/logo-color.png" alt="" />
            </Link>
          </div>
          <div className={classes.navbar__right}>
            <ul>
              <li>
                <Link to={"/"}>Contacts</Link>
              </li>
              <li>
                <Link to={"/"}>Contacts</Link>
              </li>
              <li>
                <Link to={"/"}>Contacts</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
