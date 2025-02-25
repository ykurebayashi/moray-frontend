import styled from "styled-components";
import { MapContainer } from "react-leaflet/MapContainer";
export const PADDING_MAP = 15;

export const MainContainer = styled.main`
  position: relative;
`;

export const MainMapContainer = styled(MapContainer)<{ $hasInfo: boolean }>`
  height: 100vh;
  width: 100%;
  position: relative;
`;
