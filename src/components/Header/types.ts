import { NeighbourhoodType } from "../../hooks/useGetAppInfo";

export type HeaderProps = {
  options: {
    properties: NeighbourhoodType;
    bbox: [number, number, number, number];
  }[];
  selectOption: (param: {
    properties: NeighbourhoodType;
    bbox: [number, number, number, number];
  }) => void;
};
