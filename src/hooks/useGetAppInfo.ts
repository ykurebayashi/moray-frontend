import { useEffect, useMemo, useState } from "react";
import { GetGeoJsonItemType, useGetGeoJson } from "../query/useGetGeoJson";
import { useGetPopulationGrowth } from "../query/useGetPopulation";

export type NeighbourhoodType = {
  id: number;
  name: string;
  setor: string;
  zona: string;
};

export type SingleNeighbourhoodType = {
  properties: NeighbourhoodType;
  bbox: [number, number, number, number];
};

export const INITIAL_BOUNDS: [number, number, number, number] = [
  -45.928813, -23.234708, -45.900761, -23.198917,
];

export const useGetAppInfo = () => {
  const [neighbourhood, setNeighbourhood] =
    useState<SingleNeighbourhoodType | null>(null);
  const [bounds, setBounds] =
    useState<[number, number, number, number]>(INITIAL_BOUNDS);

  const { data: geojson } = useGetGeoJson();
  const { data: populationJson } = useGetPopulationGrowth(!!neighbourhood);

  const usedPopulationData: GetGeoJsonItemType[] = useMemo(() => {
    if (!neighbourhood || !populationJson) return [];

    return populationJson.filter(
      (element) => element.id_geometria === neighbourhood.properties.id
    );
  }, [neighbourhood, populationJson]);

  useEffect(() => {
    if (neighbourhood === null) {
      return setBounds(INITIAL_BOUNDS);
    }
    return setBounds(neighbourhood.bbox);
  }, [neighbourhood]);

  return {
    neighbourhood,
    setNeighbourhood,
    usedPopulationData,
    geojson,
    bounds,
  };
};
