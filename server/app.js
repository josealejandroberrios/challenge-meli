import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import logger from "morgan";

import routes from "./routes";

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(routes);

export default app;
