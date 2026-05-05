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
    title: "Junior Front-End Developer",
    company_name: "Natlix",
    icon: "natlix.jpg",
    iconBg: "#383E56",
    date: "Oct 2024 - Present",
    link: "",
    points: [
      "Contributed to 30+ projects across e-learning platforms and production web apps, owning front-end development from component design to API integration.",
      "Built and maintained reusable, type-safe UI components using React, Next.js 15, and TypeScript, ensuring cross-browser compatibility and accessible markup following WCAG standards.",
      "Integrated REST APIs and managed global state for a role-based system serving 4 distinct user types, enforcing access control on the front end.",
      "Reduced load times by 40% through bundle optimization and lazy loading on high-traffic e-learning platforms.",
      "Refactored a legacy production app to Next.js 15, improving SEO through SSR and cutting 3D asset load times via optimization techniques.",
    ],
  },
  {
    title: "React Frontend Web Developer",
    company_name: "Digital Egypt Pioneers Initiative (DEPI)",
    icon: "https://depi.gov.eg/assets/images/proAr.png",
    iconBg: "#ffff",
    date: "2025",
    link: "",
    points: [
      "Completed an intensive React Frontend track, earning a Certificate of Achievement for Best Project.",
      "Developed and maintained web applications using React.js and related modern technologies.",
    ],
  },
  {
    title: "Intern Front-End Developer",
    company_name: "Web Masters",
    icon: "web-masters.png",
    iconBg: "#fff",
    date: "Jul 2024 - Aug 2024",
    link: "",
    points: [
      "Built responsive product listing and detail pages using React, Next.js, and Tailwind CSS, ensuring consistent UI across devices.",
      "Integrated REST APIs to dynamically render vendor product data across listing and detail views.",
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