import React, { useContext } from "react";
import {
  MainContent,
  ModalContainer,
  NeighbourhoodInfo,
  NeighbourhoodName,
  ChartContainer,
  CloseButton,
} from "./style";
import { ModalProps } from "./types";
import { BarChart } from "@mui/x-charts/BarChart";
import { ThemeContext } from "../../style/ThemeContext";

export const Modal = ({
  neighbourhood,
  usedPopulationData,
  onClose,
}: ModalProps) => {
  const { theme } = useContext(ThemeContext);
  const isDarkMode = theme === "dark";

  const xAxisElements = usedPopulationData.map((element) => element.ano);
  const yAxisValues = usedPopulationData.map((element) => element.populacao);

  return (
    <ModalContainer $isDarkMode={isDarkMode}>
      <CloseButton
        style={{ top: "50px" }}
        $isDarkMode={isDarkMode}
        onClick={() => {
          navigator.clipboard.writeText(
            location.origin + "/" + neighbourhood.id
          );
        }}
      >
        Compartilhar
      </CloseButton>
      <CloseButton $isDarkMode={isDarkMode} onClick={onClose}>
        Fechar
      </CloseButton>
      <MainContent>
        <NeighbourhoodName $isDarkMode={isDarkMode}>
          {neighbourhood.name}
        </NeighbourhoodName>
        <NeighbourhoodInfo $isDarkMode={isDarkMode}>
          {neighbourhood.setor}
        </NeighbourhoodInfo>
        <NeighbourhoodInfo $isDarkMode={isDarkMode}>
          {neighbourhood.zona}
        </NeighbourhoodInfo>
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
              color: "#6c58ff",
            },
          ]}
          width={380}
          sx={{
            ".MuiChartsAxis-tickLabel > tspan": {
              fill: isDarkMode ? "white" : "black",
            },
          }}
        />
      </ChartContainer>
    </ModalContainer>
  );
};
