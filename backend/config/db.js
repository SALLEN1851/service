const mongoose = require("mongoose");
const db = 'postgresql://neondb_owner:skU6cxAtObe5@ep-patient-resonance-a5ah72cm-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require' ;

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