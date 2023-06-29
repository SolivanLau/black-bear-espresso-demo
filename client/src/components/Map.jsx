import {
  useLoadScript,
  GoogleMap,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';
import { useMemo } from 'react';
const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_MAP_KEY,
  });

  const centerData = useMemo(() => ({
    lat: 43.661375256685574,
    lng: -79.38146946049922,
  }));

  if (!isLoaded) {
    return <div className="mapContainer">Loading</div>;
  }

  return (
    <GoogleMap
      zoom={15}
      center={centerData}
      mapContainerClassName="mapContainer"
    >
      <Marker position={{ lat: 43.661259546222965, lng: -79.38150655092541 }} />
    </GoogleMap>
  );
};
export default Map;
