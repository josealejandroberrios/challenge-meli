import React from "react";

import Item from "../Item";

import "./styles.scss";

const ItemsList = ({ items = [] }) => {
  return (
    <div className="list">
      <ol className="list__list">
        {items.map((item) => (
          <li className="list__item" key={item.id}>
            <Item {...item} />
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ItemsList;
