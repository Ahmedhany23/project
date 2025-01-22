import Tilt from "react-parallax-tilt";
import Lottie from "lottie-react";
import Coder from "../../animation/coder.json";
import { motion } from "framer-motion";
import "./about.css";
import { LettersPullUp } from "../../animation/LettersPullUp";
import { BsAward } from "react-icons/bs";
const About = () => {
  return (
    <>
      <div id="about" className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            <LettersPullUp text="  Get to know me!" />
          </h1>

          <p>
            Hi, my name is <b>Ahmed Hany</b>, and I am from Giza, Egypt. I am a{" "}
            <b>Frontend Developer</b> with <b>1 year of experience</b> in{" "}
            <b>React, Next.js, and Redux</b>. I have a proven track record of
            building responsive web applications using modern technologies. I
            also possess a strong understanding of <b>SEO best practices</b> and{" "}
            <b>performance optimization</b>. <br />
            <br /> I have graduated with a degree in{" "}
            <b>Management Information Systems (MIS)</b> and am currently working
            as a <b>Software Developer</b>. I enjoy creating original projects
            with clean and intuitive designs. You can check out some of my work
            in the projects section. <br />
            <br /> I am <b>open</b> to new collaborations or opportunities where
            I can contribute, learn, and grow. Feel free to connect with me.
          </p>
        </div>

        <div>
          <Tilt>
            <motion.img
              initial={{ transform: "scale(0)" }}
              animate={{ transform: "scale(1.1)" }}
              transition={{ damping: 6, type: "sping", stiffness: 100 }}
              src="/image.png"
              alt="myimage"
              className="AboutImage"
            />
          </Tilt>
        </div>
      </div>
    </>
  );
};

export default About;
