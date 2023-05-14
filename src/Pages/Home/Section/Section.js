import React from "react";
import classes from "./Section.module.css";
import Box from "./Box";
import { ReactComponent as Approach } from "./svgs/Approach.svg";
import { ReactComponent as Warranty } from "./svgs/Warranty.svg";
import { ReactComponent as Creative } from "./svgs/Creative.svg";
function Section() {
    
  const Services = [
    {
      title: "Warranty",
      desc: "We provide 1 year warranty support. The fulfillment of our obligations has been repeatedly confirmed by the feedback of our customers",
      svg: <Warranty />,
      id: 0,
    },
    {
      title: "Creative",
      desc: "We guarantee an exclusive design. We do our best to attract the attention of our customers using the world’s leading strategies",
      svg: <Creative />,
      id: 1,
    },
    {
      title: "Approach",
      desc: "Starting with negotiations and until the completion of the process, you communicate with a personal project manager",
      svg: <Approach />,
      id: 2,
    },
  ];

  return (
    <div className={classes.Section}>
      <div className="container">
        <div className={`row ${classes.row}`}>
          {Services.map((item, index) => (
            <Box key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Section;
