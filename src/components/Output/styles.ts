import styled, { css } from 'styled-components';

export const Conteiner = styled.div`
  display: flex;
  background: #232129;
  border-radius: 10px;
  border: 2px solid #232129;
  padding: 16px;
  width: 100%;
  align-items: center;
  color: #fff;

  & + div {
    margin-top: 8px;
  }
`;
