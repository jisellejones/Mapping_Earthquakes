// Add console.log to check to see if our code is working.
console.log("working");

// One way - Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4);

// Another way - Create the map object with a center and zoom level. Let's you add
// titles and such
// let map = L.map("mapid", {
//     center: [
//       40.7, -94.5
//     ],
//     zoom: 4
//   });

// Add a marker for LA, California
let marker = L.marker([34.0522, -118.2437]);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);