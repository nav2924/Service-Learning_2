import React from 'react'
import { Navbar } from "./components/index";

const Layout = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-b from-slate-50 via-blue-100 to-blue-300">
      <Navbar />
    </div>
  );
};

export default Layout