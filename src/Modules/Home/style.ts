import styled, { css } from "styled-components";
export const PADDING_MAP = 15;

export const MainContainer = styled.main<{ $isDarkMode?: boolean }>`
  position: relative;

  ${({ $isDarkMode }) =>
    $isDarkMode &&
    css`
      .leaflet-layer,
      .leaflet-control-zoom-in,
      .leaflet-control-zoom-out,
      .leaflet-control-attribution {
        filter: invert(100%) hue-rotate(180deg) brightness(95%) contrast(90%);
      }
    `}
`;
