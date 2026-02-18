const express = require("express");
const router = express.Router();
const { getAllJobs, addJob } = require("../controllers/jobController");

router.get("/jobs", getAllJobs);
router.post("/jobs", addJob);

module.exports = router;