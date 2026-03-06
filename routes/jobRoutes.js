const express = require("express");
const router = express.Router();
const {
  getAllJobs,
  addJob,
  updateJob,
  deleteJob
} = require("../controllers/jobController");

// GET all jobs
router.get("/", getAllJobs);

// POST new job
router.post("/", addJob);

// PUT update job
router.put("/:id", updateJob);

// DELETE job
router.delete("/:id", deleteJob);

module.exports = router;