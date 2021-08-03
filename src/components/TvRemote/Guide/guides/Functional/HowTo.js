import React, { useState } from "react";
import image from "../../../../../assets/images/tv.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import remote from "../../../../../assets/images/remote.svg";
import { FaTimes as Times } from "react-icons/fa";
import close from "../../../../../assets/images/close.svg";

import { Container, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import "../../Guide.css";

const HowTo = () => {
  const suggestions = [
    "Bluetooth connection",
    "sign-in",
    "usb-storage",
    "remote not working",
  ];

  const pageVariants = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: "-90%",
    },
  };

  const pageTransition = {
    duration: 1,
    type: "tween",
    ease: "anticipate",
  };

  return (
    <motion.div
      className="guide"
      initial="out"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {/* // TV img */}

      {/* <div className="img" >
            <div style={{height:'16em'}}>
            </div>
        </div> */}
      <div className="img img-2">
        <img className="tv-guidee" src={image} alt="" />
        <img className="remote-guide" src={remote} alt="" />
      </div>

      {/* Guide Card */}

      <div className="card-how-to">
        <Card
          className="card"
          style={{ width: "15.5rem", margin: "1rem", borderRadius: "20px" }}
        >
          <form action="submit">
            <input type="text" />
            <button type="submit">
              <i className="fas fa-search"></i>{" "}
            </button>
          </form>
        </Card>
      </div>
      <div className="suggestions">
        {suggestions.map(function (suggest, index) {
          return (
            <div>
              <span className="mr-2"> {suggest} </span>
              <img src={close} alt="" />
            </div>
          );
        })}
      </div>

      {/* Go back Navigator */}
      <div style={{}}>
        <Link to="/func-nav">
          <button className="btn-go-back btn-bottom">
            {/* <div className="wrap"> */}
            <div className="back-arrow ml-1">
              <i class="fas fa-chevron-left"></i>
            </div>
            <p className="wrap"> Go back </p>
            {/* </div> */}
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default HowTo;
