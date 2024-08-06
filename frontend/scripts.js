mapboxgl.accessToken = 'pk.eyJ1Ijoic2FsbGVuMTA2IiwiYSI6ImNscXlham03ZzBubGcya3BveXJveWRtaTQifQ.l4TqDA9Ht87uHzHR-e-Vmg'; 
const map = new mapboxgl.Map({
    container: 'map', // The HTML element ID where the map will be inserted
    style: 'mapbox://styles/mapbox/light-v10', 
    center: [-85.2913559, 39.8089351], // Set the initial position [longitude, latitude]
    zoom: 10 // Set the initial zoom level
});



// import { polygonCoordinates } from 'https://service-production-1fef.up.railway.app/service/frontend/coordinates/polygon.js'; // Adjust the path as needed
// import { SunSetAreaCoordinates } from 'https://service-production-1fef.up.railway.app/service/frontend/coordinates/polygon.js'; // Adjust the path as needed
// import { MeekRdCoordinates } from 'https://service-production-1fef.up.railway.app/service/frontend/coordinates/polygon.js';
// import { WhiteWaterCoordinates } from 'https://service-production-1fef.up.railway.app/service/frontend/coordinates/polygon.js';
// import { LeadLineCoordinates } from 'https://service-production-1fef.up.railway.app/service/frontend/coordinates/polygon.js';
// import { RDOFCoordinates } from 'https://service-production-1fef.up.railway.app/service/frontend/coordinates/polygon.js';
// import { MattieHarrisCoordinates } from 'https://service-production-1fef.up.railway.app/service/frontend/coordinates/polygon.js'; 


const polygonCoordinates = [
  [
[-73.981934, 40.753019],
[-73.980642, 40.751026],
[-73.982120, 40.749546],
[-73.982120, 40.753019],
[-73.981934, 40.753019],
  ],
];

const MeekRdCoordinates = [
[-84.98402692515687,39.75344421755903],
[-84.98264729796385,39.75032380157624],
[-84.97975920771654,39.74967220745771],
[-84.97793716119602,39.74582386285216],
[-84.97714051696117,39.74534536184679],
[-84.97568059147679,39.74674733379635],
[-84.97256951795518,39.74809699038713],
[-84.97278172351848,39.74922004453985],
[-84.97587129791727,39.75134161744004],
[-84.97509684119697,39.75441429373797],
[-84.97407083893404,39.75670843488375],
[-84.97404491071313,39.76035671336616],
[-84.97827930735522,39.76003071865863],
[-84.98402692515687,39.75344421755903],
];

const WhiteWaterCoordinates = [
[-84.81672970784216,39.96008834530814], 
[-84.8418108645204,39.96139227008574],
[-84.84285984342829,39.94995764315657], 
[-84.85888001302186,39.94906215115652], 
[-84.85909631139879,39.94519379124596], 
[-84.83320726158608,39.94314137397733],
[-84.83616191224773,39.93461443902615],
[-84.83808688579491,39.93353504090381],
[-84.90023828538858,39.93517078302171],
[-84.90807709253927,39.93329844493182],
[-84.91352717599352,39.93332160313354],
[-84.91329506246956,39.93181332182082],
[-84.87259345213947,39.93016915114644],
[-84.87332259534031,39.92216400532534],
[-84.86524287920597,39.92310477279231],
[-84.86451972806461,39.9314285953334],
[-84.8246565519246,39.93030945627478],
[-84.81551257019362,39.94157630933473],
[-84.81672970784216,39.96008834530814]
];

const SunSetAreaCoordinates = [ 
[-85.00579023098697,39.82572458776117],
[-85.00578855661037,39.82451104733992],
[-85.00211372403771,39.82513585922591],
[-84.996479257914,39.82600405485154], 
[-84.99643270899058,39.82726669025671], 
[-85.00577805457407,39.82710110507401],
[-85.00579023098697,39.82572458776117]
];

const LeadLineCoordinates = [
[-84.99465297342481,39.77332977730251], 
[-84.99470460335954,39.77183045964095],
[-84.98642331294418,39.76830091420348],
[-84.97681719911965,39.76291381977013],
[-84.97000953609502,39.7692069770949],
[-84.961451784801,39.76818491812584],
[-84.9477149393375,39.76891463825269],
[-84.94653822421948,39.77189967289311],
[-84.95482831520305,39.77324762288973],
[-84.95618702194551,39.78193561918039],
[-84.96314084722611,39.78218250598843], 
[-84.97495710913293,39.78234432667767],
[-84.98307802360702,39.78104225125914],
[-84.98767063077133,39.78070976452465],
[-84.99069716184165,39.77928901494833],
[-84.99465297342481,39.77332977730251]
];

