require('dotenv').config();
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
app.use('/service/backend', express.static(path.join(__dirname, 'backend')));

// Connect Database
connectDB();

res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Mapbox Example</title>
        <script src='https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.js'></script>
        <link href='https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.css' rel='stylesheet' />
      </head>
      <body>
        <div id="map" style="width: 100%; height: 400px;"></div>
        <script>
          const MAPBOX_TOKEN = '${process.env.MAPBOX_TOKEN}';
          mapboxgl.accessToken = MAPBOX_TOKEN;
          const map = new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/mapbox/streets-v11', // style URL
            center: [-74.5, 40], // starting position [lng, lat]
            zoom: 9 // starting zoom
          });
        </script>
      </body>
    </html>
  `);
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));