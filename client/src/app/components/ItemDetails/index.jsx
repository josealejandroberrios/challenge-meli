import React from "react";

import CURRENCIES from "../../../constants/currencies";
import {
  getFormattedPrice,
  getFormatterCondition,
} from "../../../utils/formatterHelpers";
import { toAbsoluteUrl } from "../../../utils/assetsHelpers";

import "./styles.scss";

const ItemDetails = ({
  title,
  price,
  picture,
  condition,
  freeShipping,
  soldQuantity,
  description,
}) => (
  <div className="item_details">
    <div className="item_details__picture">
      <img
        src={picture}
        alt={title}
        title={title}
        className="item_details__picture__img"
      />
    </div>

    <div className="item_details__details">
      <span className="item_details__details__condition">
        {getFormatterCondition(soldQuantity, condition)}
      </span>

      <h1 className="item_details__details__title">{title}</h1>

      <div className="item_details__details__price_location">
        <span className="item_details__details__price_location__currency">
          {CURRENCIES[price.currency]}
        </span>
        <span className="item_details__details__price_location__fraction">
          {getFormattedPrice(price.amount)}
        </span>

        {price.decimals > 0 && (
          <span className="item_details__details__price_location__cents">
            {price.decimals}
          </span>
        )}

        {freeShipping && (
          <div className="item_details__details__free_shipping">
            <img
              className="item_details__details__free_shipping__image"
              src={toAbsoluteUrl("/ic_shipping@2x.png")}
              alt="Envio Gratis"
              title="Envio Gratis"
            />
          </div>
        )}
      </div>

      <button type="button" className="item_details__details__buy">
        Comprar ahora
      </button>
    </div>

    <div className="item_details__description">
      <h3 className="item_details__description__caption">Descripción</h3>
      <p className="item_details__description__text">{description}</p>
    </div>
  </div>
);

export default ItemDetails;
