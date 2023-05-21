import React from "react";
import classes from "./About.module.css";
import Translate from "../../components/Translate/Translate";

function About() {
  return (
    <div className={classes.About}>
      <div className="container">
        <h1>{Translate("О нас", "Biz haqimizda", "About Us")}</h1>

        <div className={`row ${classes.row}`}>
          <div className={classes.About_left}>
            <img src="/images/logo-bg.png" alt="" className={classes.bg_img} />
            <img
              src="/images/logo-center.png"
              alt=""
              className={classes.center_img}
            />
          </div>
          <div className={classes.About_right}>
            <h2>Layers</h2>
            <p>
              <span>Layers -</span> bu turli xildagi saytlarni yaratuvchi yangi
              kompaniya. Biz ishonamizki siz bizdan minnatdor bo'lasiz. Chunki
              biz sifatga va tezlikga katta ahamiyat qaratamiz!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
