import React from "react";
import { Chart } from "../Chart";
import {
  MainContent,
  ModalContainer,
  NeighbourhoodInfo,
  NeighbourhoodName,
} from "./style";
import { ModalProps } from "./types";

export const Modal = ({ neighbourhood, usedPopulationData }: ModalProps) => {
  return (
    <ModalContainer>
      <MainContent>
        <NeighbourhoodName> {neighbourhood.name}</NeighbourhoodName>
        <NeighbourhoodInfo>{neighbourhood.setor}</NeighbourhoodInfo>
        <NeighbourhoodInfo>{neighbourhood.zona}</NeighbourhoodInfo>
      </MainContent>
      <Chart data={usedPopulationData} />
    </ModalContainer>
  );
};
