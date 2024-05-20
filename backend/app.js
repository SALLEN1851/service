require('dotenv').config();
const express = require("express");
const connectDB = require("./config/db");
const routes = require("./routes/api/address");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const db = process.env.MONGO_DB_URI;

// use the cors middleware with the
// origin and credentials options
app.use(cors({ origin: true, credentials: true }));

// use the body-parser middleware to parse JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// use the routes module as a middleware
// for the /api/address path
app.use("/api/address", routes);

// Connect Database
connectDB();

app.get("/", (req, res) => res.send("Hello world!"));
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));