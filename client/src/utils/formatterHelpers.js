import { CONDITIONS } from "../constants/conditions";

export const getFormattedPrice = (priceFraction) => {
  return priceFraction.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

export const maybePluralize = (count, noun, suffix = "s") =>
  `${count} ${noun}${count !== 1 ? suffix : ""}`;

export const getFormatterCondition = (soldQuantity, condition) => {
  const hasSold = soldQuantity > 0;
  const typeCondition = CONDITIONS[condition];

  return typeCondition && hasSold
    ? `${typeCondition} - ${maybePluralize(soldQuantity, "vendido")}`
    : typeCondition;
};
