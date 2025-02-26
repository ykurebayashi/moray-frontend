import { useQuery } from "@tanstack/react-query";
import { GetGeoJsonItemType } from "../useGetGeoJson";

const getPopulationGrowth = async () => {
  const baseUrl = window.location.origin;
  const response = await fetch(`${baseUrl}/populacao`);
  const result = await response.json();
  return result as GetGeoJsonItemType[];
};

export const useGetPopulationGrowth = (enabled: boolean) => {
  return useQuery({
    queryKey: ["GET_POPULATION_DATA"],
    queryFn: () => getPopulationGrowth(),
    enabled,
  });
};
