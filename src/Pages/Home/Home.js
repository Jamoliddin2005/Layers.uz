import React from "react";
import classes from "./Home.module.css";
import Header from "./Header";
import Section from "./Section/Section";

function Home() {




  return (
    <div className={classes.Home}>
      <Header />
      <Section />
    </div>
  );
}

export default Home;
