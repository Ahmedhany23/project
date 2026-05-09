import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { styles } from "../../styles";
import "./experience.css";
import SectionWrapper from "../../hoc/SectionWrapper";
import { textVariant } from "../../utils/motion";

const experiences = [
  {
    title: "Junior Front-End Developer",
    company_name: "Natlix",
    icon: "natlix.jpg",
    date: "Oct 2024 - Present",
    points: [
      "Contributed to 30+ projects across e-learning platforms and production web apps, owning front-end development from component design to API integration.",
      "Built and maintained reusable, type-safe UI components using React, Next.js 15, and TypeScript, ensuring cross-browser compatibility and accessible markup.",
      "Integrated REST APIs and managed global state for a role-based system serving 4 distinct user types.",
      "Reduced load times by 40% through bundle optimization and lazy loading on high-traffic platforms.",
    ],
    tags: ["React", "Next.js 15", "TypeScript", "REST API", "WCAG"],
  },
  {
    title: "React Frontend Web Developer",
    company_name: "Digital Egypt Pioneers Initiative (DEPI)",
    icon: "https://depi.gov.eg/assets/images/proAr.png",
    date: "2025",
    points: [
      "Completed an intensive React Frontend track, earning a Certificate of Achievement for Best Project.",
      "Developed and maintained web applications using React.js and related modern technologies.",
    ],
    tags: ["React.js", "State Management", "Performance"],
  },
  {
    title: "Intern Front-End Developer",
    company_name: "Web Masters",
    icon: "web-masters.png",
    date: "Jul 2024 - Aug 2024",
    points: [
      "Built responsive product listing and detail pages using React, Next.js, and Tailwind CSS.",
      "Integrated REST APIs to dynamically render vendor product data across listing and detail views.",
    ],
    tags: ["Next.js", "Tailwind CSS", "API Integration"],
  },
];

const ExperienceCard = ({ experience, i, progress, range, targetScale }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(progress, range, [1, targetScale]);
  const cardY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const contentY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.1, 0.95]);
  const imageY = useTransform(scrollYProgress, [0, 1], [-10, 10]);
  const rotate = useTransform(scrollYProgress, [0, 1], [2, -2]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.4, 1], [0.05, 0.15, 0.08]);

  const iconLabel = experience.company_name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const hasImageIcon =
    typeof experience.icon === "string" &&
    (experience.icon.startsWith("http") || experience.icon.includes("."));

  return (
    <div ref={container} className="experience-card-shell">
      <motion.article
        className="experience-card"
        style={{
          scale,
          y: cardY,
          top: `calc(10vh + ${i * 32}px)`,
        }}
      >
        <motion.div
          className="experience-card__glow"
          style={{ opacity: glowOpacity, background: "var(--accent)" }}
        />

        <motion.div className="experience-card__inner" style={{ y: contentY }}>
          <div className="experience-card__header">
            <motion.div
              className="experience-card__icon"
              style={{ rotate }}
            >
              {hasImageIcon ? (
                <motion.img
                  className="experience-card__icon-image"
                  src={experience.icon}
                  alt={experience.company_name}
                  style={{ scale: imageScale, y: imageY }}
                />
              ) : (
                <span className="experience-card__icon-fallback">{iconLabel}</span>
              )}
            </motion.div>

            <div className="experience-card__title-block">
              <p className="experience-card__eyebrow">
                {experience.company_name}
              </p>
              <h3 className="experience-card__title">{experience.title}</h3>
              <p className="experience-card__date">{experience.date}</p>
            </div>
          </div>

          <div className="experience-card__divider" />

          <ul className="experience-card__points">
            {experience.points.map((point, index) => (
              <li key={index} className="experience-card__point">
                {point}
              </li>
            ))}
          </ul>

          {experience.tags && (
            <div className="experience-card__tags">
              {experience.tags.map((tag) => (
                <span key={tag} className="experience-card__tag">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </motion.div>
      </motion.article>
    </div>
  );
};

const Experience = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={container} className="experience-section">
      <motion.div id="experience" variants={textVariant()}>
        <span className="section-label">-- WHAT I HAVE DONE SO FAR</span>
        <h2 className="section-title">Work Experience</h2>
      </motion.div>

      <div className="experience-stack">
        {experiences.map((experience, i) => {
          const targetScale = 1 - (experiences.length - i) * 0.05;

          return (
            <ExperienceCard
              key={`${experience.company_name}-${i}`}
              i={i}
              experience={experience}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
};

export default SectionWrapper(Experience, "work");
