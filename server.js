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

/** MIDDLEWARE */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

/** ROUTES */
require("./routes/apiRoutes.js")(app);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
