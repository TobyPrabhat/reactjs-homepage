import React, { useState, useEffect } from "react";
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import * as parkData from "./data/skateboard-parks.json";
import mapStyles from "./mapStyles";
const {features} = parkData;
function Map() {
  const [selectedPark, setSelectedPark] = useState(null);

  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedPark(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <GoogleMap
      defaultZoom={5}
      defaultCenter={{ lat: 28.704060, lng: 77.102493 }}
      defaultOptions={{ styles: mapStyles }}
    >
      {
      features.map((park) => (
        <Marker
          key={park.properties.PARK_ID}
          position={{
            lat: park.geometry.coordinates[1],
            lng: park.geometry.coordinates[0]
          }}
          icon={{
            url: `/skateboarding.svg`,
            scaledSize: new window.google.maps.Size(25, 25)
          }}
          onClick = {() => {
            setSelectedPark(park);
          }}
        />
        ))}

      {selectedPark && (
        <InfoWindow
          onCloseClick={() => {
            setSelectedPark(null);
          }}
          position={{
            lat: selectedPark.geometry.coordinates[1],
            lng: selectedPark.geometry.coordinates[0]
          }}
        >
          <div>
            <h2>{selectedPark.properties.NAME}</h2>
            <p>{selectedPark.properties.DESCRIPTIO}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

const MapWrapped = withGoogleMap(Map);

export default function App() {
  // const url = "AIzaSyBDhw7AGGst4dG5Oblgi64AgZCAyksGm9I";
  return (
    <div style={{ width: "100%", height: "87vh" }}>
      <MapWrapped
        // googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${url}`}
        // loadingElement={<div style={{ height: `100%`, width: `100vw` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}













































// const Contact = () => {
//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: "AIzaSyBDhw7AGGst4dG5Oblgi64AgZCAyksGm9I",
//   });

//   if (!isLoaded) return <div>Loading...</div>;
//   return <Map />;
// }

// function Map() {
//   const center = useMemo(() => ({ lat: 28, lng: 73 }), []);

//   return (
//     <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
//       <Marker position={center} />
//     </GoogleMap>
//   );
// }
// export default Contact
