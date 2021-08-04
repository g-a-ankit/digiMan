import React, { useState } from "react";
import MenuBar from "./MenuBar";
import Home from "./Home";
import Menustyles from "./styles/MenuBar.module.css";
import Homestyles from "./styles/Home.module.css";
import Breads from "../../assets/toaster/images/several_bread.svg";
import Slider from "../../assets/toaster/images/slider.svg";
import SliderTrack from "../../assets/toaster/images/slider_track.svg";
import SliderKnob from "../../assets/toaster/images/slider_knob.svg";

import ToasterImage from "../../assets/toaster/images/toaster_right_view.svg";
import { motion } from "framer-motion";
import SingleBread from "../../assets/toaster/images/single_bread.svg";
import { AnimatePresence } from "framer-motion";
import IfbImage from "../../assets/toaster/images/ifb.svg";
const steps = [
  "Select the level of toast : Click on the bread to proceed",
  "Step 1: Change the toaster level to 2 ",
  "Step 2: Place the bread inside the toaster",
  "Step 3: Pull down the place holder to insert the bread",
  "DONE",
];

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
  const [step, setStep] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const handleOncLick = (e) => {
    console.log(e.target);
    e.target.classList.add(Homestyles["focus-bread"]);
  };
  const handleNextStep = () => {
    if (step == 4) return;
    setStep(step + 1);
  };
  const renderContent = () => {
    if (step == 0)
      return (
        <div>
          <div
            className={`${Homestyles["bread-overlay"]}`}
            onClick={handleOncLick}
          ></div>
          <img
            src={Breads}
            className={`${Homestyles["main-image"]} ${Homestyles["centered"]} ${Homestyles["fade-in"]}`}
          />
        </div>
      );

    if (step == 1) {
      return (
        <>
          <div>
            <img src={ToasterImage} className={Homestyles["insideImg"]} />

            <img
              src={Slider}
              className={`${Homestyles["slider"]} ${Homestyles["centered"]} ${Homestyles["fade-in"]}`}
            />
            <img
              src={SliderTrack}
              className={`${Homestyles["sliderTrack"]} ${Homestyles["centered"]} ${Homestyles["fade-in"]}`}
            />
            <img
              src={SliderKnob}
              className={`${Homestyles["sliderKnob"]} ${Homestyles["centered"]} ${Homestyles["fade-in"]}`}
            />
          </div>
        </>
      );
    }
  };
  const stepsInfo = () => {
    return <p className={`${Homestyles["description"]}`}>{steps[step]}</p>;
  };

  return (
    <AnimatePresence>
      <div className="Toaster">
        <div className={`${Menustyles["container"]}`}>
          <section className={Menustyles["header"]}>
            <img src={IfbImage} className={Menustyles["ifb"]} />
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
            <div className={`${Homestyles["main-image-wrapper"]}`}>
              {renderContent()}
            </div>
          </div>
          <div className={Homestyles["guide-text"]} onClick={handleNextStep}>
            <h1
              className={`${Homestyles["title"]} ${Homestyles["title-small"]}  ${Homestyles["bold"]}`}
            >
              quick guide
            </h1>
            {stepsInfo()}
          </div>
        </section>
      </div>
    </AnimatePresence>
  );
}

export default Toaster;
