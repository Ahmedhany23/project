import { useEffect, useState } from "react";
import "./App.css";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Main from "./components/main/Main";

function App() {
  const [theme, settheme] = useState(localStorage.getItem("currentMode") ? localStorage.getItem("currentMode") : 'light');
  const [SM, setSM] = useState(false);
  useEffect(() => {
    document.body.classList.toggle("light", theme === "light");
    document.body.classList.toggle("dark", theme === "dark");
  }, [theme]);
  return (
    <div className="app container">
      <button
        className="mode flex"
        onClick={() => {
          localStorage.setItem(
            "currentMode",
            theme === "dark" ? "light" : "dark"
          );

          settheme(localStorage.getItem("currentMode"));
          setSM(SM === false ? true : false);
        }}

        style={{boxShadow:`1px 1px 10px ${SM? 'orange' : ''}`}}
      >
        {theme === 'light' ? (
          <span className="icon-sun" style={{ color: "orange" }}>
          </span>
        ) : (
          <span className="icon-moon-o"> </span>
        )}
      </button>
      <Header />
      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Contact />
      <Footer />
      
    
     
    </div>
  );
}

export default App;
