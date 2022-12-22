import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";

// Grab the access token from your Mapbox account
// I typically like to store sensitive things like this
// in a .env file
// mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;
console.log("TOKEN", process.env.MAPBOX_TOKEN);
mapboxgl.accessToken =
  "pk.eyJ1IjoiZXNpbWlvaiIsImEiOiJOUndHS19RIn0.lFcjnUdKjlJOmCjUfrfzSg";

const Map = () => {
  const mapContainer = useRef();

  // this is where all of our map logic is going to live
  // adding the empty dependency array ensures that the map
  // is only created once
  useEffect(() => {
    // create the map and configure it
    // check out the API reference for more options
    // https://docs.mapbox.com/mapbox-gl-js/api/map/
    const map = new mapboxgl.Map({
      container: "map",
      cooperativeGestures: true,
      zoom: 13.5,
      pitch: 80,
      bearing: 240,
      center: [10.8751, 44.1422],
      style: "mapbox://styles/esimioj/cl0pq2rr3001u14n04svzewvp", //mapbox://styles/esimioj/cl0pq2rr3001u14n04svzewvp
    });

    map.on("load", () => {
      map.addSource("mapbox-dem", {
        type: "raster-dem",
        url: "mapbox://mapbox.mapbox-terrain-dem-v1",
        tileSize: 512,
        maxZoom: 16,
      });
      map.setTerrain({ source: "mapbox-dem", exaggeration: 1 });
      map.addLayer({
        id: "sky",
        type: "sky",
        paint: {
          "sky-type": "atmosphere",
          "sky-atmosphere-sun": [0.0, 90.0],
          "sky-atmosphere-sun-intensity": 15,
        },
      });
    });
  }, []);

  return (
    <div
      id="map"
      ref={mapContainer}
      style={{ width: "100%", height: "50vh", marginBottom: "30px" }}
    />
  );
};

export default Map;
