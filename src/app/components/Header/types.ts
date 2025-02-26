import { SingleNeighbourhoodType } from "../../../hooks/useGetAppInfo";

export type HeaderProps = {
  options: SingleNeighbourhoodType[];
  selectOption: (param: SingleNeighbourhoodType | null) => void;
  currentNeighbourhood: number | null;
  setNeighbourhood: (param: SingleNeighbourhoodType | null) => void;
};
