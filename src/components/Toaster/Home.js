import React from "react";
import styles from "./styles/Home.module.css";

import ToasterImage from "../../assets/toaster/images/toaster_right_view.svg";

const Home = ({ toggleMenu }) => {
  const menuHandler = (e) => {
    toggleMenu(true);
  };
  return (
    <section className={styles["container"]}>
      <div className={styles["guide-image"]}>
        <img src={ToasterImage} className={styles["main-image"]} />
      </div>
      <div className={styles["guide-text"]} onClick={menuHandler}>
        <h1 className={styles["title"]}>quick guide</h1>
      </div>
    </section>
  );
};

export default Home;
