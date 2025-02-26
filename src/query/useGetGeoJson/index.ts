import { useQuery } from "@tanstack/react-query";

export type GetGeoJsonItemType = {
  id_geometria: number;
  ano: string;
  populacao: number;
};

const getGeoJson = async () => {
  const baseUrl = window.location.origin;
  const response = await fetch(`${baseUrl}/bairros-geojson`);
  const result = await response.json();
  return result;
};

export const useGetGeoJson = () => {
  return useQuery({
    queryKey: ["GET_GEO_JSON_DATA"],
    queryFn: () => getGeoJson(),
  });
};
