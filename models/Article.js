const mongoose = require("mongoose");
const {Schema} = mongoose;

const articleSchema = new Schema({
  id: { type: String, unique: true, require: true },
  headline: { type: String, required: true },
  byline: { type: String },
  snippet: { type: String },
  url: { type: String },
  pubDate: { type: String }
});

module.exports = mongoose.model("articles", articleSchema);
