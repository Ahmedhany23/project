import "./hero.css";
import Lottie from "lottie-react";
import laptop from "../../animation/laptop.json";
import { useRef } from "react";
import { motion } from "framer-motion"
const Hero = () => {
  const ref = useRef();
  return (
    <section className="hero flex">
      <div className="first_section ">
        <div className="parent-avatar flex">
          <motion.img initial={{transform:"scale(0)"}} animate={{transform:"scale(1.1)"}} transition={{damping:6,type:"sping",stiffness:100}} src="/img.png" alt="myimage" className="MyImage" />
          <span className="icon-verified"> </span>
        </div>
        <motion.h1 initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2}} className="title">FullStack Developer</motion.h1>
        <p className="subtitle">
          I'm Ahmed Hany, a Fullstack Developer proficient in both Front-end and
          Back-end web Development. My objective is to harness my expertise in HTML,
          CSS, and JavaScript, coupled with my experience in .Net 7.0 C#, and
          SQL, to create dynamic and user-friendly web applications. I am
          actively seeking a challenging Fullstack role where I can further
          enhance my skills and contribute to innovative projects within a
          supportive environment.
        </p>
        <div className="icons">
          <div ><a className="icon icon-github " href="https://github.com/Ahmedhany23"></a></div>
          <div><a href="/AhmedHanyCv.pdf" className="icon icon-envelope" download></a></div>
          <div ><a className="icon icon-linkedin-square" href="https://www.linkedin.com/in/ahmed-hany-a79740216/"></a></div>
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
