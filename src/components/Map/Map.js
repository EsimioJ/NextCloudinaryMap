import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";

// Grab the access token from your Mapbox account
// I typically like to store sensitive things like this
// in a .env file
// mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;
// console.log("TOKEN", process.env.MAPBOX_TOKEN);
mapboxgl.accessToken =
  "pk.eyJ1IjoiZXNpbWlvaiIsImEiOiJOUndHS19RIn0.lFcjnUdKjlJOmCjUfrfzSg";

const Map = () => {
  const mapContainer = useRef();

  const geojson = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {
          message: "Ciao Ruby",
          iconSize: [60, 60],
        },
        geometry: {
          type: "Point",
          coordinates: [10.898233333333334, 44.147280555555554],
        },
      },
      {
        type: "Feature",
        properties: {
          message: "Bar",
          iconSize: [50, 50],
        },
        geometry: {
          type: "Point",
          coordinates: [10.899322222222223, 44.14808611111111],
        },
      },
      {
        type: "Feature",
        properties: {
          message: "Baz",
          iconSize: [40, 40],
        },
        geometry: {
          type: "Point",
          coordinates: [10.899291666666667, 44.14808611111111],
        },
      },
    ],
  };

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
      zoom: 15,
      pitch: 80,
      bearing: 240,
      center: [10.8751, 44.1422],
      style: "mapbox://styles/esimioj/cl0pq2rr3001u14n04svzewvp", //mapbox://styles/esimioj/cl0pq2rr3001u14n04svzewvp
    });

    // Add markers to the map.
    for (const marker of geojson.features) {
      // Create a DOM element for each marker.
      const el = document.createElement("div");
      const width = marker.properties.iconSize[0];
      const height = marker.properties.iconSize[1];
      el.className = "marker";
      el.style.backgroundImage = `url(https://placekitten.com/g/${width}/${height}/)`;
      el.style.width = `${width}px`;
      el.style.height = `${height}px`;
      el.style.backgroundSize = "100%";

      el.addEventListener("click", () => {
        window.alert(marker.properties.message);
      });

      // Add markers to the map.
      new mapboxgl.Marker(el).setLngLat(marker.geometry.coordinates).addTo(map);
    }

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
