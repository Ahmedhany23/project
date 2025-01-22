import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../../styles";
import "./experience.css";
import SectionWrapper from "../../hoc/SectionWrapper";
import { textVariant } from "../../utils/motion";

const experiences = [
  {
    title: "Junior Front End Developer",
    company_name: "Natlix Company",
    icon: "natlix.jpg",
    iconBg: "#383E56",
    date: "Oct 2024 - Present",
    link: "",
    points: [
      "Refactored the codebase of an e-learning website to improve readability, maintainability, and efficiency, adhering to modern coding standards.",
      "Adapted Agile methodologie to uphold strong programming practices.",
      "Implemented responsive designs, improving cross-device functionality.",
      "Developed SEO strategies leading to optimized page performance.",
      "Using technologies like ReactJs And NextJS.",
    ],
  },
  {
    title: "Trainee React Front End Devloper",
    company_name: "DEPI",
    icon: "https://depi.gov.eg/assets/images/proAr.png",
    iconBg: "#ffff",
    date: "Oct 2024 - Present",
    link: "",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
    ],
  },
  {
    title: "Intern Front End Devloper",
    company_name: "Web Master Intern",
    icon: "https://media.licdn.com/dms/image/v2/D4D0BAQFIwfbOUpEgFg/company-logo_200_200/company-logo_200_200/0/1719256361352?e=1745452800&v=beta&t=F3QvKqQtH39VF9nNEAcI1TrYA56v2aC3SJ8vr0EPjc4",
    iconBg: "#383E56",
    date: "July 2024 - Aug 2024",
    link: "",
    points: [
      "Ensured the website’s responsiveness, optimizing its functionality across multiple devices.",
    ],
  },
];

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={<div className="subtitle-experience">{experience.date}</div>}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="center-image">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="icon-image"
          />
        </div>
      }
    >
      <div>
        <h3 className="Etitle ">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold company_name"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="points">
        {experience.points.map((point, index) => (
          <li key={`experience-point-${index}`} className="point">
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div id="experience" variants={textVariant()}>
        <p className={`${styles.sectionSubText} subtitle-experience`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} title-experience`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
