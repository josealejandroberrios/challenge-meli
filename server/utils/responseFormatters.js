const getPriceFraction = (price) => {
  if (Number.isInteger(price)) return price;

  return Math.trunc(price);
};

const getPriceCents = (price) => {
  if (Number.isInteger(price)) return 0;

  const decimal = price.toFixed(2).split(".")[1];
  
  return parseInt(decimal, 10);
};

export const itemFormatter = (item) => ({
  id: item.id,
  title: item.title,
  price: {
    currency: item.currency_id,
    amount: getPriceFraction(item.price),
    decimals: getPriceCents(item.price),
  },
  picture: item?.thumbnail ?? item.pictures?.[0].url,
  condition: item.condition,
  free_shipping: item.shipping.free_shipping,
});

export const categoriesFormatter = (categories) => {
  const currentCategories = categories?.path_from_root ?? [];

  return currentCategories.map((category) => category.name);
};
