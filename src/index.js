const mapboxgl = require("mapbox-gl");
const { iconURLs, buildMarker } = require('./marker.js')

mapboxgl.accessToken = "pk.eyJ1IjoiZGJvbmQ2MDMiLCJhIjoiY2ptaTU0dmQ2MDFjcDNybndpNzYwZzJjdSJ9.OpsMjANYYMxUK6OVA13OZw";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});
// const markerDomEl
// new mapboxgl.Marker('marker').setLngLat([-74.009151, 40.705086]).addTo(map);

// ADDING THIS TO REPO
const markerDomEl = document.createElement("div"); // Create a new, detached DIV
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);

const newMarker = buildMarker('hotel', [-73.9857, 40.7484]);
console.log(newMarker)
newMarker.addTo(map);
