import { useEffect, useMemo, useState } from "react";
import { GetGeoJsonItemType, useGetGeoJson } from "../query/useGetGeoJson";
import { useGetPopulationGrowth } from "../query/useGetPopulation";

type BoundsType = [number, number, number, number];

export type NeighbourhoodType = {
  id: number;
  name: string;
  setor: string;
  zona: string;
};

export type SingleNeighbourhoodType = {
  properties: NeighbourhoodType;
  bbox: BoundsType;
};

export const INITIAL_BOUNDS: BoundsType = [
  -45.928813, -23.234708, -45.900761, -23.198917,
];

export const useGetAppInfo = () => {
  const [neighbourhood, setNeighbourhood] =
    useState<SingleNeighbourhoodType | null>(null);
  const [bounds, setBounds] = useState<BoundsType>(INITIAL_BOUNDS);

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

  const key = `info-of-${neighbourhood?.properties.id}-${bounds.join(",")}`;

  return {
    neighbourhood,
    setNeighbourhood,
    usedPopulationData,
    geojson,
    bounds,
    key,
  };
};
