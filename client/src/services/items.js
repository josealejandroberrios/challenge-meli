import API from "../config/apiInstance";

const ENPOINTS = {
  getItemBySearch: "/api/items",
  getItemById: (id) => `/api/items/${id}`,
};

export const getItemBySearch = ({ query }) =>
  API.get(ENPOINTS.getItemBySearch, { params: { q: query} });

export const getItemById = ({ id }) => API.get(ENPOINTS.getItemById(id));
