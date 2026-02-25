import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import React from "react";

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}