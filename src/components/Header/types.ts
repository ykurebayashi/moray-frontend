import { NeighbourhoodType } from "../../hooks/useGetAppInfo";

export type HeaderProps = {
  options: {
    properties: NeighbourhoodType;
  }[];
  selectOption: (param: NeighbourhoodType) => void;
};
