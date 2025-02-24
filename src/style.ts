import styled from "styled-components";
import { MapContainer } from "react-leaflet/MapContainer";

export const MainContainer = styled.div`
  position: relative;
`;

export const MainMapContainer = styled(MapContainer)`
  height: 100vh;
  width: 100%;
  position: relative;
  transition: 1s ease-in-out;
`;
