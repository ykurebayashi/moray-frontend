import { Dispatch, SetStateAction } from "react";
import {
  NeighbourhoodType,
  SingleNeighbourhoodType,
} from "../../../hooks/useGetAppInfo";

export type HeaderProps = {
  options: SingleNeighbourhoodType[];
  selectOption: (param: SingleNeighbourhoodType) => void;
  currentNeighbourhood: number | null;
  setNeighbourhood: Dispatch<SetStateAction<SingleNeighbourhoodType>>;
};
