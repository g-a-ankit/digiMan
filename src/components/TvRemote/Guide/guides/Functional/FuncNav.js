import React from "react";
import image from "../../../../../assets/images/tv.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import tv from "../../../../../assets/images/tv.png";
import remote from "../../../../../assets/images/remote.png";

import SetupWifi from "./SetupWifi";
import SoftwareUpdates from "./SoftwareUpdates";

import AddGoogleAccount from "./AddGoogleAccount";
import {
  Container,
  Card,
  ListGroup,
  ListGroupItem,
  InputGroup,
  FormControl,
} from "react-bootstrap";
// import './FuncN.css'

const FuncNav = () => {
  const guides = [
    "How to setup wi-fi connection",
    "How to install software updates",
    "How to add goggle account",
    "How to parent lock Netflix",
    "How to use Bluetooth speakers",
    "How to enable screen saver",
  ];

  const links = ["setupWifi", "softwareUpdates", "addAccount", "#", "#", "#"];

  const pageTransition = {
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  };

  const List = ({ index, guide }) => {
    return (
      <ListGroupItem>
        <Link to={`func-nav/${links[index]}`}>
          <div className="item">
            <span style={{ fontSize: "18px" }}> {guide} </span>
            <i className="items fas fa-chevron-right"></i>
          </div>
        </Link>
      </ListGroupItem>
    );
  };

  const L = ({ index, guide }) => {
    if (links[index] !== "#")
      return (
        <Link to={`func-nav/${links[index]}`}>
          <List index={index} guide={guide} key={index} />
        </Link>
      );
    return (
      <Link>
        <List index={index} guide={guide} key={index} />
      </Link>
    );
  };

  return (
    <motion.div
      className="guide"
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransition}
    >
      {/* // TV img */}

      <div className="header">
        <img className="img-func" src={tv} alt="" />
        <img className="img-remote" src={remote} alt="" />
        <Link to="/func-nav/HowTo">
          <div className="search card">
            <span style={{ fontWeight: "400" }}>How to</span>
            <i className="fas fa-search "></i>
          </div>
        </Link>
      </div>
      {/* Guide Card */}

      <div className="card1">
        <Card
          style={{
            width: "17rem",
            margin: "3rem",
            border: "none",
            borderRadius: "20px",
          }}
        >
          <ListGroupItem
            className="list-group-item"
            style={{ textAlign: "center", textDecoration: "none" }}
          >
            {" "}
            Functional Navigation
          </ListGroupItem>
          {/* <ListGroup variant="flush"> */}
          {guides.map(function (guide, index) {
            return <List index={index} guide={guide} key={index} />;
          })}
          {/* </ListGroup> */}
        </Card>
      </div>

      {/* Go back Navigator */}
      <Link to="/">
        <div className="go-back-func">
          <button className="btn-go-back">
            {/* <div className="wrap"> */}
            <div className="back-arrow ml-1">
              <i class="fas fa-chevron-left"></i>
            </div>
            <p className="wrap"> Go back </p>
            {/* </div> */}
          </button>
        </div>
      </Link>
    </motion.div>
  );
};

export default FuncNav;
