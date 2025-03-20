import React from 'react'
import { Navbar, Hero, Contact, About, Donate } from "./components/index";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <section id="about">
        <About />
      </section>
      <Donate />
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Layout