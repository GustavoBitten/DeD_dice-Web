import styled, { css } from 'styled-components';

interface ContainerProps {
  newDice?: boolean;
}

export const Conteiner = styled.div<ContainerProps>`
  display: flex;
  background: #232129;
  border-radius: 10px;
  border: 2px solid #232129;
  padding: 16px;
  align-items: center;
  color: #d2cbc5;
  justify-content: center;
  width: fit-content;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.newDice &&
    css`
      color: #b4e33d;
      border-color: #b4e33d;
    `}
`;
