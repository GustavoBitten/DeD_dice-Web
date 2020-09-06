import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Conteiner = styled.div<ContainerProps>`
  display: flex;
  background: #232129;
  border-radius: 10px;
  border: 2px solid #232129;
  padding: 16px;
  width: 100%;
  align-items: center;
  color: #666360;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isFocused &&
    css`
      color: #b4e33d;
      border-color: #b4e33d;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #b4e33d;
    `}

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}


  input {
    flex: 1;
    background: transparent;
    border: none;
    color: #f4ede8;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
