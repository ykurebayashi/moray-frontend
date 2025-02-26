import styled, { css } from "styled-components";
import { currentTheme } from "../../style";

export const MainHeader = styled.div`
  height: 10vh;
  display: flex;
  justify-content: space-between;
  padding: 0 5%;
  align-items: center;
  position: absolute;
  z-index: 1000;
  width: 100%;
`;

export const OptionPill = styled.button<{ $selected?: boolean }>`
  background: ${currentTheme.options.background};
  border: none;
  box-shadow: 0px 0px 8px 1px ${currentTheme.options.shadow};
  cursor: pointer;
  padding: 10px;
  border-radius: 20px;
  font-weight: 600;
  color: ${currentTheme.options.text};

  ${({ $selected }) =>
    $selected &&
    css`
      background: rgba(107, 88, 255, 0.5);
    `}
`;

export const PillsContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;
