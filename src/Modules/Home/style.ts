import styled from "styled-components";
import { MapContainer } from "react-leaflet/MapContainer";

export const MainContainer = styled.main`
  position: relative;
  padding: 15px;
`;

export const MainMapContainer = styled(MapContainer)<{ $hasInfo: boolean }>`
  height: 90vh;
  width: ${(props) => (props.$hasInfo ? "70%" : "100%")};
  position: relative;
  transition: 5s ease-in-out;
`;
