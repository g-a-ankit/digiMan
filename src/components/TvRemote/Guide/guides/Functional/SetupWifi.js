import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import tv from "../../../../../assets/images/tv.svg";
import remote from "../../../../../assets/images/remote.png";
import power from "../../../../../assets/images/power.svg";
import settings from "../../../../../assets/images/settings.svg";
import wifi from "../../../../../assets/images/wifi.svg";
import ok from "../../../../../assets/images/ok.svg";
import nav from "../../../../../assets/images/nav.svg";
import tvSettings from "../../../../../assets/images/tv-settings.svg";
import settingsNav from "../../../../../assets/images/settingsNav.svg";
import wifiNav from "../../../../../assets/images/wifiNav.svg";
import updownwifi from "../../../../../assets/images/updownwifi.svg";
import downwifi from "../../../../../assets/images/downwifi.svg";
import connect from "../../../../../assets/images/connect.svg";
import success from "../../../../../assets/images/success.svg";

import "./SetupWifi.css";

// const

const SetupWifi = () => {
  const icons = [power, settings, wifi, "", "", ok, ok, ""];

  const images = [
    tv,
    tvSettings,
    settingsNav,
    wifiNav,
    updownwifi,
    downwifi,
    connect,
    success,
  ];

  const commands = [
    "click here to power ON",
    "click here on remote to open settings",
    "Navigate here using arrow keys",
    "Click OK",
    "Use navigation keys for UP-DOWN activity ",
    "Select the network and click OK",
    "click OK to connect to network",
    "Successfully connected to the network",
  ];

  const btns = [
    "power-btn",
    "settings-btn",
    "down-btn",
    "ok-btn",
    "down-btn",
    "ok-btn",
    "ok-btn",
    "ok-btn",
  ];

  const [index, setindex] = useState(0);

  useEffect(() => {
    if (index === 7) {
      const timeout = setTimeout(() => {
        setindex(8);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [index]);

  const handleChange = () => {
    // if(index!==6)
    return index !== 8 ? setindex(index + 1) : setindex(0);
    // else{
    //     const timer = setTimeout( () => {setindex(index+1)},1000 )

    //     const func = () => {
    //         setindex(index+1);
    //         clearTimeout(timer);
    //     }
    //     return func();
    //  }
  };
  const Img = ({ index }) => {
    if (index === 0) return <></>;
    else if (index === 1)
      return (
        <motion.img
          className="t2"
          src={images[index]}
          alt=""
          initial="out"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        />
      );
    else if (index === 3 || index === 5) {
      return (
        <>
          <img className="t2" src={images[1]} alt="" />
          <img className="t2" src={images[index - 1]} alt="" />
          <img className="t2" src={images[index]} alt="" />
        </>
      );
    }
    if (index > 1)
      return (
        <>
          <img className="t2" src={images[1]} alt="" />
          <motion.img
            className="t2"
            src={images[index]}
            alt=""
            initial="out"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          />
        </>
      );
  };
  const Icons = ({ icons, index }) => {
    if (icons[index] === "") return <></>;
    else return <img className="icon" src={icons[index]} alt="" />;
  };
  const pageVariants = {
    in: {
      opacity: 1,
      x: "0%",
    },
    out: {
      opacity: 0,
      x: "30%",
    },
  };
  const pageVariants1 = {
    in: {
      opacity: 1,
      y: "0%",
    },
    out: {
      opacity: 0,
      y: "30%",
    },
  };

  const pageTransition = {
    duration: 0.5,
    type: "tween",
    ease: "easeIn",
  };

  const changePage = () => {
    if (index !== 0) setindex(index - 1);
  };
  const Button = () => {
    if (index !== 0)
      return (
        <button className="btn-nav-left" onClick={changePage}>
          {" "}
          <i className="fas fa-chevron-left"></i>{" "}
        </button>
      );
    else
      return (
        <Link to="/func-nav">
          <button className="btn-nav-left" onClick={changePage}>
            {" "}
            <i className="fas fa-chevron-left"></i>{" "}
          </button>
        </Link>
      );
  };

  // index===7 ?
  return index !== 8 ? (
    <motion.div
      className="setupWifi"
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransition}
    >
      <Button />

      <div style={{ position: "relative", top: "0", left: "0" }}>
        <img className="tv-wifi" src={images[0]} alt="" />

        <Img index={index} />
      </div>
      <div>
        <div className="card mb-2">
          <Icons icons={icons} index={index} />
          <div>{commands[index]}</div>
        </div>
      </div>

      {index === 7 ? (
        // <Link to='/func-nav'>
        <button className={btns[index]} style={{ border: "none" }}></button>
      ) : (
        // </Link>
        <button className={btns[index]} onClick={handleChange}></button>
      )}

      <div className="remote-wifi-box">
        <div>
          <img className="remote-wifi" src={remote} alt="" />
        </div>
      </div>
    </motion.div>
  ) : (
    <motion.div
      className="setupWifi"
      initial="out"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Button />
      <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={pageVariants1}
        transition={pageTransition}
      >
        <div className="func-nav-gradient">
          <div className="contents">
            <div>
              <span> Wifi set-up completed </span>
            </div>
            <div className="func-nav-btns">
              <Link to="/func-nav">
                <button className="btns">Home</button>
              </Link>
              <motion.button
                initial="out"
                animate="in"
                exit="out"
                variants={pageTransition}
                className="btns"
                onClick={handleChange}
              >
                Repeat
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SetupWifi;
