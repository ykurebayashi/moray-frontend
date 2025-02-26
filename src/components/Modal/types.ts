import { GetGeoJsonItemType } from "../../query/useGetGeoJson";

export type ModalProps = {
  neighbourhood: {
    name: string;
    setor: string;
    zona: string;
    id: number;
  };
  usedPopulationData: GetGeoJsonItemType[];
  onClose: () => void;
};
