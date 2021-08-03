import React from "react";
import tcl from "../../../../../assets/images/tcl.png";
import contact from "../../../../../assets/images/contact.svg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Request = () => {
  const pageTransition = {
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  };

  return (
    <motion.div
      className="request"
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransition}
    >
      <div className="req-img">
        <img src={tcl} alt="" />
      </div>
      <div className="requestCard">
        <div class="shadow p-3 bg-white rounded">
          <span>Enter your phone number</span>
          <div class="card shadow-lg">
            <form action="/action_page.php">
              <img src={contact} alt="" />
              <div className="form">
                <div>
                  <label htmlFor="phone">+91</label>
                  <input
                    className="input"
                    type="tel"
                    id="phone"
                    name="phone"
                    pattern="[0-9]{10}"
                    maxLength="10"
                  />
                </div>
                <div id="next-sub-btn">
                  <input id="submit" type="submit" value="Next" />
                  <Link to="/">
                    <button className="btn-back">
                      <i class="fas fa-chevron-left"></i>
                    </button>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Request;
