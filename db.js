const mongoose = require("mongoose");
require("dotenv").config();

// Set the strictQuery option to prepare for the deprecation
mongoose.set("strictQuery", false);

// MongoDB Atlas connection URL
const mongoUrl = process.env.mongoUrl;

// Connect to MongoDB Atlas cluster
mongoose
  .connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB Atlas cluster successfully.");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB Atlas cluster:", error.message);
  });

module.exports = mongoose.connection;
