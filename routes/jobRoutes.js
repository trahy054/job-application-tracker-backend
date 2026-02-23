const express = require("express");
const router = express.Router();
const { getAllJobs, addJob, deleteJob } = require("../controllers/jobController");

router.get("/jobs", getAllJobs);
router.post("/jobs", addJob);
router.delete("/jobs/:id", deleteJob);



module.exports = router;