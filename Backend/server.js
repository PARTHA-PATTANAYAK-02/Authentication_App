const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
const dbConnection = require("./databse/dbConnection");
const User = require("./databse/user");
const cors = require("cors");
// middleware
app.use(express.json());
app.use(cors());

//get
app.get("/data/:username", async (req, res) => {
  const { username } = req.params;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const { password, ...userInfo } = user._doc;
    res.status(200).json(userInfo);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});
//post
app.post("/register", async (req, res) => {
  const { fullname, username, email, password, createAT } = await req.body;
  // Manual All field validation
  if (!fullname || !username || !email || !password) {
    return res.status(400).json({ error: "All fields are required." });
  }
  if (!createAT) {
    return res.status(400).json({ error: "Server issue try again" });
  }
  try {
    // Check if username or email already exists
    const existingUser = await User.findOne({
      $or: [{ username }, { email }],
    });

    if (existingUser) {
      // If found, send an error message for the field that already exists
      if (existingUser.username === username) {
        return res.status(400).json({ error: "Username already exists." });
      }
      if (existingUser.email === email) {
        return res.status(400).json({ error: "Email already exists." });
      }
    }
    const user = new User({ fullname, username, email, password, createAT });
    await user.save();
    res.status(201).json({ message: "Register" });
  } catch (error) {
    res.status(500).json({ error: "Registration Failed.!! " });
  }
});

//post
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ error: "Invalid username. !!" });
    }
    if (user.password !== password) {
      return res.status(401).json({ error: "Invalid password. !!" });
    }
    res.status(201).json({ message: "Login" });
  } catch (error) {
    res.status(500).json({ error: "Log in faild" });
  }
});
dbConnection();
app.listen(port, () => {
  console.log("====================================");
  console.log("Server is Running on 8000");
  console.log("====================================");
});
