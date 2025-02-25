import React from "react";
import {
  MainContent,
  ModalContainer,
  NeighbourhoodInfo,
  NeighbourhoodName,
  ChartContainer,
} from "./style";
import { ModalProps } from "./types";
import { BarChart } from "@mui/x-charts/BarChart";

export const Modal = ({ neighbourhood, usedPopulationData }: ModalProps) => {
  const xAxisElements = usedPopulationData.map((element) => element.ano);
  const yAxisValues = usedPopulationData.map((element) => element.populacao);
  return (
    <ModalContainer>
      <MainContent>
        <NeighbourhoodName> {neighbourhood.name}</NeighbourhoodName>
        <NeighbourhoodInfo>{neighbourhood.setor}</NeighbourhoodInfo>
        <NeighbourhoodInfo>{neighbourhood.zona}</NeighbourhoodInfo>
      </MainContent>
      <ChartContainer>
        <BarChart
          xAxis={[
            {
              id: "barCategories",
              data: xAxisElements,
              scaleType: "band",
            },
          ]}
          series={[
            {
              data: yAxisValues,
              color: "green",
              label: "População Total",
            },
          ]}
          width={380}
        />
      </ChartContainer>
    </ModalContainer>
  );
};
