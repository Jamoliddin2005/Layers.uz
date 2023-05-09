import React from "react";
import classes from "./Home.module.css";

function Home() {
  return (
    <div className={classes.Home}>
      <header>
        <div className="container">
          <h1>
            <span>- Layers </span>
            bilan
            <div className={classes.texts}>
              {/* <span>O'quv markazni</span> */}
              {/* <span>Ishlab chiqarishni</span> */}
              <span className={classes.texts_one}>Sotishni</span>
            </div>
            <span>rivojlantiring</span>
          </h1>
        </div>
      </header>
    </div>
  );
}

export default Home;
