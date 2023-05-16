import React from "react";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
import Translate from "../Translate/Translate"

function Navbar({ language }) {


  return (
    <nav className={classes.Navbar}>
      <div className="container">
        <div className={`row ${classes.row}`}>
          <div className={classes.navbar__left}>
            <Link to={"/"}>Layers.uz</Link>
          </div>
          <div className={classes.navbar__right}>
            <ul>
              <li>
                <Link to={"/about"}>{Translate("О нас", "Biz Haqimizda", "About Us")}</Link>
              </li>
              <li>
                <Link to={"/services"}>{Translate("Услуги", "Xizmatlar", "Services")}</Link>
              </li>
              <li>
                <Link to={"/contact"}>{Translate("Контакты", "Kontaktlar", "Contact Us")}</Link>
              </li>

              <li>
                <select
                  name=""
                  id=""
                  onChange={(e) => {
                    localStorage.setItem("language", e.target.value);
                    window.location.reload();
                  }}
                >
                  {language.map((item, idx) => (
                    <option key={idx} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </li>
              <li>
                <button className="hover-effect">
                  <span>{Translate("Начните с нами!", "Biz bilan boshlang!", "Start with us!")}</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
