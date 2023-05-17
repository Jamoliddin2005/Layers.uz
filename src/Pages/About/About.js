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
            <h2>
              We Are Professional <br /> Digital Team
            </h2>
            <h4>
              Our web design company specializes in the professional creation of
              unique sites.
            </h4>
            <p>
              Our team constantly monitors the emergence of new technologies
              that we are not afraid to implement in web projects. We create
              only selling websites – this is an achievement by drawing the
              design and working out usability. The approach to each new project
              is individual, we treat every customer equally, regardless of the
              size of the company and its budget.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
