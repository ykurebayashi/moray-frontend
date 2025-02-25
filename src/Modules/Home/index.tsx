import React, { useEffect, useMemo } from "react";
import { GeoJSON } from "react-leaflet/GeoJSON";
import { TileLayer } from "react-leaflet/TileLayer";
import { MainContainer } from "./style";
import { INITIAL_BOUNDS, useGetAppInfo } from "../../hooks/useGetAppInfo";
import { Modal } from "../../components/Modal";
import { Header } from "../../components/Header";
import { MapContainer } from "react-leaflet/MapContainer";
import "leaflet/dist/leaflet.css";

export const Home = () => {
  const {
    geojson,
    neighbourhood,
    setNeighbourhood,
    usedPopulationData,
    bounds,
    setBounds,
  } = useGetAppInfo();

  const key = `info-of-${neighbourhood?.properties.id}-${bounds.join(",")}`;

  return (
    <>
      <Header
        options={geojson?.features || []}
        selectOption={(e) => setNeighbourhood(e)}
      />
      <MainContainer>
        <MapContainer
          bounds={[
            [bounds[1], bounds[0]],
            [bounds[3], bounds[2]],
          ]}
          zoom={15}
          style={{ height: "100vh", width: "100%", position: "relative" }}
          key={key}
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
                  if (neighbourhood === eventValue) {
                    return setNeighbourhood(null);
                  }
                  return setNeighbourhood(eventValue);
                },
              }}
            />
          )}
        </MapContainer>

        {!!neighbourhood && usedPopulationData && (
          <Modal
            neighbourhood={neighbourhood.properties}
            usedPopulationData={usedPopulationData}
            onClose={() => setNeighbourhood(null)}
          />
        )}
      </MainContainer>
    </>
  );
};
