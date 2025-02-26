import { useEffect, useMemo, useState } from "react";
import { useGetGeoJson } from "../query/useGetGeoJson";
import { useGetPopulationGrowth } from "../query/useGetPopulation";
export var INITIAL_BOUNDS = [
    -45.928813, -23.234708, -45.900761, -23.198917,
];
export var useGetAppInfo = function () {
    var _a = useState(null), neighbourhood = _a[0], setNeighbourhood = _a[1];
    var _b = useState(INITIAL_BOUNDS), bounds = _b[0], setBounds = _b[1];
    var geojson = useGetGeoJson().data;
    var populationJson = useGetPopulationGrowth(!!neighbourhood).data;
    var usedPopulationData = useMemo(function () {
        if (!neighbourhood || !populationJson)
            return [];
        return populationJson.filter(function (element) { return element.id_geometria === neighbourhood.properties.id; });
    }, [neighbourhood, populationJson]);
    useEffect(function () {
        if (neighbourhood === null) {
            return setBounds(INITIAL_BOUNDS);
        }
        return setBounds(neighbourhood.bbox);
    }, [neighbourhood]);
    var key = "info-of-".concat(neighbourhood === null || neighbourhood === void 0 ? void 0 : neighbourhood.properties.id, "-").concat(bounds.join(","));
    return {
        neighbourhood: neighbourhood,
        setNeighbourhood: setNeighbourhood,
        usedPopulationData: usedPopulationData,
        geojson: geojson,
        bounds: bounds,
        key: key,
    };
};
