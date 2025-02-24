import { useMemo, useState } from "react";
import { GetGeoJsonItemType, useGetGeoJson } from "../query/useGetGeoJson";
import { useGetPopulationGrowth } from "../query/useGetPopulation";

type NeighbourhoodType = {
  id: number;
  name: string;
  setor: string;
  zona: string;
};

export const useGetAppInfo = () => {
  const { data: geojson } = useGetGeoJson();
  const { data: populationJson } = useGetPopulationGrowth();
  const [neighbourhood, setNeighbourhood] = useState<NeighbourhoodType | null>(
    null
  );

  const usedPopulationData: GetGeoJsonItemType[] = useMemo(() => {
    if (!neighbourhood || !populationJson) return [];

    return populationJson.filter(
      (element) => element.id_geometria === neighbourhood.id
    );
  }, [neighbourhood, populationJson]);

  return {
    neighbourhood,
    setNeighbourhood,
    usedPopulationData,
    geojson,
  };
};
