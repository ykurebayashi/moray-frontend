import React from "react";
import { Chart } from "../Chart";
import { ModalContainer } from "./style";

export const Modal = ({ neighbourhood, usedPopulationData }) => {
  return (
    <ModalContainer>
      <p>Bairro selecionado: {neighbourhood.name}</p>
      <p>Setor selecionado: {neighbourhood.setor}</p>
      <p>Zona selecionada: {neighbourhood.zona}</p>
      <Chart data={usedPopulationData} />
    </ModalContainer>
  );
};
