import axios from "axios";

export const BASE_URL_API = "https://api.mercadolibre.com";

const API = axios.create({ baseURL: BASE_URL_API });

export default API;