const RDOFCoordinates = [
[-85.21323086113229,40.06307986256164],
[-85.10584624101601,40.06302123690033],
[-85.10534300284486,40.06910198850364],
[-85.1045895837625,40.07714444340839],
[-85.07152947740488,40.07736080348211],
[-85.07283063589404,40.12050986067866],
[-85.12746216244338,40.12128330832663],
[-85.12748429975089,40.13502905638578],
[-85.21508099768029,40.13493169934583],
[-85.21323086113229,40.06307986256164]
];

const MattieHarrisCoordinates = [
[-84.99662823648848, 39.7942387004656],
[-84.98854710776494, 39.79384770457518],
[-84.98866223458209, 39.7862785295527],
[-84.97802663711022, 39.7872087762245],
[-84.98004645480241, 39.79555176030652],
[-84.99331014603156, 39.79528140483301],
[-84.99652104573427, 39.79525868059164],
[-84.99662823648848, 39.7942387004656]
];

export const NLTC = [
  [-85.21209639965024, 39.96451385081485, 0.0],
  [-85.21146266943401, 39.96074779477148, 0.0],
  [-85.21055333754964, 39.960143, 0.0],
  [-85.21035492999997, 39.95396094000009, 0.0],
  [-85.21273888599995, 39.95393296500008, 0.0],
  [-85.21274673999997, 39.94703253200005, 0.0],
  [-85.21275916699994, 39.93611478700008, 0.0],
  [-85.20050772499991, 39.93613982500003, 0.0],
  [-85.20054519999991, 39.93246230000004, 0.0],
  [-85.20056582802796, 39.92561465402864, 0.0],
  [-85.1994024277621, 39.92336282786997, 0.0],
  [-85.20047703318005, 39.92333764695154, 0.0],
  [-85.20055499899993, 39.919479, 0.0],
  [-85.20493899899992, 39.91943500100004, 0.0],
  [-85.2049784168752, 39.91841065473143, 0.0],
  [-85.20720645199995, 39.91840714700008, 0.0],
  [-85.20716664499994, 39.91406614000009, 0.0],
  [-85.21373394999995, 39.91414240100009, 0.0],
  [-85.2137152, 39.90337240000009, 0.0],
  [-85.2137152, 39.90276230000006, 0.0],
  [-85.21379030099999, 39.88843729900007, 0.0],
  [-85.21379264188428, 39.88153270274115, 0.0],
  [-85.21457132899437, 39.88148934165196, 0.0],
  [-85.21469045398128, 39.87367436607919, 0.0],
  [-85.21360611463093, 39.86792549334859, 0.0],
  [-85.21359719414471, 39.86562535077042, 0.0],
  [-85.21511606619202, 39.8612455908256, 0.0],
  [-85.21507724206033, 39.85761798995195, 0.0],
  [-85.22654221199991, 39.85771154700005, 0.0],
  [-85.22672734899996, 39.82869748200007, 0.0],
  [-85.24373270099994, 39.82876487500005, 0.0],
  [-85.2437042025621, 39.82038057556967, 0.0],
  [-85.25173399899992, 39.82020000100008, 0.0],
  [-85.2517581851705, 39.81753862580899, 0.0],
  [-85.25306024999998, 39.81750735000003, 0.0],
  [-85.25298231499991, 39.81393756200008, 0.0],
  [-85.28334286799992, 39.81091755300004, 0.0],
  [-85.28333081604902, 39.81026865305968, 0.0],
  [-85.28324753678704, 39.80838984271054, 0.0],
  [-85.28608775435946, 39.80840356016648, 0.0],
  [-85.286113, 39.8075690000001, 0.0],
  [-85.286329999, 39.799134, 0.0],
  [-85.28314638791724, 39.79909329383465, 0.0],
  [-85.28304437944666, 39.7902052266183, 0.0],
  [-85.2829798347951, 39.78786693380883, 0.0],
  [-85.285459, 39.787772, 0.0],
  [-85.28992699899999, 39.787799, 0.0],
  [-85.290151, 39.78779800100008, 0.0],
  [-85.29044699900001, 39.787787, 0.0],
  [-85.290902, 39.787804, 0.0],
  [-85.297486, 39.787668, 0.0],
  [-85.297948999, 39.787649001, 0.0],
  [-85.29877858580946, 39.78763169528922, 0.0],
  [-85.29871517821333, 39.78625933268538, 0.0],
  [-85.30157882933653, 39.78616487890194, 0.0],
  [-85.31720111386502, 39.78596128759704, 0.0],
  [-85.31699297301832, 39.80814717368189, 0.0],
  [-85.32158774690052, 39.8080917561788, 0.0],
  [-85.32145223199268, 39.82213907887309, 0.0],
  [-85.32644661901787, 39.82221189835889, 0.0],
  [-85.32660499900001, 39.826501, 0.0],
  [-85.32926038116375, 39.82651488175411, 0.0],
  [-85.32926891799997, 39.82737847, 0.0],
  [-85.34018599899997, 39.82731176580255, 0.0],
  [-85.34018599899997, 39.830522, 0.0],
  [-85.340297999, 39.842928, 0.0],
  [-85.3461962935734, 39.842900917584, 0.0],
  [-85.34593837699995, 39.85954575300011, 0.0],
  [-85.33788552899998, 39.85964628199999, 0.0],
  [-85.33783146699994, 39.86678665900006, 0.0],
  [-85.33686621500001, 39.86679265400002, 0.0],
  [-85.3335651999999, 39.87223214100006, 0.0],
  [-85.328679806, 39.87227162100002, 0.0],
  [-85.3286962599999, 39.87396061400007, 0.0],
  [-85.3167227, 39.87396061400007, 0.0],
  [-85.3167227, 39.88618754300009, 0.0],
  [-85.32382502899995, 39.88619696900007, 0.0],
  [-85.32372112499996, 39.89503570300006, 0.0],
  [-85.32661131399999, 39.8986986890001, 0.0],
  [-85.32659339400001, 39.90143951500004, 0.0],
  [-85.30946831899999, 39.90136994300005, 0.0],
  [-85.29994588899993, 39.90127505100001, 0.0],
  [-85.29991396799994, 39.90447830900011, 0.0],
  [-85.29517995499992, 39.90443983300004, 0.0],
  [-85.29519022499989, 39.91727240000007, 0.0],
  [-85.29467568699997, 39.93200648600006, 0.0],
  [-85.29469700099995, 39.93567729800003, 0.0],
  [-85.29831003099991, 39.9357017520001, 0.0],
  [-85.29832370238023, 39.94083592660476, 0.0],
  [-85.295942, 39.941033, 0.0],
  [-85.29310599899992, 39.941103, 0.0],
  [-85.293243, 39.946643, 0.0],
  [-85.29347199899993, 39.952744, 0.0],
  [-85.27200599900002, 39.952713, 0.0],
  [-85.269411, 39.952709, 0.0],
  [-85.25217010586726, 39.96078646567096, 0.0],
  [-85.25180246824362, 39.96137117900712, 0.0],
  [-85.242697, 39.961405, 0.0],
  [-85.24269699997765, 39.96440746330897, 0.0],
  [-85.23255279999995, 39.96447730000007, 0.0],
  [-85.21209639965024, 39.96451385081485, 0.0],
];


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

          // Add your sixth polygon
          map.addLayer({
            id: 'nltcPolygon',
            type: 'fill',
            source: {
              type: 'geojson',
              data: {
                type: 'Feature',
                geometry: {
                  type: 'Polygon',
                  coordinates: [NLTC],
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
const NLTCpolygon = turf.polygon([NLTC]);

// Check if the point is inside any of the polygons
const isInsideMeekRd = turf.booleanPointInPolygon(point, polygonMeekRd);
const isInsideWhiteWater = turf.booleanPointInPolygon(point, polygonWhiteWater);
const isInsideSunSetArea = turf.booleanPointInPolygon(point, polygonSunSetArea);
const isInsideLeadLine = turf.booleanPointInPolygon(point, polygonLeadLine);
const isInsideRDOF = turf.booleanPointInPolygon(point, polygonRDOF);
const isInsideMattieHarris = turf.booleanPointInPolygon(point, mattieHarrisPolygon);
const isInsideNLTC = turf.booleanPointInPolygon(point, NLTCpolygon);
const isInsidePolygon = isInsideMeekRd || isInsideWhiteWater || isInsideSunSetArea || isInsideLeadLine || isInsideRDOF || isInsideMattieHarris || isInsideNLTC;


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
} else if (isInsideNLTC) {
  message = `<h2 class="section-heading">You're Qualified!</h2><p><strong>${fullAddress}</strong> is qualified for fiber optic internet service.</p> <p>If you would like fiber optic internet service at your residence, please click the sign up now button and you can fill out the residential service agreement.</p><div>
                 <a href="https://nlbcnltc.eversign.com/embedded/552f574523c247f0821d4b984484ea65" class="button-link">Sign up now</a>
             </div>
             <p>If you are interested in a commercial internet service or would like to speak with a representative, 
                 <a href="https://share.hsforms.com/1IXoUM1AlTMClAEYjqMJr7w473vr" id="form-link">please click here to fill out our contact form to have a representative reach out to you.</a> </p>`;
} else {
  window.location.href = 'https://nlbc.com/check-service-area/';
  message = `Contact us to confirm service availability at <strong>${fullAddress}</strong>.`;
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


        const backendResponse = await fetch('https://service-production-1fef.up.railway.app/api/address', {
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


