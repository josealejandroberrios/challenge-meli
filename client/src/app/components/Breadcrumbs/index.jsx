import React from "react";

import "./styles.scss";

const BreadCrumbs = ({ categories = [] }) => (
  <div className="bread-crumbs">
    <ul className="bread-crumbs__list">
      {categories.map((category, index) => (
        <li className="bread-crumbs__item" key={`${category}-${index}`}>
          <a href="/" title={category} className="bread-crumbs__item__link">
            {category}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default BreadCrumbs;
