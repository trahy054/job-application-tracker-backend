const express = require("express");

const app = express();
const jobRoutes = require("./routes/jobRoutes");

app.use("/api", jobRoutes);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Son! Backend is running");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
