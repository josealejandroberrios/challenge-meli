import { Router } from "express";

import ItemsController from "../../controllers/items";
import { httpBadRequest, httpOK } from "../../utils/httpResponse";

const router = Router();

/* GET items. */
router.get("/", async (req, res) => {
  const { q } = req.query;

  if (!q) {
    httpBadRequest(res, "the params q is no present");
  } else if (q === "" || q === "undefined") {
    httpBadRequest(res, "the params q has an invalid format");
  } else {
    const data = await ItemsController.searchItems({ search: q });

    httpOK(res, data);
  }
});

/* GET item by id. */
router.get("/:id", function (req, res, next) {
  res.send(`item ${req.params.id}`);
});

export default router;
