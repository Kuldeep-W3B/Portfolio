require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 

app.use(
  cors({
    origin: "https://portfolio-mocha-beta-22.vercel.app/",
    methods: ["GET", "POST"],
    credentials: true,
  })
);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error: ", err));

// Schema
const schemaData = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", schemaData);

// User register
app.post("/contacts", async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ msg: "All fields are required" });
  }

  try {
    const user = new User({ name, email, message });
    await user.save();
    res.status(200).json({ msg: "message sent successfully" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
