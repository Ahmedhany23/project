import { useEffect } from "react";
import "./App.css";
import About from "./components/about/about";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Main from "./components/main/Main";
import Plan from "./components/plan/Plan";
import Skills from "./components/skills/Skills";
import Testimonials from "./components/testimonials/Testimonials";
import Lenis from "lenis";

function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <div className="app">
      {/* Header is position:fixed — lives outside the container */}
      <Header />

      <main className="page-content">
        {/* Hero: full-bleed section with container inside */}
        <section className="section-full">
          <div className="container">
            <Hero />
          </div>
        </section>

        <div className="divider container" />

        <section className="section-full">
          <div className="container">
            <About />
          </div>
        </section>

        <div className="divider container" />

        <section className="section-full">
          <div className="container">
            <Skills />
          </div>
        </section>

        <div className="divider container" />

        <section className="section-full relative">
          <Experience />
        </section>

        <div className="divider container" />

        <section className="section-full">
          <div className="container">
            <Testimonials />
          </div>
        </section>

        <div className="divider container" />

        <section className="section-full">
          <div className="container">
            <Main />
          </div>
        </section>

        <div className="divider container" />

        <section className="section-full">
          <div className="container">
            <Plan />
          </div>
        </section>

        <div className="divider container" />

        <section className="section-full">
          <div className="container">
            <Contact />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
