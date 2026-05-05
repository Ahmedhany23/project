import { useState } from "react";
import "./header.css";
import { motion, AnimatePresence } from "framer-motion";
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
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>

        <li>
          <a href="#project">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact us</a>
        </li>
      </ul>

      <AnimatePresence>
        {model && (
          <div className="menu-overlay" onClick={() => setModel(false)}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="menu-backdrop"
            />
            
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="menu-drawer"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="drawer-header">
                <span className="logo">Ahmed.dev</span>
                <button
                  className="menu_close icon-clear"
                  onClick={() => setModel(false)}
                />
              </div>

              <motion.ul
                initial="closed"
                animate="open"
                variants={{
                  open: {
                    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
                  },
                  closed: {
                    transition: { staggerChildren: 0.05, staggerDirection: -1 }
                  }
                }}
              >
                {[
                  { name: "About", href: "#about" },
                  { name: "Skills", href: "#skills" },
                  { name: "Experience", href: "#experience" },
                  { name: "Projects", href: "#project" },
                  { name: "Contact", href: "#contact" }
                ].map((link) => (
                  <motion.li
                    key={link.name}
                    variants={{
                      open: { opacity: 1, x: 0 },
                      closed: { opacity: 0, x: 20 }
                    }}
                  >
                    <a href={link.href} onClick={() => setModel(false)}>
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
