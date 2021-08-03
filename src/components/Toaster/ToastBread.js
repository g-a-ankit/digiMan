import React from "react";
import styles from "./styles/Home.module.css";
import ToasterImage from "../../assets/toaster/images/toaster_right_view.svg";
import InsideGuide from "./InsideGuide";

const Home = ({ toggleMenu }) => {
  const menuHandler = (e) => {
    toggleMenu(true);
  };
  return <InsideGuide></InsideGuide>;
};

export default Home;
