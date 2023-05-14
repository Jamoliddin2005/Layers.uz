import React from "react";
import classes from "./Section.module.css";


function Box({ item }) {
  return (
    <div className={classes.section__box}>
      {item.svg}
      <h3>{item.title}</h3>
      <p>{item.desc}</p>
    </div>
  );
}

export default Box;
