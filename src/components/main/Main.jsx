import { useState } from "react";
import "./main.css";
import { AnimatePresence, motion } from "framer-motion";

const myProjects = [
  {
    ProjectName: "Excluvio",
    category: ["next", "react"],
    imgPath: "/Landing4.png",
    images: ["/Landing4.png"],
    WURL: "https://excluvio.vercel.app/",
    GURL: "https://github.com/Ahmedhany23/excluvio",
    text: "An E-commerce platform to browse, search, and purchase products seamlessly.",
    stack: ["Next.js", "TypeScript", "Zustand", "TanStack Query", "Stripe", "Jest"],
    details: [
      "Built a high-performance shopping cart with Zustand for instant client-side state and TanStack Query for server sync, including cross-session persistence.",
      "Developed a vendor product management system with real-time UI updates for creating, editing, and deleting listings.",
      "Integrated Stripe for secure, end-to-end checkout and payment processing.",
      "Wrote automated tests with Jest and React Testing Library covering authentication flows.",
    ],
  },
  {
    ProjectName: "Moviepick",
    category: ["next", "react"],
    imgPath: "/Landing9.jpg",
    images: ["/Landing9.jpg"],
    WURL: "https://moviepick-black.vercel.app/",
    GURL: "https://github.com/Ahmedhany23/movies",
    text: "Moviepick is a web application focused on movies, designed to help users discover and explore films.",
    stack: ["Next.js", "React", "Tailwind CSS", "REST API"],
    details: [
      "Integrated a movies REST API to fetch and display live data including ratings, descriptions, and trailers.",
      "Implemented search and filtering to help users discover films by genre, rating, and release year.",
      "Built with Next.js App Router for optimized SSR and fast page loads.",
    ],
  },
  {
    ProjectName: "Rebelrover",
    category: "react",
    imgPath: "/Landing6.JPG",
    images: ["/Landing6.JPG"],
    WURL: "https://rebelrover.vercel.app/",
    GURL: "https://github.com/Ahmedhany23/rebel",
    text: "Responsive Design with Tailwind CSS and Framer Motion animations.",
    stack: ["React", "Tailwind CSS", "Framer Motion"],
    details: [
      "Designed and built a fully responsive UI using Tailwind CSS utility classes.",
      "Added smooth page transitions and scroll-triggered animations using Framer Motion.",
      "Ensured cross-browser compatibility and consistent layout across all screen sizes.",
    ],
  },
  {
    ProjectName: "Jobstack",
    category: "react",
    imgPath: "/Landing8.PNG",
    images: ["/Landing8.PNG"],
    WURL: "https://jobstack-delta.vercel.app/",
    GURL: "https://github.com/Ahmedhany23/jobstack",
    text: "Responsive Design with Tailwind CSS and Framer Motion animations.",
    stack: ["React", "Tailwind CSS", "Framer Motion"],
    details: [
      "Built a job listing interface with filtering and search functionality.",
      "Implemented animated card transitions and layout shifts using Framer Motion.",
      "Optimized for mobile-first responsive design across all breakpoints.",
    ],
  },
  {
    ProjectName: "Vivadecor",
    category: ["css", "js"],
    imgPath: "/Landing2.png",
    images: ["/Landing2.png"],
    WURL: "https://vivadecor-three.vercel.app/",
    GURL: "https://github.com/Ahmedhany23/WebmasterTask2/tree/main/task1",
    text: "Responsive Design with Tailwind CSS and vanilla JavaScript.",
    stack: ["HTML", "CSS", "JavaScript"],
    details: [
      "Built a fully responsive decorating showcase website using vanilla HTML, CSS, and JavaScript.",
      "Implemented interactive UI elements and smooth transitions without any frameworks.",
      "Ensured pixel-perfect layout consistency across desktop, tablet, and mobile devices.",
    ],
  },
];

const Main = () => {
  const [Active, setActive] = useState("all");
  const [arr, setArr] = useState(myProjects);
  const [selectedProject, setSelectedProject] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setPreviewImage(project.imgPath);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    setPreviewImage(null);
    document.body.style.overflow = "auto";
  };

  return (
    <main id="project" className="flex">
      <div className="projects-header">
        <span className="section-label">-- MY WORK</span>
        <h2 className="section-title">Featured Projects</h2>
      </div>

      <section className="flex left-section">
        {["all", "css", "js", "react", "next"].map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActive(cat);
              if (cat === "all") {
                setArr(myProjects);
              } else {
                const newArr = myProjects.filter((item) => {
                  if (Array.isArray(item.category)) {
                    return item.category.includes(cat);
                  }
                  return item.category === cat;
                });
                setArr(newArr);
              }
            }}
            className={Active === cat ? "active" : null}
          >
            {cat === "all" ? "All Projects" : cat === "css" ? "HTML & CSS" : cat}
          </button>
        ))}
      </section>

      <section className="right-section flex">
        <AnimatePresence>
          {arr.map((project) => (
            <motion.article
              layout
              initial={{ transform: "scale(0)" }}
              animate={{ transform: "scale(1)" }}
              transition={{ type: "spring", damping: 20, stiffness: 80 }}
              key={project.ProjectName}
              className="card"
              onClick={() => openModal(project)}
            >
              <img src={project.imgPath} alt={project.ProjectName} />
              <div className="box">
                <h1 className="title">{project.ProjectName}</h1>
                <p className="sub-title">{project.text}</p>
                
                {project.stack && (
                  <div className="card-stack">
                    {project.stack.slice(0, 3).map((tech) => (
                      <span key={tech} className="stack-tag">{tech}</span>
                    ))}
                    {project.stack.length > 3 && <span className="stack-tag">...</span>}
                  </div>
                )}

                <div className="flex icons">
                  <div className="flex icon" onClick={(e) => e.stopPropagation()}>
                    <a className="icon-link" href={project.WURL} target="_blank" rel="noreferrer"></a>
                    <a className="icon-github" href={project.GURL} target="_blank" rel="noreferrer"></a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </section>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="modal-overlay">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="project-modal"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close icon-clear" onClick={closeModal}></button>

              <div className="modal-content">
                <div className="modal-media">
                  <div className="image-preview">
                    <img src={previewImage} alt="Preview" />
                  </div>
                  <div className="image-thumbnails scrollbar-hide">
                    {selectedProject.images?.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt={`Thumb ${i}`}
                        className={previewImage === img ? "active-thumb" : ""}
                        onClick={() => setPreviewImage(img)}
                      />
                    ))}
                  </div>
                </div>

                <div className="modal-info">
                  <h2 className="modal-title">{selectedProject.ProjectName}</h2>
                  <p className="modal-desc">{selectedProject.text}</p>

                  {/* Tech Stack */}
                  {selectedProject.stack && (
                    <div className="modal-stack">
                      {selectedProject.stack.map((tech) => (
                        <span key={tech} className="stack-badge">{tech}</span>
                      ))}
                    </div>
                  )}

                  {/* Key Features */}
                  {selectedProject.details && (
                    <div className="modal-details">
                      <h3 className="modal-details-heading">Key Features</h3>
                      <ul>
                        {selectedProject.details.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="modal-actions">
                    <a href={selectedProject.GURL} target="_blank" rel="noreferrer" className="modal-btn secondary">
                      <span className="icon-github"></span> GitHub
                    </a>
                    <a href={selectedProject.WURL} target="_blank" rel="noreferrer" className="modal-btn primary">
                      <span className="icon-link"></span> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="modal-overlay" onClick={closeModal}></div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Main;