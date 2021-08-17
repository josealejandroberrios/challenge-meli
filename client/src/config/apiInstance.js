import axios from "axios";
import { camelcaseSerializer } from "../utils/serializer";

export const BASE_URL_API = "http://localhost:9000";

const API = axios.create({ baseURL: BASE_URL_API });

export function setupApi() {
  API.interceptors.response.use(
    (req) => {
      if (req.data) req.data = camelcaseSerializer.serialize(req.data);

      return req;
    },
    (err) => Promise.reject(err)
  );
}

export default API;
