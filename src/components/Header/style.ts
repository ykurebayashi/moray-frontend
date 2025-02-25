import styled, { css } from "styled-components";

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
  background: white;
  border: none;
  box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.35);
  cursor: pointer;
  padding: 5px;
  border-radius: 20px;
  ${({ $selected }) =>
    $selected &&
    css`
      background: #6c58ff33;
    `}
`;

export const PillsContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;
