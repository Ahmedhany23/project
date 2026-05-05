import { useEffect, useState } from "react";
import { LettersPullUp } from "../../animation/LettersPullUp";
import "./hero.css";

import { motion } from "framer-motion";
const Hero = () => {
  const [theme, settheme] = useState(
    localStorage.getItem("currentMode")
      ? localStorage.getItem("currentMode")
      : "light",
  );

  useEffect(() => {
    document.body.classList.toggle("light", theme === "light");
    document.body.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <section className="hero">
      {/* Theme toggle — now fixed via CSS, no inline positioning needed */}
      <button
        className="mode flex"
        onClick={() => {
          const next = theme === "dark" ? "light" : "dark";
          localStorage.setItem("currentMode", next);
          settheme(next);
        }}
      >
        {theme === "light" ? (
          <span className="icon-sun" style={{ color: "orange" }}></span>
        ) : (
          <span className="icon-moon-o"> </span>
        )}
      </button>

      <div className="first_section">
        {/* Greeting badge */}
        <div className="greeting-tag">Available for work</div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="title"
        >
          <LettersPullUp text="Hi There, I'm Ahmed Hany" />

          <img
            src="/blob.png"
            alt="wave"
            className="blob"
            width={40}
            height={40}
          />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="subtitle"
        >
          A passionate React Front-end Developer based in Egypt, Giza.&nbsp;📍
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="icons"
        >
          <div>
            <a
              href="https://github.com/Ahmedhany23"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
              </svg>
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/ahmed-hany-a79740216/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                <path d="M8 11l0 5" />
                <path d="M8 8l0 .01" />
                <path d="M12 16l0 -5" />
                <path d="M16 16v-3a2 2 0 0 0 -4 0" />
              </svg>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="tech flex"
        >
          <p className="tech-title">Tech Stack</p>
          <ul className="tech-skills flex">
            <motion.li whileHover={{ y: -8 }} transition={{ duration: 0.2 }}>
              <img
                src="https://skillicons.dev/icons?i=html,css"
                alt="HTML & CSS"
                height={40}
              />
            </motion.li>
            <motion.li whileHover={{ y: -8 }} transition={{ duration: 0.2 }}>
              <img
                src="https://skillicons.dev/icons?i=js,ts"
                alt="JS & TS"
                height={40}
              />
            </motion.li>
            <motion.li whileHover={{ y: -8 }} transition={{ duration: 0.2 }}>
              <img
                src="https://skillicons.dev/icons?i=react,next"
                alt="React & Next"
                height={40}
              />
            </motion.li>
            <motion.li whileHover={{ y: -8 }} transition={{ duration: 0.2 }}>
              <img
                src="https://skillicons.dev/icons?i=tailwind,scss"
                alt="Tailwind & SCSS"
                height={40}
              />
            </motion.li>
          </ul>
        </motion.div>

        <motion.a
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="cv-btn"
          href="/AhmedHanyCv.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          ↓ Download My CV
        </motion.a>
      </div>

      <div className="second_section">
        <motion.img
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 80,
            damping: 15,
          }}
          src="/5X5.jpg"
          alt="Ahmed Hany"
          className="MyImage"
        />
      </div>
    </section>
  );
};

export default Hero;
