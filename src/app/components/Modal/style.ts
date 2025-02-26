import styled, { css, keyframes } from "styled-components";
import { PADDING_MAP } from "../../Modules/Home/style";

const slideUp = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const ModalContainer = styled.div<{
  $isDarkMode: boolean;
  $isMobile: boolean;
}>`
  position: absolute;
  right: 0;
  top: 10vh;
  min-width: 380px;
  width: 30%;
  height: calc(100% - 10vh - ${2 * PADDING_MAP}px);
  margin-top: ${PADDING_MAP}px;
  z-index: 1300;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: ${({ $isDarkMode }) =>
    $isDarkMode ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.8)"};
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid white;
  padding: ${PADDING_MAP}px;
  animation: ${slideUp} 1s ease-out;

  ${({ $isMobile }) =>
    $isMobile &&
    css`
      width: 100%;
      top: unset;
      bottom: 0;
      height: calc(100% - 35vh - ${2 * PADDING_MAP}px);
    `}
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const NeighbourhoodName = styled.h2<{ $isDarkMode: boolean }>`
  color: ${({ $isDarkMode }) => ($isDarkMode ? "white" : "#1f1f1f")};
  font-size: 1.375rem;
  font-weight: 400;
`;

export const NeighbourhoodInfo = styled.p<{ $isDarkMode: boolean }>`
  color: ${({ $isDarkMode }) =>
    $isDarkMode ? "rgba(155, 155, 155)" : "#5e5e5e"};
  font-size 0.875rem;
  font-weight: 400;
`;

export const ChartContainer = styled.div`
  height: 400px;
`;

export const ActionButton = styled.button<{ $isDarkMode: boolean }>`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: none;
  cursor: pointer;
  padding: 10px;
  color: ${({ $isDarkMode }) =>
    $isDarkMode ? "rgba(155, 155, 155)" : "#5e5e5e"};

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 4px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
  }
`;

export const TopInfos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  padding: 15px 10px;
`;

export const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
`;
