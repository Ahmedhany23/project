import "./skills.css";
import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Frontend Core",
    skills: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "SCSS", "Tailwind CSS"],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      "React",
      "Next.js (App Router)",
      "Redux",
      "Zustand",
      "TanStack Query",
      "React Hook Form",
      "Zod",
      "Three.js",
      "React Three Fiber",
      "Ant Design",
    ],
  },
  {
    category: "Testing",
    skills: ["Jest", "React Testing Library"],
  },
  {
    category: "Tools & Backend",
    skills: ["Git", "GitHub", "REST APIs"],
  },
  {
    category: "Soft Skills",
    skills: ["Problem-Solving", "Team Collaboration", "Communication", "Continuous Learning"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-header">
        <span className="section-label">-- EXPERTISE</span>
        <h2 className="section-title">Technical Skills</h2>
      </div>

      <div className="skills-grid">
        {skillsData.map((item, index) => (
          <motion.div 
            key={index} 
            className="skills-category-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <h3 className="category-title">{item.category}</h3>
            <div className="skills-list">
              {item.skills.map((skill, i) => (
                <span key={i} className="skill-chip">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
