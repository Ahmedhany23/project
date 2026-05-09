import "./about.css";
import { LettersPullUp } from "../../animation/LettersPullUp";

const About = () => {
  return (
    <div id="about" className="AboutPage">
      <div className="AboutText">
        <span className="section-label">-- GET TO KNOW ME</span>
        <h2 className="section-title">Who I Am</h2>

        <p>
          Hi, my name is <b>Ahmed Hany</b>, and I am from Giza, Egypt. I am a{" "}
          <b>Frontend Developer</b> with <b>2 years of experience</b> in{" "}
          <b>React, Next.js, and TypeScript</b>. I have a proven track record of
          building scalable, production-grade web applications and contributing
          to platforms serving thousands of active users. I also possess a
          strong understanding of <b>SEO best practices</b> and{" "}
          <b>performance optimization</b>. <br />
          <br /> I graduated with a degree in{" "}
          <b>Management Information Systems (MIS)</b> and am currently working
          as a <b>Junior Frontend Developer</b> at Natlix. I enjoy creating
          original projects with clean and intuitive designs. You can check out
          some of my work in the projects section. <br />
          <br /> I am <b>open</b> to new collaborations or opportunities where
          I can contribute, learn, and grow. Feel free to connect with me.
        </p>
      </div>
    </div>
  );
};

export default About;