import React, { useState } from "react";
import MenuBar from "./MenuBar";
import Home from "./Home";
import Menustyles from "./styles/MenuBar.module.css";
import Homestyles from "./styles/Home.module.css";
import Breads from "../../assets/toaster/images/several_bread.svg";
import { motion } from "framer-motion";
import ToasterImage from "../../assets/toaster/images/toaster_right_view.svg";
import { AnimatePresence } from "framer-motion";

const container = {
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
  show: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
};

function Toaster() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <AnimatePresence>
      <div className="Toaster">
        <div className={`${Menustyles["container"]}`}>
          <section className={Menustyles["header"]}>
            <h3>IFB</h3>
          </section>
          <motion.section
            className={`${Menustyles["links"]} ${Menustyles["visible"]}`}
            variants={container}
            initial="hidden"
            animate="show"
          >
            <h2>menu</h2>
            <div>Let's Toast Some Bread</div>
          </motion.section>
        </div>
        <section className={Homestyles["container"]}>
          <div className={Homestyles["guide-image"]}>
            <img src={Breads} className={Homestyles["main-image"]} />
          </div>
          <div className={Homestyles["guide-text"]}>
            <h1 className={Homestyles["title"]}>quick guide</h1>
          </div>
        </section>
      </div>
    </AnimatePresence>
  );
}

export default Toaster;
