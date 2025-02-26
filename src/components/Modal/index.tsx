import React, { useContext } from "react";
import {
  MainContent,
  ModalContainer,
  NeighbourhoodInfo,
  NeighbourhoodName,
  ChartContainer,
  ActionButton,
  TopInfos,
  FlexRow,
} from "./style";
import { ModalProps } from "./types";
import { BarChart } from "@mui/x-charts/BarChart";
import { ThemeContext } from "../../style/ThemeContext";
import { ToastContainer, toast } from "react-toastify";

export const Modal = ({
  neighbourhood,
  usedPopulationData,
  onClose,
}: ModalProps) => {
  const { theme } = useContext(ThemeContext);
  const isDarkMode = theme === "dark";
  const notify = (param) =>
    toast(param, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: false,
      progress: undefined,
      theme: isDarkMode ? "dark" : "light",
      style: { background: "#44c26c", color: "white" },
    });

  const xAxisElements = usedPopulationData.map((element) => element.ano);
  const yAxisValues = usedPopulationData.map((element) => element.populacao);

  return (
    <ModalContainer $isDarkMode={isDarkMode}>
      <TopInfos>
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
        <FlexRow>
          <ActionButton
            style={{ top: "50px" }}
            $isDarkMode={isDarkMode}
            onClick={() => {
              notify("Copiado para o clipboard");
              navigator.clipboard.writeText(
                location.origin + "/" + neighbourhood.id
              );
            }}
          >
            Compartilhar
          </ActionButton>
          <ActionButton $isDarkMode={isDarkMode} onClick={onClose}>
            Fechar
          </ActionButton>
        </FlexRow>
      </TopInfos>
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
      <ToastContainer />
    </ModalContainer>
  );
};
