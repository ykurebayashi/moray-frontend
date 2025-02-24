import { useQuery } from "@tanstack/react-query";

const getPopulationGrowth = async () => {
  const response = await fetch("http://localhost:5173/populacao");
  const result = await response.json();
  return result;
};

export const useGetPopulationGrowth = () => {
  return useQuery({
    queryKey: ["GET_POPULATION_DATA"],
    queryFn: () => getPopulationGrowth(),
  });
};
