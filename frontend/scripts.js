mapboxgl.accessToken = 'pk.eyJ1Ijoic2FsbGVuMTA2IiwiYSI6ImNscXlham03ZzBubGcya3BveXJveWRtaTQifQ.l4TqDA9Ht87uHzHR-e-Vmg'; 
const map = new mapboxgl.Map({
    container: 'map', // The HTML element ID where the map will be inserted
    style: 'mapbox://styles/mapbox/light-v10', 
    center: [-85.2913559, 39.8089351], // Set the initial position [longitude, latitude]
    zoom: 10 // Set the initial zoom level
});



import { polygonCoordinates } from 'http://127.0.0.1:5500/backend/coordinates/polygon.js'; // Adjust the path as needed
import { SunSetAreaCoordinates } from 'http://127.0.0.1:5500/backend/coordinates/polygon.js'; // Adjust the path as needed
import { MeekRdCoordinates } from 'http://127.0.0.1:5500/backend/coordinates/polygon.js';
import { WhiteWaterCoordinates } from 'http://127.0.0.1:5500/backend/coordinates/polygon.js';
import { LeadLineCoordinates } from 'http://127.0.0.1:5500/backend/coordinates/polygon.js';
import { RDOFCoordinates } from 'http://127.0.0.1:5500/backend/coordinates/polygon.js';
import { MattieHarrisCoordinates } from 'http://127.0.0.1:5500/backend/coordinates/polygon.js'; 




