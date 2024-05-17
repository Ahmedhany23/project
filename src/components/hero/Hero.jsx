import "./hero.css";
import Lottie from "lottie-react";
import laptop from "../../animation/laptop.json";
import { useRef } from "react";
import { motion } from "framer-motion";
const Hero = () => {
  const ref = useRef();
  return (
    <section className="hero flex">
      <div className="first_section ">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "sping", stiffness: 100 }}
            src="/img.png"
            alt="myimage"
            className="MyImage"
          />
          <span className="icon-verified"> </span>
        </div>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
          Front-End Developer
        </motion.h1>
        <p className="subtitle">
          Hi there! I'm Ahmed, a front-end developer with a passion for crafting
          clean code and user-centric experiences. I love working
          collaboratively to solve problems and build beautiful, responsive
          websites across all devices. My expertise lies in leveraging React.js
          and Next.js to create pixel-perfect interfaces. Whether it's a massive
          responsive build, stunning hover effects, or even RTL Arabic sites,
          I've got the experience to tackle it. My tech stack is strong, with
          JavaScript, React.js & Next.js at the core, backed by powerful UI
          libraries like MUI, Tailwind, and Styled-components, all working
          seamlessly with the foundation of HTML & CSS. Looking forward to
          connecting!
        </p>
        <div className="icons">
          <div>
            <a
              className="icon icon-github "
              href="https://github.com/Ahmedhany23"
            ></a>
          </div>
          <div>
            <a
              href="/AhmedHanyCv.pdf"
              className="icon icon-envelope"
              download
            ></a>
          </div>
          <div>
            <a
              className="icon icon-linkedin-square"
              href="https://www.linkedin.com/in/ahmed-hany-a79740216/"
            ></a>
          </div>
        </div>
      </div>
      <div className="second_section animation">
        <Lottie
          lottieRef={ref}
          onLoadedImages={() => {
            ref.current.setSpeed(0.5);
          }}
          width={500}
          height={300}
          animationData={laptop}
        />
      </div>
    </section>
  );
};

export default Hero;
