import queryString from "query-string";

export const parseQueryString = (query) => queryString.parse(query);

export const encodeQueryString = (params) => queryString.stringify(params);