let marker;
    const notification = document.getElementById('notification');

    map.on('load', () => {
      // Add your first polygon
      map.addLayer({
        id: 'my-polygon',
        type: 'fill',
        source: {
          type: 'geojson',
          data: {
            type: 'Feature',
            geometry: {
              type: 'Polygon',
              coordinates: [SunSetAreaCoordinates],
            },
          },
        },
        layout: {},
        paint: {
          'fill-color': '#05B4DF',
          'fill-opacity': 0.3,
          'fill-outline-color': '#088',
        },
      });

      // Add your second polygon
      map.addLayer({
        id: 'lead-line-polygon',
        type: 'fill',
        source: {
          type: 'geojson',
          data: {
            type: 'Feature',
            geometry: {
              type: 'Polygon',
              coordinates: [WhiteWaterCoordinates],
            },
          },
        },
        layout: {},
        paint: {
          'fill-color': '#05B4DF',
          'fill-opacity': 0.3,
          'fill-outline-color': '#088', // Optional: Outline color
        },
      });
    

       // Add your third polygon
      map.addLayer({
        id: 'nc-polygon',
        type: 'fill',
        source: {
          type: 'geojson',
          data: {
            type: 'Feature',
            geometry: {
              type: 'Polygon',
              coordinates: [MeekRdCoordinates],
            },
          },
        },
        layout: {},
        paint: {
          'fill-color': '#05B4DF',
          'fill-opacity': 0.3,
          'fill-outline-color': '#088', // Optional: Outline color
        },
      });
 

         // Add your fourth polygon
      map.addLayer({
        id: 'ny-state-polygon',
        type: 'fill',
        source: {
          type: 'geojson',
          data: {
            type: 'Feature',
            geometry: {
              type: 'Polygon',
              coordinates: [LeadLineCoordinates],
            },
          },
        },
        layout: {},
        paint: {
          'fill-color': '#371F76',
          'fill-opacity': 0.3,
          'fill-outline-color': '#088', // Optional: Outline color
        },
      });
   

           // Add your fifth polygon
      map.addLayer({
        id: 'rdof-polygon',
        type: 'fill',
        source: {
          type: 'geojson',
          data: {
            type: 'Feature',
            geometry: {
              type: 'Polygon',
              coordinates: [RDOFCoordinates],
            },
          },
        },
        layout: {},
        paint: {
          'fill-color': '#DEA731',
          'fill-opacity': 0.3,
          'fill-outline-color': '#088', // Optional: Outline color
        },
      });

               // Add your sixth polygon
      map.addLayer({
        id: 'mattieHarrisPolygon',
        type: 'fill',
        source: {
          type: 'geojson',
          data: {
            type: 'Feature',
            geometry: {
              type: 'Polygon',
              coordinates: [MattieHarrisCoordinates],
            },
          },
        },
        layout: {},
        paint: {
          'fill-color': '#05B4DF',
          'fill-opacity': 0.3,
          'fill-outline-color': '#088', // Optional: Outline color
        },
      });
    });




    document.addEventListener('DOMContentLoaded', function() {
    const submitBtn = document.getElementById('submit-btn');
    if (submitBtn) {
        submitBtn.addEventListener('click', submitAddress);
    }
});

 const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
    });

  console.log('Geocoder initialized.');


    document.getElementById('geocoder').appendChild(geocoder.onAdd(map));

     function capitalizeFirstLetter(str) {
      return str.replace(/\b\w/g, (match) => match.toUpperCase());
    }

    console.log('Geocoder added to the HTML.');

    async function submitAddress() {
      const streetAddress = capitalizeFirstLetter(document.getElementById('streetAddress').value);
      const city = capitalizeFirstLetter(document.getElementById('city').value);
      const state = document.getElementById('state').value.toUpperCase();
      const zipcode = document.getElementById('zipcode').value;

      const fullAddress = `${streetAddress}, ${city}, ${state} ${zipcode}`;

    

      console.log(fullAddress); // Check if fullAddress is capitalized correctly
    
      try {
        // Convert the address to geocoordinates using Mapbox Geocoding API
        const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(fullAddress)}.json?access_token=${mapboxgl.accessToken}`);
        console.log("geocoordines translation");
if (!response.ok) {
  throw new Error('Failed to geocode address');
}
const data = await response.json();


        // Retrieve the coordinates from the geocoding response
        const coordinates = data.features[0].geometry.coordinates;
        console.log(coordinates); // Check the coordinates


        // Fly to the new marker's location
        map.flyTo({
          center: coordinates,
          zoom: 15, // You can adjust the zoom level as needed
          speed: 1.5, // Animation speed
        });


        // Place a marker at the address location
        new mapboxgl.Marker({
    color: "#05B4DF" // Hex code for yellow
})
            .setLngLat(coordinates)
            .addTo(map);

// Assuming 'coordinates' is [longitude, latitude] of the marker
const point = turf.point(coordinates);

// Create separate polygons for each set of coordinates
const polygonMeekRd = turf.polygon([MeekRdCoordinates]);
const polygonWhiteWater = turf.polygon([WhiteWaterCoordinates]);
const polygonSunSetArea = turf.polygon([SunSetAreaCoordinates]);
const polygonLeadLine = turf.polygon([LeadLineCoordinates]);
const polygonRDOF = turf.polygon([RDOFCoordinates]);
const mattieHarrisPolygon = turf.polygon([MattieHarrisCoordinates]);

// Check if the point is inside any of the polygons
const isInsideMeekRd = turf.booleanPointInPolygon(point, polygonMeekRd);
const isInsideWhiteWater = turf.booleanPointInPolygon(point, polygonWhiteWater);
const isInsideSunSetArea = turf.booleanPointInPolygon(point, polygonSunSetArea);
const isInsideLeadLine = turf.booleanPointInPolygon(point, polygonLeadLine);
const isInsideRDOF = turf.booleanPointInPolygon(point, polygonRDOF);
const isInsideMattieHarris = turf.booleanPointInPolygon(point, mattieHarrisPolygon);
const isInsidePolygon = isInsideMeekRd || isInsideWhiteWater || isInsideSunSetArea || isInsideLeadLine || isInsideRDOF || isInsideMattieHarris;


// Determine which polygon the point is in and display a unique message
let message;
if (isInsideMeekRd) {
    message = `<h2 class="section-heading">You're Qualified!</h2><p><strong>${fullAddress}</strong> is qualified for fiber optic internet service.</p>
               <p>If you would like fiber optic internet service at your residence, please click the sign up now button and you can fill out the residential service agreement.</p>
               <div>
                   <a href="https://nlbcnltc.eversign.com/embedded/552f574523c247f0821d4b984484ea65" class="button-link">Sign up now</a>
               </div>
               <p>If you are interested in a commercial internet service or would like to speak with a representative, 
                   <a href="https://share.hsforms.com/1IXoUM1AlTMClAEYjqMJr7w473vr" id="form-link">please click here to fill out our contact form to have a representative reach out to you.</a> </p>`;
               

} else if (isInsideWhiteWater) {
    message = `<h2 class="section-heading">You're Qualified!</h2><p><strong>${fullAddress}</strong> is qualified for fiber optic internet service.</p> <p>If you would like fiber optic internet service at your residence, please click the sign up now button and you can fill out the residential service agreement.</p> <div>
                   <a href="https://nlbcnltc.eversign.com/embedded/552f574523c247f0821d4b984484ea65" class="button-link">Sign up now</a>
               </div>
               <p>If you are interested in a commercial internet service or would like to speak with a representative, 
                   <a href="https://share.hsforms.com/1IXoUM1AlTMClAEYjqMJr7w473vr" id="form-link">please click here to fill out our contact form to have a representative reach out to you.</a> </p>`;
} else if (isInsideSunSetArea) {
    message = `<h2 class="section-heading">You're Qualified!</h2><p><strong>${fullAddress}</strong> is qualified for fiber optic internet service.</p> <p>If you would like fiber optic internet service at your residence, please click the sign up now button and you can fill out the residential service agreement.</p> <div>
                   <a href="https://nlbcnltc.eversign.com/embedded/552f574523c247f0821d4b984484ea65" class="button-link">Sign up now</a>
               </div>
               <p>If you are interested in a commercial internet service or would like to speak with a representative, 
                   <a href="https://share.hsforms.com/1IXoUM1AlTMClAEYjqMJr7w473vr" id="form-link">please click here to fill out our contact form to have a representative reach out to you.</a> </p>`;
} else if (isInsideLeadLine) {
    message = `<h2 class="section-heading">Area of Interest</h2><p><strong>${fullAddress}</strong> falls into an area that we are considering for near future fiber deployment.</p>
<p>We must reach a set number of commitments before construction can begin in this area.<br>
If you would like to receive fiber optic internet service at this address, please fill out the information below and click the submit button.</p> <div id="message-section">
                   <form id="LeadLineInterest">
                       <div class="form-group">
                           <label for="firstName">First Name:</label>
                           <input type="text" id="firstName" name="firstName" required />
                       </div>
                       <div class="form-group">
                           <label for="lastName">Last Name:</label>
                           <input type="text" id="lastName" name="lastName" required />
                       </div>
                       <div class="form-group">
                           <label for="streetAddress">Address:</label>
                           <input type="text" id="streetAddress" name="streetAddress" required />
                       </div>
                       <div class="form-group">
                           <label for="city">City:</label>
                           <input type="text" id="city" name="city" required />
                       </div>
                       <div class="form-group">
                           <label for="state">State:</label>
                           <input type="text" id="state" name="state" required />
                       </div>
                       <div class="form-group">
                           <label for="postalCode">Postal Code:</label>
                           <input type="text" id="postalCode" name="postalCode" required />
                       </div>
                       <div class="form-group">
                           <label for="email">Email:</label>
                           <input type="email" id="email" name="email" required />
                       </div>
                       <div class="form-group">
                           <label for="phone">Phone Number:</label>
                           <input type="tel" id="phone" name="phone" required />
                       </div>
                       <div>
                           <button type="submit">Submit</button>
                       </div>
                   </form>
               </div>
`;
} else if (isInsideRDOF) {
    message = `<h2 class="section-heading">Pre-Construction</h2><p><strong>${fullAddress}</strong> is an area that is currently in the pre-construction phase which means that we will soon begin placing fiber optic internet service in your area.<br>
If you would like to pre-order your residential internet service, please click the sign up now button and you can fill out the agreement for service.<p/><div>
                   <a href="https://nlbcnltc.eversign.com/embedded/552f574523c247f0821d4b984484ea65" class="button-link">Sign up now</a>
               </div>
               <p>If you are interested in a commercial internet service or would like to speak with a representative, 
                   <a href="https://share.hsforms.com/1IXoUM1AlTMClAEYjqMJr7w473vr" id="form-link">please click here to fill out our contact form to have a representative reach out to you.</a> </p>
`;
} else if (isInsideMattieHarris) {
    message = `<h2 class="section-heading">You're Qualified!</h2><p><strong>${fullAddress}</strong> is qualified for fiber optic internet service.</p> <p>If you would like fiber optic internet service at your residence, please click the sign up now button and you can fill out the residential service agreement.</p><div>
                   <a href="https://nlbcnltc.eversign.com/embedded/552f574523c247f0821d4b984484ea65" class="button-link">Sign up now</a>
               </div>
               <p>If you are interested in a commercial internet service or would like to speak with a representative, 
                   <a href="https://share.hsforms.com/1IXoUM1AlTMClAEYjqMJr7w473vr" id="form-link">please click here to fill out our contact form to have a representative reach out to you.</a> </p>`;
} else {
    message = `Service is not available at <strong>${fullAddress}</strong>.`;
}



// Update the notification based on whether the marker is inside any of the polygons
const notification = document.getElementById('notification');
notification.innerHTML = message;
notification.style.display = 'block';



     const formData = {
    streetAddress: streetAddress,
    city: city,
    state: state,
    zipcode: zipcode,
    coordinates: {
        type: "Point", // As defined in your schema
        coordinates: [coordinates[0], coordinates[1]] // [longitude, latitude]
    }
};


        const backendResponse = await fetch('http://localhost:3000/api/address', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (backendResponse.ok) {
          console.log('Address submitted successfully');
          // Optionally, you can redirect or display a success message here
        } else {
          console.error('Failed to submit address to backend:', backendResponse.statusText);
          // Handle the error (e.g., display an error message)
        }
      } catch (error) {
        console.error('Error:', error);
        // Handle the error (e.g., display an error message)
      }
    }


