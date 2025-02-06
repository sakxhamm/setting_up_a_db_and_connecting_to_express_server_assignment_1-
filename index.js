require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 6000;

// Connect to MongoDB
mongoose
  .connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to database"))
  .catch((err) => console.error(`Error connecting to database: ${err.message}`));

// Middleware
app.use(express.json());

// Basic RoutePort = 8000
DB_URL = "mongodb+srv://sakxxhamm:saksham123@cluster0.orvh3.mongodb.net/"
app.get("/", (req, res) => {
  res.send("Customer Management System Backend is Running");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


