import React from "react";

import NavBar from "../NavBar";

import "./styles.scss";

const Layout = ({ children }) => (
  <div className="container">
    <NavBar />

    <section className="section">
      <div className="section__wrapped">{children}</div>
    </section>
  </div>
);

export default Layout;
