import { Router } from "express";

import ItemsController from "../../controllers/items";
import {
  httpBadRequest,
  httpInternalServerError,
  httpOK,
} from "../../utils/httpResponse";

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

    if (data.error) {
      httpInternalServerError(res);
    } else {
      httpOK(res, data);
    }
  }
});

/* GET item by id. */
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  if (!id) {
    httpBadRequest(res, "the params id is no present");
  } else {
    const data = await ItemsController.itemDetails({ id });
    
    if (data.error) {
      if (data.error === "not_found") {
        httpBadRequest(res, data.message);
      } else {
        httpInternalServerError(res);
      }
    } else {
      httpOK(res, data);
    }
  }
});

export default router;
