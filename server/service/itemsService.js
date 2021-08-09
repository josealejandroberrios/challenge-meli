import API from "./apiInstance";

const ENPOINTS = {
  getItemsBySearch: "/sites/MLA/search",
};

const defaultLimit = 4;

export const getItemsBySearch = ({ search, limit = defaultLimit }) =>
  API.get(ENPOINTS.getItemsBySearch, { params: { q: search, limit } });
