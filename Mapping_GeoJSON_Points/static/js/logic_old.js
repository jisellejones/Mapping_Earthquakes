// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.5, -122.5], 10);


// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};

// Grabbing our GeoJSON data.
L.geoJSON(sanFranAirport, {
    // We turn each feature into a marker on the map.
    onEachFeature: function(feature, layer) {
      console.log(layer);
      layer.bindPopup(`<h2>Airport Code: ${feature.properties.faa}</h2>
      <hr><h3>Airport Name: ${feature.properties.name}</h3></hr>`);
      //   feature.properties.city + ", " + feature.properties.country + "</h3>");
    //   return L.marker(latlng)
    //   .bindPopup("<h2>" + feature.properties.name + "</h2>"+ "</h2> <hr> <h3>" + 
    //   feature.properties.city + ", " + feature.properties.country + "</h3>");
    }
}).addTo(map);

// Coordinates for each point to be used in the line. from SFO to 
//John F. Kennedy International Airport (JFK) with two stops, 
//Austin-Bergstrom International Airport (AUS) and 
//Toronto Pearson International Airport (YYZ)
let line = [
  [33.9416, -118.4085],
  [44.2530, -121.1608],
  [30.1975, -97.6664],
  [43.6777, -79.6248],
  [40.6413, -73.7781]
];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
  color: "blue",
  dashArray: "5 5",
  weight: 4,
  opacity: 0.5
}).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/outdoors-v1/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);