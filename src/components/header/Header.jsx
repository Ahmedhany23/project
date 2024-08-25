import { useEffect, useState } from "react";
import "./header.css";
import { motion,AnimatePresence } from "framer-motion";
const Header = () => {
  const [model, setModel] = useState(false);

  return (
    <header className="flex">
     
      <h3 className="logo">Ahmed.dev</h3>
      <button
        className="model icon-menu flex"
        onClick={() => {
          setModel(true);
        }}
      />
      <ul className="menu">
        <li>
          <a href="#">About</a>
        </li>

        <li>
          <a href="#project">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact us</a>
        </li>
      </ul>



        <AnimatePresence mode="wait">
        {model && (
        <motion.div initial={{opacity:0.9}} animate={{opacity:1}} exit={{opacity:0.9}} className="menu_res">
          <motion.ul  initial={{scale:1.2}} animate={{scale:1}} exit={{scale:0.9}}  transition={{ duration:0.5 , stiffness:300 , damping:20}}>
            <li>
              <button
                className="menu_close icon-clear"
                onClick={() => {
                  setModel(false);
                }}
              />
            </li>
            <li >
              <a href="#">About</a>
            </li>

            <li>
              <a href="#project">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact us</a>
            </li>
          </motion.ul>
        </motion.div>
      )}
        </AnimatePresence>
      
    </header>
  );
};

export default Header;
