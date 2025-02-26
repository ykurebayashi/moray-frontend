import React, { useContext, useEffect, useRef } from "react";
import { GeoJSON } from "react-leaflet/GeoJSON";
import { TileLayer } from "react-leaflet/TileLayer";
import { MainContainer } from "./style";
import { Modal } from "../../components/Modal";
import { Header } from "../../components/Header";
import { MapContainer } from "react-leaflet/MapContainer";
import "leaflet/dist/leaflet.css";
import { useMapFunctions } from "./hook";
import { useParams } from "react-router";
import { GeneralContext } from "../../../context/GeneralContext";
import { useGetAppInfo } from "../../../hooks/useGetAppInfo";
export var Home = function () {
    var _a;
    var id = useParams().id;
    var theme = useContext(GeneralContext).theme;
    var geoJsonRef = useRef();
    var _b = useGetAppInfo(), geojson = _b.geojson, neighbourhood = _b.neighbourhood, setNeighbourhood = _b.setNeighbourhood, usedPopulationData = _b.usedPopulationData, bounds = _b.bounds, key = _b.key;
    var onEachFeatureFunctions = useMapFunctions({
        geoJsonRef: geoJsonRef,
        neighbourhood: neighbourhood,
        setNeighbourhood: setNeighbourhood,
    }).onEachFeatureFunctions;
    useEffect(function () {
        if (id && geojson) {
            if (!Number(id))
                return;
            var newNeighbour = geojson === null || geojson === void 0 ? void 0 : geojson.features.find(function (element) {
                return element.properties.id === Number(id);
            });
            setNeighbourhood(newNeighbour);
        }
    }, [id, geojson]);
    return (React.createElement(React.Fragment, null,
        React.createElement(Header, { options: (geojson === null || geojson === void 0 ? void 0 : geojson.features) || [], selectOption: function (e) { return setNeighbourhood(e); }, currentNeighbourhood: (_a = neighbourhood === null || neighbourhood === void 0 ? void 0 : neighbourhood.properties.id) !== null && _a !== void 0 ? _a : null }),
        React.createElement(MainContainer, { "$isDarkMode": theme === "dark" },
            React.createElement(MapContainer, { bounds: [
                    [bounds[1], bounds[0]],
                    [bounds[3], bounds[2]],
                ], style: { height: "100vh", width: "100%", position: "relative" }, key: key, zoomControl: false },
                React.createElement(TileLayer, { url: "https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=BcCw9iWXRyBExU9XfTBr" }),
                geojson && (React.createElement(GeoJSON
                //@ts-ignore
                , { 
                    //@ts-ignore
                    ref: geoJsonRef, data: geojson, 
                    //@ts-ignore
                    style: { color: "#6c58ff" }, onEachFeature: onEachFeatureFunctions }))),
            !!neighbourhood && usedPopulationData && (React.createElement(Modal, { neighbourhood: neighbourhood.properties, usedPopulationData: usedPopulationData, onClose: function () { return setNeighbourhood(null); } })))));
};
