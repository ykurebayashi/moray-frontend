import styled from "styled-components";

export const MainContainer = styled.div`
  width: 300px;
  height: 200px;
  border: 1px solid black;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: flex-end;
`;

export const SingleColumn = styled.div<{ $heightPercentage }>`
  width: 50px;
  height: ${(props) => props.$heightPercentage}%;
  background-color: blue;
`;
