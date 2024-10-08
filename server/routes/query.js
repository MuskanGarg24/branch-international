// The routes for the query model

const {
  addQuery,
  getQueries,
  getCurrentAdminQueries,
  getCurrentCustomerQueries,
  getSlots,
  resolveQuery,
} = require("../controllers/query");

const router = require("express").Router();
router.post("/add", addQuery);
router.post("/all", getQueries);
router.post("/slots", getSlots);
router.post("/resolve", resolveQuery);
router.post("/admin", getCurrentAdminQueries);
router.post("/customer", getCurrentCustomerQueries);

module.exports = router;
