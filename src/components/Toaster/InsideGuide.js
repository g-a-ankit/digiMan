import React, { useState } from "react";
import MenuBar from "./MenuBar";
import Home from "./Home";
import Menustyles from "./styles/MenuBar.module.css";
import Homestyles from "./styles/Home.module.css";
import Breads from "../../assets/toaster/images/several_bread.svg";
import Slider from "../../assets/toaster/images/slider.svg";
import SliderTrack from "../../assets/toaster/images/slider_track.svg";
import SliderKnob from "../../assets/toaster/images/slider_knob.svg";
import ToasterTop from "../../assets/toaster/images/toaster_topView.svg";
import BreadTop from "../../assets/toaster/images/bread_top.svg";
import ToasterImage from "../../assets/toaster/images/toaster_right_view.svg";
import SliderHandle from "../../assets/toaster/images/slider_handle.svg";
import { motion } from "framer-motion";
import BlockSliderToaster from "../../assets/toaster/images/block_slider_toaster.svg";
import SingleBread from "../../assets/toaster/images/single_bread.svg";
import { AnimatePresence } from "framer-motion";
import HalfBread from "../../assets/toaster/images/half_bread.svg";
import IfbImage from "../../assets/toaster/images/ifb.svg";
const steps = [
  "Select the level of toast : Click on the bread to proceed",
  "Step 1: Change the toaster level to 2 ",
  "Step 2: Place the bread inside the toaster",
  "Step 3: Pull down the place holder to insert the bread",
  "DONE",
];
const pageVariants = {
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: "90%",
  },
};

const pageTransition = {
  duration: 1,
  type: "tween",
  ease: "anticipate",
};
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
  const [halfbread, sethalfbread] = useState(false);
  const [step, setStep] = useState(0);
  const [fadeinToaster, setfadeinToaster] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const handleOncLick = (e) => {
    console.log(e.target);
    e.target.classList.add(Homestyles["focus-bread"]);
    setTimeout(() => {
      setfadeinToaster(true);
      setStep(step + 1);
    }, 350);
  };
  const handleBreadTopDrag = (e) => {
    e.target.style.transform = "translateX(42px)";

    // document.getElementsByClassName(Homestyles["SliderHandle"]).style.animation
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
          <AnimatePresence>
            {fadeinToaster && (
              <motion.div
                id="home-page"
                initial="out"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
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
                  onClick={handleBreadTopDrag}
                />
              </motion.div>
            )}
          </AnimatePresence>
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
              onClick={handleBreadTopDrag}
            />
          </div>
        </>
      );
    }

    if (step == 2) {
      return (
        <>
          <div>
            <img src={ToasterTop} className={Homestyles["toasterTop"]} />
            <img
              src={BreadTop}
              className={Homestyles["breadTop"]}
              onDrag={(e) => {
                e.target.style.transform =
                  "scale(0.9) translateY(90px) translateX(-20px) rotateY(-40deg)";
              }}
            />
            <img src={SliderHandle} className={Homestyles["sliderHandle"]} />
          </div>
        </>
      );
    }
    if (step == 3) {
      return (
        <>
          <div>
            <img src={ToasterTop} className={Homestyles["toasterTop"]} />
            <img
              src={BlockSliderToaster}
              className={Homestyles["toasterBlocker"]}
            />
            <img
              id="dragBread"
              src={BreadTop}
              className={Homestyles["breadTopinside"]}
            />
            <img
              src={SliderHandle}
              className={Homestyles["sliderSlide"]}
              onDrag={(e) => {
                // document.getElementById("dragBread").style.transform =
                //   " translateY(20px)";
                setTimeout(() => {
                  document.getElementById("dragBread").style.display = "none";
                  sethalfbread(true);
                }, 500);

                e.target.style.transform =
                  "scale(0.9) translateY(90px) translateX(-10px) ";
              }}
            />
            {halfbread && (
              <img src={HalfBread} className={Homestyles["halfbread"]} />
            )}
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
            <img src={ToasterImage} className={Menustyles["insideMenuBar"]} />
          </section>
          <motion.section
            className={`${Menustyles["links"]} ${Menustyles["visible"]}`}
            variants={container}
            initial="hidden"
            animate="show"
          >
            <h2 style={{ textAlign: "center" }}>Menu</h2>
            <div style={{ textAlign: "center" }}>Let's Toast Some Bread</div>
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
