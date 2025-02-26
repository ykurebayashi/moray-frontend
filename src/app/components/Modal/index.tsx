import { useContext } from "react";
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
import { GeneralContext } from "../../../context/GeneralContext";
import { ToastContainer, toast } from "react-toastify";
import { useMobile } from "../../../hooks/useMobile";

export const Modal = ({
  neighbourhood,
  usedPopulationData,
  onClose,
}: ModalProps) => {
  const { theme, setFavs, favs } = useContext(GeneralContext);
  const isDarkMode = theme === "dark";
  const { isMobile } = useMobile();

  const notify = (param: string) =>
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
    <ModalContainer $isDarkMode={isDarkMode} $isMobile={isMobile}>
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
              notify("Link do bairro copiado para o clipboard");
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
      <ActionButton
        $isDarkMode={isDarkMode}
        onClick={() => {
          if (favs.some((element) => element.id === neighbourhood.id)) {
            notify("Este bairro já está nos favoritos");
            return;
          }
          notify("Adicionado aos favoritos");

          return setFavs([...favs, neighbourhood]);
        }}
      >
        Adicionar aos favoritos
      </ActionButton>
      <ToastContainer />
    </ModalContainer>
  );
};
