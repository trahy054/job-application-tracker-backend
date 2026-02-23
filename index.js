const express = require("express");
const cors = require("cors");
const app = express();
const jobRoutes = require("./routes/jobRoutes");

app.use(cors());
app.use(express.json());
app.use("/api", jobRoutes);


app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
