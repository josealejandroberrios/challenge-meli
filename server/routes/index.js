import { Router } from "express";

import { NAME_SPACE } from "../constants";
import apiRoutes from "./api";

const router = Router();

router.use(NAME_SPACE, apiRoutes);

export default router;
