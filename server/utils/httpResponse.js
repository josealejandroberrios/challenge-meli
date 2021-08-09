import { STATUS_HTTP_CODES } from "../constants";

export const httpOK = (res, data) => {
  if (!data) {
    return httpNoContent(res);
  }

  res.status(STATUS_HTTP_CODES.OK).json(data);
};

export const httpNoContent = (res) =>
  res.status(STATUS_HTTP_CODES.NO_CONTENT).json({ error: "No Content" });

export const httpBadRequest = (res, exception) =>
  res.status(STATUS_HTTP_CODES.BAD_REQUEST).json({ error: exception || "" });

export const httpInternalServerError = (res) =>
  res
    .status(STATUS_HTTP_CODES.INTERNAL_SERVER_ERROR)
    .json({ error: "Oops! The server has failed!" });
