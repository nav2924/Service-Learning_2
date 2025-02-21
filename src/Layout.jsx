import React from 'react'
import { Navbar, Hero , Contact , About} from "./components/index";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Hero />

      <section id="contact">
        <Contact />
      </section>
      <section id="contact">
        <About/>
      </section>
    </div>
  );
};

export default Layout