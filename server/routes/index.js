import { Router } from "express";

export default () => {
  const router = Router();

  /* GET home page. */
  router.get("/", function (req, res, next) {
    res.render("index", { title: "Express" });
  });

  return router;
};
