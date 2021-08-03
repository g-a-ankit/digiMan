import React, { useState } from "react";
import image from "../../../assets/images/tv.png";
import { motion } from "framer-motion";

import remote from "../../../assets/images/remote.svg";
import { withRouter } from "react-router";
import { Route, Switch, NavLink, Redirect, Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "../../Home";

import { Container, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import "./Guide.css";
import FuncNav from "./guides/Functional/FuncNav";

const Guide = () => {
  const guides = [
    "Functional Navigation",
    "Product info",
    "Troubleshooting",
    "Request for service support",
  ];

  const routes = ["func-nav", "product-info", "troubleshooting", "req-support"];

  const [guide, setguide] = useState(true);

  const handleChange = () => setguide(false);

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
  return guide ? (
    // <Router basename='/' >

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
      <div className="img">
        <img className="tv-guidee" src={image} alt="" />
        <img className="remote-guide" src={remote} alt="" />
      </div>

      {/* Guide Card */}

      <div className="card1">
        <Card
          style={{
            width: "15.5rem",
            margin: "1rem",
            borderRadius: "20px",
            border: "none",
          }}
        >
          {/* <ListGroup variant="flush"> */}
          <ListGroupItem style={{ textAlign: "center" }}>Guide</ListGroupItem>
          {guides.map(function (guide, index) {
            return (
              <ListGroupItem key={index.toString()}>
                <Link exact to={`/${routes[index]}`}>
                  <div className="item">
                    <span> {guide} </span>
                    <i className="items fas fa-chevron-right"></i>
                  </div>
                </Link>
              </ListGroupItem>
            );
          })}
          {/* </ListGroup> */}
        </Card>
      </div>

      {/* Go back Navigator */}
      {/* <div style={{}}> */}
      <button className="btn-go-back" onClick={handleChange}>
        {/* <div className="wrap"> */}
        <div className="back-arrow ml-1">
          <i class="fas fa-chevron-left"></i>
        </div>
        <p className="wrap"> Go back </p>
        {/* </div> */}
      </button>
      {/* </div> */}
    </motion.div>
  ) : (
    // </Router>
    <Home />
  );
};

export default Guide;
