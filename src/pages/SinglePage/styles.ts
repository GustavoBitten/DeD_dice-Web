import styled, { keyframes } from 'styled-components';

import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  box-sizing: border-box;

  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

const appearFromRight = keyframes`
  from {
    opacity: 0;
    /* transform: rotate(4turn); */
  }
  to {
    opacity: 1;
    transform: rotate(0);
  }
`;
export const Title = styled.div`
  background: #b4e33d;
  color: #312e38;
  margin: 0 auto 40px;
  padding: 10px 250px;

  h1 {
    font-size: 40px;
    border-radius: 40px;
    text-align: center;
  }
`;

export const Sections = styled.div`
  display: flex;
  margin-left: 5%;

  & > div:first-child {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & > div:first-child {
      font-size: 18px;
      width: 140px;
    }

    form {
      margin: 20px 0;
      width: 340px;
      text-align: center;
    }
    button + div {
      margin-top: 80px;
    }
  }

  & > div:nth-of-type(2) {
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;

    & > div:first-child {
      font-size: 18px;
      width: 140px;
    }

    button {
      width: 80px;
      background: #232129;
      color: #d2cbc5;
      transition: color 0, 2s;

      &:hover {
        background: ${shade(0.2, '#b4e33d')};
        color: #000;
      }
    }
  }

  & > div:nth-of-type(3) {
    width: 50%;
    overflow: auto;
    display: flex;
    max-height: 500px;
    padding: 10px;
    align-items: center;
    flex-direction: column;
    span {
      padding: 0 10px;
    }
    &::-webkit-scrollbar {
      display: none;
    }
    & > div:first-child {
      font-size: 18px;
      width: 140px;
    }
    div + div {
      width: 70%;
    }
    border-left: 2px solid black;
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;

  animation: ${appearFromRight} 1s;
`;

export const Background = styled.div`
  flex: 1;
  background-size: cover;
`;
