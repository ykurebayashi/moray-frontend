import styled from "styled-components";

export const ModalContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 500px;
  height: 250px;
  z-index: 1300;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`;
