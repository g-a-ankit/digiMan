import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import license from "../../../../../assets/images/Group 77.svg";
import andriodtv from "../../../../../assets/images/androidtv.svg";
import dts from "../../../../../assets/images/dts.svg";
import dolby from "../../../../../assets/images/dolby.svg";
import netflix from "../../../../../assets/images/netflix.svg";
import hdmi from "../../../../../assets/images/hdmi.svg";

const License = () => {
  const pageTransition = {
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  };

  return (
    <motion.div initial="out" animate="in" exit="out" variants={pageTransition}>
      <div className="license">
        <div class="shadow-lg p-3 mb-5 bg-white rounded innerDiv">
          <img className="lic" src={license} alt="" />
          <div className="img-wrap">
            <div className="imgs">
              <img className="width" src={andriodtv} alt="" />
              <img className="width" src={hdmi} alt="" />
            </div>

            <div className="imgs">
              <img className="width" src={dts} alt="" />
              <img className="width" src={dolby} alt="" />
            </div>

            <div className="imgs netflix">
              <img className="" src={netflix} alt="" />
            </div>
          </div>
        </div>
        <Link to="/product-info">
          <button className="btn-nav-center">
            <i class="fas fa-chevron-left"></i>
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default License;
