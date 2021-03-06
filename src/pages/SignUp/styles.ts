import styled, { keyframes } from 'styled-components';

import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  place-content: center;

  width: 100%;
`;

const appearFromRight = keyframes`
  from {
    opacity: 1;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;
export const Result = styled.div`
  width: 100%;
  max-height: 500px;
  overflow: auto;
  text-align: center;

  &::-webkit-scrollbar {
    display: none;
  }

  h1 {
    margin-bottom: 8px;
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  animation: ${appearFromRight} 2s;

  form {
    margin: 80px 0 20px;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
      font-size: 40px;
      border-radius: 40px;
      box-shadow: 0 0 7px 0px #b4e33d;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0, 2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  > a {
    color: #b4e33d;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0, 2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#b4e33d')};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background-size: cover;
`;
