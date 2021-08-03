import React from "react";
import tv from "../../../../../assets/images/tv.png";
import "./info.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import remote from "../../../../../assets/images/remote.png";
import license from "../../../../../assets/images/license.png";
import eWarranty from "../../../../../assets/images/eWarranty.png";
import spec from "../../../../../assets/images/spec.png";
import warning from "../../../../../assets/images/warning.png";
import tv1 from "../../../../../assets/images/tv1.jpg";
import Handset from "./Handset";
import License from "./License";

import { Container, Row, Col } from "react-bootstrap";
import { Table } from "react-bootstrap";

const Info = () => {
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
      style={{ fontSize: "12px" }}
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransition}
    >
      <div>
        <div className="tv-remote">
          <div style={{ height: "5rem" }}>
            <img className="tv" src={tv} alt="" srcset="" />
            <img className="remote" src={remote} alt="" />
          </div>
        </div>
      </div>

      <div className="shadow-sm p-3 bg-white">
        <Row>
          <Col className="product-info">
            <Row>
              <Link to="/product-info/handset">
                <img className="table-remote" src={remote} alt="" srcset="" />
              </Link>
            </Row>
            <Row style={{ textAlign: "center" }}>
              <Link to="/product-info/handset">
                <span style={{ color: "black", textAlign: "center" }}>
                  Handset
                </span>
              </Link>
            </Row>
          </Col>
          <Col className="product-info">
            <Row>
              <Link to="/product-info/license">
                <img className="table-lic" src={license} alt="" srcset="" />
              </Link>
            </Row>
            <Row style={{ textAlign: "center" }}>
              <Link to="/product-info/license">
                <span style={{ color: "black" }}>License</span>
              </Link>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col className="product-info">
            <Row>
              <Link to="/product-info/device-spec">
                <img className="table-spec" src={spec} alt="" srcset="" />
              </Link>
            </Row>
            <Row style={{ textAlign: "center" }}>
              <span>Device Specification</span>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col className="product-info">
            <Row>
              <img className="table-warr" src={eWarranty} alt="" srcset="" />
            </Row>
            <Row style={{ textAlign: "center" }}>
              <span>e-Warranty</span>
            </Row>
          </Col>
          <Col className="product-info">
            <Row>
              <img className="table-tv1" src={warning} alt="" srcset="" />
            </Row>
            <Row style={{ textAlign: "center" }}>
              <span>Warnings</span>
            </Row>
          </Col>
        </Row>
      </div>
      <Link to="/" params={{ guide: true }}>
        <button className="btn-nav-center">
          <i class="fas fa-chevron-left"></i>
        </button>
      </Link>
    </motion.div>
  );
};

export default Info;
