import { LettersPullUp } from "../../animation/LettersPullUp";
import "./hero.css";

import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className="hero flex ">
      <div className="first_section ">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
          <LettersPullUp text="Hi There, I'm Ahmed Hany" />

          <img
            src="/blob.png"
            alt="Blob-Icon"
            className="blob"
            width={40}
            height={40}
          />
        </motion.h1>

        <p className="subtitle">
          A passionate React Front-end Developer based in Egypt , Giza . 📍
        </p>
        <div className="icons">
          <div>
            <a href="https://github.com/Ahmedhany23">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
              </svg>
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/ahmed-hany-a79740216/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"
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
        </div>
        <div className="tech flex">
          <p className="tech-title">Tech Stack</p>
          <ul className="tech-skills flex">
            <motion.li whileHover={{ y: -10 }} transition={{ duration: 0.2 }}>
              <img
                src="https://skillicons.dev/icons?i=html,css"
                alt="skill-icon"
                width={80}
                height={40}
              />
            </motion.li>
            <motion.li whileHover={{ y: -10 }} transition={{ duration: 0.2 }}>
              <img
                src="https://skillicons.dev/icons?i=js,ts"
                alt="skill-icon"
                width={80}
                height={40}
              />
            </motion.li>
            <motion.li whileHover={{ y: -10 }} transition={{ duration: 0.2 }}>
              <img
                src="https://skillicons.dev/icons?i=react,next"
                alt="skill-icon"
                width={80}
                height={40}
              />
            </motion.li>
            <motion.li whileHover={{ y: -10 }} transition={{ duration: 0.2 }}>
              <img
                src="https://skillicons.dev/icons?i=tailwind,scss"
                alt="skill-icon"
                width={80}
                height={40}
              />
            </motion.li>
          </ul>
        </div>
        <a className="cv-btn" href="/AhmedHanyCv.pdf">
          Download My CV
        </a>
      </div>
      <div className="second_section">
        <motion.img
          initial={{ transform: "scale(0)" }}
          animate={{ transform: "scale(1.1)" }}
          transition={{ damping: 6, type: "sping", stiffness: 100 }}
          src="/5X5.jpg"
          alt="myimage"
          width={377}
          height={377}
          className="MyImage"
        />
      </div>
    </section>
  );
};

export default Hero;
