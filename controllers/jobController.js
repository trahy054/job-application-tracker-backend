const job = require("../models/job");

// Get all jobs
const getAllJobs = async (req, res) => {
  try {
    const { status, search, sortBy } = req.query;

    let query = {};

    // Filter by status
    if (status) query.status = status;

    // Search by company or position
    if (search) {
      query.$or = [
        { company: { $regex: search, $options: "i" } },
        { position: { $regex: search, $options: "i" } },
      ];
    }

    // Build query
    let jobsQuery = job.find(query);

    // Sort
    if (sortBy === "company") {
      jobsQuery = jobsQuery.sort({ company: 1 });
    } else {
      // Sort by createdAt newest first
      jobsQuery = jobsQuery.sort({ createdAt: -1 });
    }

    const jobs = await jobsQuery;
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add a new job
const addJob = async (req, res) => {
  try {
    const { company, position, status } = req.body;
    const newJob = await job.create({ company, position, status });
    res.status(201).json(newJob);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete a job by ID
const deleteJob = async (req, res) => {
  try {
    const { id } = req.params;
    await job.findByIdAndDelete(id);
    res.json({ message: "Job deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a job by ID
const updateJob = async (req, res) => {
  try {
    const { id } = req.params;
    const { company, position, status } = req.body;

    const updatedJob = await job.findByIdAndUpdate(
      id,
      { company, position, status },
      { new: true }
    );

    if (!updatedJob) return res.status(404).json({ message: "Job not found" });

    res.json(updatedJob);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get job stats
const getJobStats = async (req, res) => {
  try {
    const totalJobs = await job.countDocuments();
    const appliedJobs = await job.countDocuments({ status: "Applied" });
    const interviewJobs = await job.countDocuments({ status: "Interview" });
    const offerJobs = await job.countDocuments({ status: "Offer" });
    const rejectedJobs = await job.countDocuments({ status: "Rejected" });

    res.json({
      totalJobs,
      appliedJobs,
      interviewJobs,
      offerJobs,
      rejectedJobs
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllJobs,
  addJob,
  deleteJob,
  updateJob,
  getJobStats,
};