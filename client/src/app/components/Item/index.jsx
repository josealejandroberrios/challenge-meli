import React, { useMemo } from "react";
import { Link } from "react-router-dom";

import CURRENCIES from "../../../constants/currencies";
import PATHS from "../../../constants/paths";
import { toAbsoluteUrl } from "../../../utils/assetsHelpers";
import { getFormattedPrice } from "../../../utils/formatterHelpers";

import "./styles.scss";

const Item = ({
  id,
  price,
  title,
  picture,
  freeShipping,
  address = "Capital Federal",
}) => {
  const linkDetailsItemById = useMemo(() => `${PATHS.ITEMS}/${id}`, [id]);

  return (
    <div className="item_searched">
      <div className="item_searched__container">
        <div className="item_searched__image">
          <Link to={linkDetailsItemById} className="item_searched__image_link">
            <img
              className="item_searched__image_image"
              src={picture}
              alt={title}
              title={title}
            />
          </Link>
        </div>

        <div className="item_searched__details">
          <div className="item_searched__price_location">
            <span className="item_searched__price_location__currency">
              {CURRENCIES[price.currency]}
            </span>
            <span className="item_searched__price_location__fraction">
              {getFormattedPrice(price.amount)}
            </span>

            {price.decimals > 0 && (
              <span className="item_searched__price_location__cents">
                {price.decimals}
              </span>
            )}

            {freeShipping && (
              <div className="item_searched__free_shipping">
                <img
                  className="item_searched__free_shipping__image"
                  src={toAbsoluteUrl("/ic_shipping@2x.png")}
                  alt="Envio Gratis"
                  title="Envio Gratis"
                />
              </div>
            )}
          </div>

          <div className="item_searched__title">
            <Link
              to={linkDetailsItemById}
              className="item_searched__title__link"
            >
              <h2 className="item_searched__title__text">{title}</h2>
            </Link>
          </div>
        </div>

        <div className="item__address">
          <div className="item__address__wrapped">
            <p className="item__address__text">{address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
