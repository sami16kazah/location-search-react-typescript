import LocationSearch from "./components/LocationSearch";
import Map from "./components/Map";
import type { Place } from "./api/place";
import { useState } from "react";

function App() {
  const [place, setPlace] = useState<Place | null>(null);

  return (
    <div className="h-screen w-screen grid grid-cols-12">
      <div className="col-span-3 p-2">
        <LocationSearch onPlaceClick={(p) => setPlace(p)}></LocationSearch>
      </div>
      <div className="col-span-9">
        <Map place={place}></Map>
      </div>
    </div>
  );
}

export default App;
