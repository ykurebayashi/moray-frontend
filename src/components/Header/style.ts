import styled, { css } from "styled-components";

export const MainHeader = styled.div`
  height: 10vh;
  display: flex;
  justify-content: space-between;
  padding: 0 5%;
  align-items: center;
  position: absolute;
  z-index: 1302;
  width: 100%;
`;

export const OptionPill = styled.button<{
  $selected?: boolean;
  $isDarkMode: boolean;
}>`
  background: ${({ $isDarkMode }) => ($isDarkMode ? "#1f1f1f" : "white")};
  border: none;
  min-width: 100px;
  height: 30px;
  box-shadow: 0px 0px 8px 1px white;
  cursor: pointer;
  padding: 0 10px;
  border-radius: 20px;
  font-weight: 600;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  text-align: center;
  color: ${({ $isDarkMode }) => ($isDarkMode ? "white" : "#1f1f1f")};
  position: relative;

  ${({ $selected }) =>
    $selected &&
    css`
      background: rgba(107, 88, 255, 0.5);
    `}
`;

export const PillsContainer = styled.div`
  display: flex;
  gap: 20px;
  max-width: 50%;
  overflow-x: scroll;
  align-items: center;
  padding: 20px;
`;

export const DropdownMenu = styled.div<{ $isDarkMode: boolean }>`
  position: absolute;
  top: 70%;
  width: 200px;
  border-radius: 20px;
  max-height: 300px;
  overflow-y: scroll;
  background: ${({ $isDarkMode }) =>
    $isDarkMode ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.8)"};
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid white;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FavoriteOption = styled.p<{ $isDarkMode: boolean }>`
  color: ${({ $isDarkMode }) => ($isDarkMode ? "white" : "black")};
  cursor: pointer;
`;
