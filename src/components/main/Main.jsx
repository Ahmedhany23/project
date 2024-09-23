import { useState } from "react";
import "./main.css";
import { AnimatePresence, motion } from "framer-motion";
const myProjects = [
  {
    ProjectName: "Moviepick",
    category: ["next","react"],
    imgPath: "/Landing9.jpg",
    WURL: "https://moviepick-black.vercel.app/",
    GURL: "https://github.com/Ahmedhany23/movies",
    text: " Moviepick is a web application focused on movies, designed to help users discover and explore films.",
  },
  {
    ProjectName: "Weather",
    category: "react",
    imgPath: "/Landing10.png",
    WURL: " https://weather-eosin-three.vercel.app/",
    GURL: "https://github.com/Ahmedhany23/weather",
    text: " Weather is a web application focused on weather, Provides daily update of the Weather.",
  },
  {
    ProjectName: "Eccomerce-React",
    category: "react",
    imgPath: "/Landing4.png",
    WURL: "https://ecommerce-reactapp-eta.vercel.app/",
    GURL: "https://github.com/Ahmedhany23/ecommerce-reactapp",
    text: "An E-commerce platform to browse, search, and purchase products seamlessly.",
  },
  {
    ProjectName: "RebelRover",
    category: "react",
    imgPath: "/Landing6.JPG",
    WURL: "https://rebelrover.vercel.app/",
    GURL: "https://github.com/Ahmedhany23/rebel",
    text: " Responsive Design with Tailwindcss and Using Framer Motion",
  },
  {
    ProjectName: "JobStack",
    category: "react",
    imgPath: "/Landing8.PNG",
    WURL: "https://jobstack-delta.vercel.app/",
    GURL: "https://github.com/Ahmedhany23/jobstack",
    text: " Responsive Design with Tailwindcss and Using Framer Motion",
  },
  {
    ProjectName: "VivaDecor",
    category: ["css", "js"],
    imgPath: "/Landing2.png",
    WURL: "https://vivadecor-three.vercel.app/",
    GURL: "https://github.com/Ahmedhany23/WebmasterTask2/tree/main/task1",
    text: " Responsive Design with Tailwindcss and Using JavaScript",
  },
  {
    ProjectName: "Solar",
    category: ["css"],
    imgPath: "/Landing.png",
    WURL: "https://solar-web-master.vercel.app/",
    GURL: "https://github.com/Ahmedhany23/WebmasterTasks/tree/main/task1",
    text: " Responsive Design with Html&CSS",
  },
  {
    ProjectName: "Ecommerce",
    category: ["next","react"],
    imgPath: "/Landing3.png",
    WURL: "https://ecommerce-2025.vercel.app/",
    GURL: "https://github.com/Ahmedhany23/ecommerce",
    text: " This project is built using Node.js for the backend API and Firebase for authentication, providing a seamless shopping experience with features like product search, category filters, and user reviews.",
  },
];
const Main = () => {
  const [Active, setActive] = useState("all");
  const [arr, setArr] = useState(myProjects);
  return (
    <main id="project" className="flex">
      <section className="flex left-section">
        <button
          onClick={() => {
            setActive("all");
            setArr(myProjects);
          }}
          className={Active === "all" ? "active" : null}
        >
          All Projects
        </button>
        <button
          onClick={() => {
            setActive("css");
            const newArr = myProjects.filter((item) => {
              return item.category[0] == "css";
            });
            setArr(newArr);
          }}
          className={Active === "css" ? "active" : null}
        >
          HTML & CSS
        </button>
        <button
          onClick={() => {
            setActive("js");
            const newArr = myProjects.filter((item) => {
              return item.category[1] == "js";
            });
            setArr(newArr);
          }}
          className={Active === "js" ? "active" : null}
        >
          JavaScript
        </button>
        <button
          onClick={() => {
            setActive("react");
            const newArr = myProjects.filter((item) => {
              return item.category[1] == "react" || item.category == "react";
            });
            setArr(newArr);
          }}
          className={Active === "react" ? "active" : null}
        >
          React
        </button>
        <button
          onClick={() => {
            setActive("next");
            const newArr = myProjects.filter((item) => {
              return item.category[0] == "next";
            });
            setArr(newArr);
          }}
          className={Active === "next" ? "active" : null}
        >
          NextJs
        </button>
      </section>
      <section className="right-section  flex">
        <AnimatePresence>
          {arr.map((params) => {
            return (
              <motion.article
                layout
                initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 10, stiffness: 80 }}
                key={params.imgPath}
                className="card "
              >
                <img
                  src={params.imgPath}
                  style={{ borderRadius: "5px" }}
                  width={298}
                  height={159}
                />
                <div className="box ">
                  <h1 className="title">{params.ProjectName}</h1>
                  <p className="sub-title">{params.text}</p>
                  <div className="flex icons">
                    <div className="flex icon">
                      <div>
                        <a className="icon-link" href={params.WURL}></a>
                      </div>
                      <div>
                        <a className="icon-github" href={params.GURL}></a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
      
    </main>
  );
};

export default Main;
