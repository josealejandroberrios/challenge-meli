import { Router } from "express";

export default () => {
  const router = Router();

  /* GET items. */
  router.get("/items", function (req, res, next) {
    res.send(`items by query ${req.query.search}`);
  });

  /* GET item by id. */
  router.get("/items/:id", function (req, res, next) {
    res.send(`item ${req.params.id}`);
  });

  return router;
};
