import React from 'react'
import { Navbar, Hero , Contact , About} from "./components/index";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Layout