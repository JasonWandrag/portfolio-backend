const express = require("express");
const projectRoutes = require("./routes/projectRoutes");
const testimonialRoutes = require("./routes/testimonialRoutes");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send({ msg: "Jason's Portfolio Backend" });
});

app.use("/projects", projectRoutes);
app.use("/testimonials", testimonialRoutes);

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log("Press Ctrl+C to quit.");
});
