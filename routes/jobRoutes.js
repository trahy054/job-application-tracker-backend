const express = require("express");
const router = express.Router();
const {
  getAllJobs,
  addJob,
  updateJob,
  deleteJob,
  getJobStats
} = require("../controllers/jobController");

// GET all jobs
router.get("/", getAllJobs);

// POST new job
router.post("/", addJob);

// PUT update job
router.put("/:id", updateJob);

// DELETE job
router.delete("/:id", deleteJob);

// GET job stats
router.get("/stats", getJobStats);

module.exports = router;