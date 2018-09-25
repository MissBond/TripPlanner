const mapbox = require("mapbox-gl");

const iconURLs = {
    hotels: "http://i.imgur.com/D9574Cu.png",
    restaurants: "http://i.imgur.com/cqR6pUI.png",
    activities: "http://i.imgur.com/WbMOfMl.png"
};

const buildMarker = (type, coords) => {
    const markerDomEl = document.createElement("div");

    if (type === 'hotel') {
        markerDomEl.style.backgroundImage = iconURLs.hotels;
    }
    if (type === 'restaurant') {
        markerDomEl.style.backgroundImage = iconURLs.restaurants;
    }
    if (type === 'activity') {
        markerDomEl.style.backgroundImage = iconURLs.activity;
    }
};

module.exports = buildMarker;
