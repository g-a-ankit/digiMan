import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import material from "../../../../../assets/images/icon-material-input.svg";
import power from "../../../../../assets/images/power.svg";
import settings from "../../../../../assets/images/settings.svg";
import nav from "../../../../../assets/images/nav.svg";
import home from "../../../../../assets/images/home.svg";
import options from "../../../../../assets/images/options.svg";
import back from "../../../../../assets/images/back.svg";
import volume from "../../../../../assets/images/volume.svg";
import input from "../../../../../assets/images/input.svg";
import ch1 from "../../../../../assets/images/ch1.svg";
import ch2 from "../../../../../assets/images/ch2.svg";

const Handset = () => {
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
      className="handset"
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransition}
    >
      <table className="pt-2 pr-2 pl-2">
        <tbody>
          <tr>
            <td className="td-handset">
              <div>
                <img src={power} alt="" />
              </div>
            </td>
            <td className="td-handset">
              {" "}
              <strong>Power</strong>: short press to turn on, Long press to
              Shutdown.{" "}
            </td>
          </tr>
          <tr>
            <td className="td-handset">
              <div>
                <img src={settings} alt="" />
              </div>
            </td>
            <td className="td-handset">
              <strong>Settings</strong>: System and User Settings menu.{" "}
            </td>
          </tr>
          <tr>
            <td colSpan="2" className="td-handset">
              <div>
                <img src={nav} alt="" />
              </div>
              {/* <div> */}
              <strong>Navigation</strong>: navigate to select the context
              {/* </div> */}
            </td>
          </tr>
          <tr>
            <td className="td-handset">
              {" "}
              <div>
                <img src={home} alt="" />{" "}
              </div>{" "}
            </td>
            <td className="td-handset">
              <strong>Home</strong>: Access the Home Page.{" "}
            </td>
          </tr>
          <tr>
            <td className="td-handset">
              <div>
                <img src={options} alt="" />
              </div>
            </td>
            <td className="td-handset">
              <strong>Options</strong>: Access video options.{" "}
            </td>
          </tr>

          <tr>
            <td className="td-handset">
              <div>
                <img src={back} alt="" />
              </div>
            </td>
            <td className="td-handset">
              <strong>Back</strong>: return to previous context{" "}
            </td>
          </tr>
          <tr>
            <td className="td-handset">
              <div>
                <img src={input} alt="" />
              </div>
            </td>
            <td className="td-handset">
              <strong>Input</strong>: select display source{" "}
            </td>
          </tr>

          <tr>
            <td className="td-handset">
              <div>
                <img src={volume} alt="" />
              </div>
            </td>
            <td className="td-handset">
              <strong>Volume</strong>: adjust audio volume
            </td>
          </tr>

          <tr>
            <td className="td-handset">
              <div>
                <img src={ch1} alt="" />
              </div>
              <div className="mt-1">
                <img src={ch2} alt="" />
              </div>
            </td>
            <td className="td-handset">
              <strong>Channel</strong>: switch channels
            </td>
          </tr>
        </tbody>
      </table>
      <Link to="/product-info">
        <button className="btn-nav-center handset">
          <i class="fas fa-chevron-left"></i>
        </button>
      </Link>
    </motion.div>
  );
};

export default Handset;
