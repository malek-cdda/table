import React from "react";
import style from "./style.module.css";
const Home = () => {
  return (
    <div className="flex justify-center mt-10">
      <div className={style.tooltip}>
        Hover over me
        <span className={style.tooltiptext}>Tooltip text</span>
      </div>
    </div>
  );
};

export default Home;
