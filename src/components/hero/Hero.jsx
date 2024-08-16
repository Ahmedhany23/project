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
          Hi there! I'm Ahmed, a front-end developer passionate about clean code
          and user-centric experiences. I excel at leveraging React.js and
          Next.js to craft pixel-perfect interfaces and responsive websites,
          including stunning hover effects and RTL Arabic sites. My tech stack
          features JavaScript, React.js, Next.js, and robust UI libraries like
          MUI, Tailwind, and Styled-components, all built on the solid
          foundation of HTML and CSS. Looking forward to connecting!
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
