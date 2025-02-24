import React from "react";
import { GeoJSON } from "react-leaflet/GeoJSON";
import { TileLayer } from "react-leaflet/TileLayer";
import { MainContainer, MainMapContainer } from "./style";
import { useGetAppInfo } from "../../hooks/useGetAppInfo";
import { Modal } from "../../components/Modal";
import "leaflet/dist/leaflet.css";

export const Home = () => {
  const { geojson, neighbourhood, setNeighbourhood, usedPopulationData } =
    useGetAppInfo();
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
            //@ts-ignore
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
};
