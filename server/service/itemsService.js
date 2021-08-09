import API from "./apiInstance";

const ENPOINTS = {
  getItemsBySearch: "/sites/MLA/search",
  getItemById: (itemId) => `/items/${itemId}`,
  getItemDescriptionById: (itemId) => `/items/${itemId}/description`,
  getCategoriesById: (categoryId) => `/categories/${categoryId}`,
};

const defaultLimit = 4;

export const getItemsBySearch = ({ search, limit = defaultLimit }) =>
  API.get(ENPOINTS.getItemsBySearch, { params: { q: search, limit } });

export const getItemById = ({ id }) => API.get(ENPOINTS.getItemById(id));

export const getItemDescriptionById = ({ id }) =>
  API.get(ENPOINTS.getItemDescriptionById(id));

export const getCategoriesById = ({ id }) =>
  API.get(ENPOINTS.getCategoriesById(id));
