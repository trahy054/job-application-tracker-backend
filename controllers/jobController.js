let jobs = [];

// Get all jobs
const getAllJobs = (req, res) => {
  let result = [...jobs];
  
  const { status, search, sortBy } = req.query;

  // Sort by status
  if (status) {
    result = result.filter(job => job.status.toLowerCase() === status.toLowerCase());
  }

  // Search by company or position
  if (search) {
    const s = search.toLowerCase();
    result = result.filter(job =>
      job.company.toLowerCase().includes(s) ||
      job.position.toLowerCase().includes(s)
    );
  }

  // Sort by sortBy
  if (sortBy) {
    if (sortBy === "company") {
      result.sort((a, b) => a.company.localeCompare(b.company));
    } else if (sortBy === "id") {
      result.sort((a, b) => a.id.localeCompare(b.id));
    }
  }
    res.json(result);
};

// Add a new job
const addJob = (req, res) => {
  const newJob = req.body;
  newJob.id = jobs.length + 1;
  jobs.push(newJob);
  res.status(201).json(newJob);
};

// Delete a job by ID
const deleteJob = (req, res) => {
  const id = parseInt(req.params.id);

  jobs = jobs.filter(job => job.id !== id);

  res.json({ message: "Job deleted successfully" });
};

// Update a job by ID
const updateJob = (req, res) => {
  const id = parseInt(req.params.id);
  const {company , position, status} = req.body;

  const job = jobs.find(j => j.id === parseInt(id));
  if (!job) return res.status(404).json({ message: "Job not found" });

  if (company) job.company = company;
  if (position) job.position = position;
  if (status) job.status = status;

  res.json(job);
}

// Export the controller functions
module.exports = {
    getAllJobs,
    addJob,
    deleteJob,
    updateJob
};