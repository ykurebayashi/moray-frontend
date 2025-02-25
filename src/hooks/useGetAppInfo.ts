import { useEffect, useMemo, useState } from "react";
import { GetGeoJsonItemType, useGetGeoJson } from "../query/useGetGeoJson";
import { useGetPopulationGrowth } from "../query/useGetPopulation";

export type NeighbourhoodType = {
  id: number;
  name: string;
  setor: string;
  zona: string;
};

export const INITIAL_BOUNDS: [number, number, number, number] = [
  -45.928813, -23.234708, -45.900761, -23.198917,
];

export const useGetAppInfo = () => {
  const { data: populationJson } = useGetPopulationGrowth();
  const { data: geojson } = useGetGeoJson();
  const [neighbourhood, setNeighbourhood] = useState<{
    properties: NeighbourhoodType;
    bbox: [number, number, number, number];
  } | null>(null);
  const [bounds, setBounds] =
    useState<[number, number, number, number]>(INITIAL_BOUNDS);

  const usedPopulationData: GetGeoJsonItemType[] = useMemo(() => {
    if (!neighbourhood || !populationJson) return [];

    return populationJson.filter(
      (element) => element.id_geometria === neighbourhood.properties.id
    );
  }, [neighbourhood, populationJson]);

  return {
    neighbourhood,
    setNeighbourhood,
    usedPopulationData,
    geojson,
    bounds,
    setBounds,
  };
};
