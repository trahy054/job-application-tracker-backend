let jobs = [];

const getAllJobs = (req, res) => {
  res.json(jobs);
};

const addJob = (req, res) => {
  const newJob = req.body;
  newJob.id = jobs.length + 1;
  jobs.push(newJob);
  res.status(201).json(newJob);
};

const deleteJob = (req, res) => {
  const id = parseInt(req.params.id);

  jobs = jobs.filter(job => job.id !== id);

  res.json({ message: "Job deleted successfully" });
};

module.exports = {
    getAllJobs,
    addJob,
    deleteJob
};