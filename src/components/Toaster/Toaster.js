
import React,{useState} from 'react';
import MenuBar from "./MenuBar";
import Home from "./Home";
import './styles/Toaster.css';

import {AnimatePresence} from "framer-motion";

function Toaster() {
const [showMenu,setShowMenu] = useState(false);
  return(
    <AnimatePresence>
    <div className="Toaster">
      <MenuBar showMenu={showMenu}/>
      <Home toggleMenu={setShowMenu}/>
    </div>
    </AnimatePresence>
  );


}

export default Toaster;
