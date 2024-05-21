const mongoose = require("mongoose");
const db = "mongodb+srv://sallen106:99t0MqVgX4DH40he@cluster0.0kp1eha.mongodb.net/ONE";

mongoose.set("strictQuery", true, "useNewUrlParser", true);

const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log("MongoDB is Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
module.exports = connectDB;