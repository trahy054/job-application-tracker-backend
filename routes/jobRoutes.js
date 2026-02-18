const express = require("express");
const router = express.Router();
const { getAllJob, addJob } = require("../controllers/jobController");

router.get("/jobs", getAllJob);
router.post("/jobs", addJob);

module.exports = router;