// Add console.log to check to see if our code is working.
console.log("working");

// One way - Create the map object with a center and zoom level.

// Get data from cities.js
let cityData = cities;

let map = L.map('mapid').setView([34.0522, -118.2437], 14);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
  console.log(city);
  L.circleMarker(city.location, {
    radius: city.population/200000,
    color: 'orange',
    weight: 4,
    fillColor: 'orange',
    fillOpacity: 0.5,
  })
  .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3> Population " + city.population.toLocaleString() + "</h3>")
  .addTo(map)
});


// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);