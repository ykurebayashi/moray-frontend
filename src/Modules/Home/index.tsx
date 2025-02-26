import React, { useContext, useEffect, useMemo, useRef } from "react";
import { GeoJSON } from "react-leaflet/GeoJSON";
import { TileLayer } from "react-leaflet/TileLayer";
import { MainContainer } from "./style";
import { useGetAppInfo } from "../../hooks/useGetAppInfo";
import { Modal } from "../../components/Modal";
import { Header } from "../../components/Header";
import { MapContainer } from "react-leaflet/MapContainer";
import "leaflet/dist/leaflet.css";
import { ThemeContext } from "../../style/ThemeContext";
import { useMapFunctions } from "./hook";

export const Home = () => {
  const {
    geojson,
    neighbourhood,
    setNeighbourhood,
    usedPopulationData,
    bounds,
  } = useGetAppInfo();
  const { theme } = useContext(ThemeContext);
  const geoJsonRef = useRef();

  const { onEachFeatureFunctions } = useMapFunctions({
    geoJsonRef,
    neighbourhood,
    setNeighbourhood,
  });

  const key = `info-of-${neighbourhood?.properties.id}-${bounds.join(",")}`;

  return (
    <>
      <Header
        options={geojson?.features || []}
        selectOption={(e) => setNeighbourhood(e)}
        currentNeighbourhood={neighbourhood?.properties.id ?? null}
      />
      <MainContainer $isDarkMode={theme === "dark"}>
        <MapContainer
          bounds={[
            [bounds[1], bounds[0]],
            [bounds[3], bounds[2]],
          ]}
          style={{ height: "100vh", width: "100%", position: "relative" }}
          key={key}
        >
          <TileLayer url="https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=BcCw9iWXRyBExU9XfTBr" />

          {geojson && (
            <GeoJSON
              ref={geoJsonRef}
              data={geojson}
              //@ts-ignore
              style={{ color: "#6c58ff" }}
              onEachFeature={onEachFeatureFunctions}
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
