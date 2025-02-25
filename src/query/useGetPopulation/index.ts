import { useQuery } from "@tanstack/react-query";
import { GetGeoJsonItemType } from "../useGetGeoJson";

const getPopulationGrowth = async () => {
  const response = await fetch("http://localhost:5173/populacao");
  const result = await response.json();
  return result as GetGeoJsonItemType[];
};

export const useGetPopulationGrowth = () => {
  return useQuery({
    queryKey: ["GET_POPULATION_DATA"],
    queryFn: () => getPopulationGrowth(),
  });
};
