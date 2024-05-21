const express = require("express");
const connectDB = require("./config/db");
const routes = require("./routes/api/address");
const cors = require("cors");
const bodyParser = require("body-parser");

const path = require('path'); // Add this line

const app = express();

// Configure CORS
app.use(cors({
  origin: '*', // Change this to your specific allowed origins as needed
  credentials: true,
  optionsSuccessStatus: 200,
}));

// use the body-parser middleware to parse JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// use the routes module as a middleware
// for the /api/address path
app.use("/api/address", routes);

// Serve static files from the 'backend' directory
app.use('/service/backend/coordinates/polygon.js', express.static(path.join(__dirname, 'backend')));

// Connect Database
connectDB();

app.get("/", (req, res) => res.send("connected to the server!"));
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));