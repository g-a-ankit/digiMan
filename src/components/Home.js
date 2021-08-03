import React, { useState } from "react";
import { motion } from "framer-motion";
import image from "../assets/images/tv.png";
import remote from "../assets/images/remote.png";
import { Link } from "react-router-dom";
import Guide from "./TvRemote/Guide/Guide";
import "./TvRemote/Guide/Guide.css";
import "./Home.css";

const Home = () => {
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { delay: 1.5, duration: 1.5 },
    },
  };

  const guides = [
    "Functional Navigation",
    "Product info",
    "Troubleshooting",
    "Request for service support",
  ];

  const [guide, setguide] = useState(false);

  const handleChange = () => setguide(true);

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

  return !guide ? (
    <motion.div
      id="home-page"
      initial="out"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className="home">
        {/* // TV img */}
        <div className="home-tv-remote">
          <div className="img-home">
            <img className="tv-home" src={image} alt="" />
          </div>
          <div id="div1">
            <div id="div2">
              <img className="img2" src={remote} alt="" />
            </div>
          </div>
        </div>

        {/* Guide Card */}

        <span className="text-label">QUICK GUIDE</span>
      </div>
      {/* Go back Navigator */}
      {/* <Link to='/guide'> */}
      <button className="btn-nav-home" onClick={handleChange}>
        <i class="fas fa-chevron-right fa-lg"></i>
      </button>
      {/* </Link> */}
    </motion.div>
  ) : (
    <Guide guide={true} />
  );
};

export default Home;
