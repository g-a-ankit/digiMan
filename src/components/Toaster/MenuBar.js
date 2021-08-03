import React,{useState} from 'react'
import styles from "./styles/MenuBar.module.css";

import {motion} from "framer-motion";

const container = {
  hidden:{
    opacity:0,
    transition:{
      when:"afterChildren"
  }
},
  show:{
    opacity:1,
    transition:{
      when:"beforeChildren",
      staggerChildren:0.5,
     
    }
  }
}

const listItem = {
  hidden:{opacity:0,x:-50},
  show:{opacity:1,x:0,transition:{duration:0.3}}
}
const MenuBar = ({showMenu}) => {
  // const [visible,setVisible] = useState(false);
  const menuLinks = ['1','2','3'];
  return (
    <div className={`${styles['container']}` }>
      <section className={styles["header"]}>
            <h3>IFB</h3>
      </section>
      <motion.section className={`${styles["links"]} ${showMenu?styles['visible']:styles['hidden']}`}
                      variants={container} initial="hidden" animate="show">
      <h2>menu</h2>
      {
        menuLinks.map((link,idx)=>(
        <motion.li key={idx} variants={listItem}>
          {link}
          </motion.li>
        )
        )//idx hah?
      }
      </motion.section>
    </div>
  )
}
export default MenuBar
