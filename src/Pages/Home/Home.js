import React from "react";
import classes from "./Home.module.css";
import Header from "./Header";
import Section from "./Section/Section";
import About from "../About/About";

function Home() {




  return (
    <div className={classes.Home}>
      <Header />
      <About />
      <Section />
    </div>
  );
}

export default Home;
