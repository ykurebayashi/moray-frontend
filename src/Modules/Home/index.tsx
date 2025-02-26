import React, { useContext, useEffect, useMemo, useRef } from "react";
import { GeoJSON } from "react-leaflet/GeoJSON";
import { TileLayer } from "react-leaflet/TileLayer";
import { MainContainer } from "./style";
import { useGetAppInfo } from "../../hooks/useGetAppInfo";
import { Modal } from "../../components/Modal";
import { Header } from "../../components/Header";
import { MapContainer } from "react-leaflet/MapContainer";
import "leaflet/dist/leaflet.css";
import { useMapFunctions } from "./hook";
import { useParams } from "react-router";
import { GeneralContext } from "../../Context/GeneralContext";

export const Home = () => {
  const { id } = useParams();
  const { theme } = useContext(GeneralContext);
  const geoJsonRef = useRef();

  const {
    geojson,
    neighbourhood,
    setNeighbourhood,
    usedPopulationData,
    bounds,
    key,
  } = useGetAppInfo();

  const { onEachFeatureFunctions } = useMapFunctions({
    geoJsonRef,
    neighbourhood,
    setNeighbourhood,
  });

  useEffect(() => {
    if (id && geojson) {
      if (!Number(id)) return;
      const newNeighbour = geojson?.features.find(
        (element: { properties: { id: number } }) =>
          element.properties.id === Number(id)
      );
      setNeighbourhood(newNeighbour);
    }
  }, [id, geojson]);

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
