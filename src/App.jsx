import { GeoJSON } from "react-leaflet/GeoJSON";
import { TileLayer } from "react-leaflet/TileLayer";
import { useGetGeoJson } from "./query/useGetGeoJson";
import { useGetPopulationGrowth } from "./query/useGetPopulation";
import { useEffect, useState } from "react";
import { Modal } from "./components/Modal";
import { MainContainer, MainMapContainer } from "./style";
import "leaflet/dist/leaflet.css";

function App() {
  const { data: geojson } = useGetGeoJson();
  const { data: populationJson } = useGetPopulationGrowth();

  const [neighbourhood, setNeighbourhood] = useState(null);
  const [usedPopulationData, setUsedPopulationData] = useState();

  useEffect(() => {
    if (neighbourhood) {
      const result = populationJson.filter(
        (element) => element.id_geometria === neighbourhood.id
      );
      setUsedPopulationData(result);
    }
  }, [neighbourhood, populationJson]);

  return (
    <MainContainer>
      <MainMapContainer
        bounds={[
          [-23.234708, -45.928813],
          [-23.198917, -45.900761],
        ]}
        zoom={15}
      >
        <TileLayer
          url="https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=BcCw9iWXRyBExU9XfTBr"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {geojson && (
          <GeoJSON
            data={geojson}
            style={{ color: "#6c58ff" }}
            eventHandlers={{
              click: (event) => {
                const eventValue = event.sourceTarget.feature;
                if (neighbourhood === eventValue.properties) {
                  return setNeighbourhood(null);
                }
                return setNeighbourhood(eventValue.properties);
              },
            }}
          />
        )}
      </MainMapContainer>

      {!!neighbourhood && usedPopulationData && (
        <Modal
          neighbourhood={neighbourhood}
          usedPopulationData={usedPopulationData}
        />
      )}
    </MainContainer>
  );
}

export default App;
