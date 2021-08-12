import React from "react";

import NavBar from "../NavBar";

import "./styles.scss";

const Layout = ({ children }) => (
  <div className="container">
    <NavBar />

    <section className="section">
      {children} 
    </section>
  </div>
);

export default Layout;
