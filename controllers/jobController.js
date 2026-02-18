let jobs = []

const getAllJobs = (req, res) => {
  res.json(jobs)
};

const addJob = (req, res) => {
  const newJob = req.body;
  newJob.id = job.length + 1;
  jobs.push(newJob);
  res.status(201).json(newJob);
};

module.exports = {
    getAllJobs,
    addJob
};