import { useState } from "react";
import "./main.css";
import { AnimatePresence, motion } from "framer-motion";
const myProjects = [
  {
    ProjectName: "HTML&CSS project",
    category: "css",
    imgPath: "/Landing.JPG",
    WURL: "https://ahmedhany23.github.io/Template-1/",
    GURL: "https://github.com/Ahmedhany23/Template-1",
    text: "Responsive Design with Flexbox for Seamless User Experience",
  },
  {
    ProjectName: "HTML&CSS project",
    category: "css",
    imgPath: "/Landing1.JPG",
    WURL: "https://ahmedhany23.github.io/Template-3/",
    GURL: "https://github.com/Ahmedhany23/Template-3",
    text:"Elevating User Experience with Grid Technology: Design Excellence and Responsive Web Development",
  },
  {
    ProjectName: "JS project",
    category: "js",
    imgPath: "/Landing2.JPG",
    WURL: "https://ahmedhany23.github.io/Template-2/",
    GURL: "https://github.com/Ahmedhany23/Template-2",
    text:" Leveraging Flexbox and JavaScript for Enhanced User Engagement"
  },
  {
    ProjectName: "TasksToDo",
    category: "react",
    imgPath: "/Landing3.JPG",
    WURL: "https://taskstodo-a22a6.web.app/",
    GURL: "https://github.com/Ahmedhany23/TasksToDo",
    text:" Developed features for task assignment, progress tracking, and status updates",
  },
  {
    ProjectName: "ShoppingCartReact",
    category: "react",
    imgPath: "/Landing5.JPG",
    WURL: "https://shoppingreact-c5d94.web.app/",
    GURL: "https://github.com/Ahmedhany23/ShoppingReact",
    text:" Our solution combines the robust capabilities of Node.js and Express.js with the versatility of React.js to seamlessly fetch API data for product integration. "
  },
  {
    ProjectName: "SocialReact",
    category: "react",
    imgPath: "/Landing4.JPG",
    WURL: "https://socialreact-5807f.web.app/",
    GURL: "https://github.com/Ahmedhany23/SocialReact",
    text:" Leveraging Material-UI for Rapid Responsiveness and Dynamic Theme Switching"
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
              return item.category == "css";
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
              return item.category == "js";
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
              return item.category == "react";
            });
            setArr(newArr);
          }}
          className={Active === "react" ? "active" : null}
        >
          React
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
                transition={{ type: "spring", damping: 8, stiffness: 50 }}
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
                  <p className="sub-title">
                    {params.text}
                  </p>
                  <div className="flex icons">
                    <div className="flex icon">
                      <div>
                        <a className="icon-link" href={params.WURL}></a>
                      </div>
                      <div>
                        <a className="icon-github" href={params.GURL}></a>
                      </div>
                    </div>

                    <a href="" className="link flex ">
                      more{" "}
                      <span
                        style={{ alignSelf: "end" }}
                        className="icon-arrow-right"
                      />
                    </a>
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
