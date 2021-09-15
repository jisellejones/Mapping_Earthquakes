// Create the map object with center at the center of the Earth and add the zoom level.
let map = L.map('mapid').setView([30, 30], 2);

// We create the outdoor tile layer that will be the defult layer of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// Create the map object with center, zoom level and default layer.
let map = L.map

// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/jisellejones/Mapping_Earthquakes/main/majorAirports.json";

// Grabbing our GeoJSON data
d3.json(airportData).then(function(data) {
  console.log(data);
    // Creating a GeoJSON layer with the retrieved data.
    L.geoJson(data, {
      onEachFeature: function(feature, layer) {
        console.log(feature);
        layer.bindPopup(`<h2>Airport Code: ${feature.properties.faa}</h2>
        <hr><h3>Airport Name: ${feature.properties.name}</h3></hr>`).addTo(map)
      }
    // });
  }).addTo(map);
});
