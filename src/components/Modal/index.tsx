import React from "react";
import { Chart } from "../Chart";
import { ModalContainer } from "./style";
import { GetGeoJsonItemType } from "../../query/useGetGeoJson";

type ModalProps = {
  neighbourhood: {
    name: string;
    setor: string;
    zona: string;
  };
  usedPopulationData: GetGeoJsonItemType[];
};

export const Modal = ({ neighbourhood, usedPopulationData }: ModalProps) => {
  return (
    <ModalContainer>
      <p>Bairro selecionado: {neighbourhood.name}</p>
      <p>Setor selecionado: {neighbourhood.setor}</p>
      <p>Zona selecionada: {neighbourhood.zona}</p>
      <Chart data={usedPopulationData} />
    </ModalContainer>
  );
};
