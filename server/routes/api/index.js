import { Router } from "express";

import { ROUTES } from "../../constants";
import itemsRoutes from "./items";

const router = Router();

router.use(ROUTES.ITEMS, itemsRoutes);

export default router;
