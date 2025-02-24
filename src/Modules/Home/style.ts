import styled from "styled-components";
import { MapContainer } from "react-leaflet/MapContainer";
export const PADDING_MAP = 15;

export const MainContainer = styled.main`
  position: relative;
  padding: ${PADDING_MAP}px;
`;

export const MainMapContainer = styled(MapContainer)<{ $hasInfo: boolean }>`
  height: calc(90vh - ${2 * PADDING_MAP}px);
  width: ${(props) => (props.$hasInfo ? "70%" : "100%")};
  position: relative;
`;
