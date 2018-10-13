const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");

if (typeof process.env.MONGODB_URI !== 'undefined' && process.env.MONGODB_URI.length > 0) {
  mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
} else {
  mongoose.connect("mongodb://localhost/nytimes", { useNewUrlParser: true });
}

/** middleware */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// app.post("/api/article", (req, res) => {
//   console.log(req.body);
//   res.json({
//       test: "test"
//   });
// });

require("./routes/apiRoutes.js")(app);
// app.use("/api", apiRoutes);

// app.get("/api/test", (req, res) => {
//   res.json({test:"TEST"});
// })

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
