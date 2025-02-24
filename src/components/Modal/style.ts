import styled, { keyframes } from "styled-components";
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

export const ModalContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 30%;
  height: calc(100% - 30px);
  margin-top: ${PADDING_MAP}px;
  z-index: 1300;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: ${PADDING_MAP}px;
  animation: ${slideUp} 1s ease-out;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const NeighbourhoodName = styled.h2`
  color: #1f1f1f;
  font-size: 1.375rem;
  font-weight: 400;
`;

export const NeighbourhoodInfo = styled.p`
  color: #5e5e5e;
  font-size 0.875rem;
  font-weight: 400;
`;
