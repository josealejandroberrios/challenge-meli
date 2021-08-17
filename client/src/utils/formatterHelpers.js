export const getFormattedPrice = (priceFraction) => {
  return priceFraction.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
