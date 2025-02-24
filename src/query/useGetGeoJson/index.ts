import { useQuery } from "@tanstack/react-query";

const getGeoJson = async () => {
  const response = await fetch("http://localhost:5173/bairros-geojson");
  const result = await response.json();
  return result;
};

export const useGetGeoJson = () => {
  return useQuery({
    queryKey: ["GET_GEO_JSON_DATA"],
    queryFn: () => getGeoJson(),
  });
};
