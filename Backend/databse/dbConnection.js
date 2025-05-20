const mongoose = require("mongoose");
const uri = process.env.MONGODB_URI;
const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Mongodb connected successfully");
  } catch (error) {
    console.log("Connection failed !! message : ", error);
  }
};
module.exports = connectDB;
