import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import device from "../../../../../assets/images/deviceSpec.svg";
import spec from "../../../../../assets/images/spec.png";

const DeviceSpec = () => {
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
      <div className="device-spec">
        <div className="title">
          <img className="mr-3" src={spec} alt="" />
          <span> Device Specification </span>
        </div>
        <div className="main shadow-lg pt-3 pb-5 bg-white ">
          <img src={device} alt="" />
        </div>
        <Link to="/product-info">
          <button className="btn-nav-center">
            <i className="fas fa-chevron-left"></i>
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default DeviceSpec;
