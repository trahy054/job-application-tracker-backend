const express = require("express");
const router = express.Router();
const { getAllJobs, addJob, deleteJob, updateJob } = require("../controllers/jobController");

router.get("/jobs", getAllJobs);
router.post("/jobs", addJob);
router.delete("/jobs/:id", deleteJob);
router.put("/jobs/:id", updateJob);


module.exports = router;