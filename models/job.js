const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    company: { type: String, required: true },
    position: { type: String },
    status: { type: String, required: true, enum: ["Applied", "Interview", "Offer", "Rejected"] },
  },
  { timestamps: true } 
);

module.exports = mongoose.model("Job", jobSchema);