import styled, { css } from 'styled-components'

export const Background = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.secondaryColor};
`

export const Loader = styled.div`
  width: ${({ theme }) => theme.width};
  height: ${({ theme }) => theme.height};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const InnerCircle = styled.div`
  z-index: 4;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  top: 50%;
  left: 50%;
  margin-left: calc(-${({ theme }) => theme.innerWidth} / 2);
  margin-top: calc(-${({ theme }) => theme.innerHeight} / 2);
  width: ${({ theme }) => theme.innerWidth};
  height: ${({ theme }) => theme.innerHeight};
  background-color: ${({ theme }) => theme.secondaryColor};
`

const hold = css`
  position: absolute;
  width: 100%;
  height: 100%;
  clip: rect(
    0px,
    ${({ theme }) => theme.width},
    ${({ theme }) => theme.height},
    calc(${({ theme }) => theme.width} / 2)
  );
  border-radius: 100%;
  background-color: ${({ theme }) => theme.secondaryColor};
`

export const HoldLeft = styled.div`
  ${hold}

  & div {
    z-index: 1;
    animation: left 1s ease-in both;
  }

  @keyframes left {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(180deg);
    }
  }
`

export const Fill = styled.div`
  background-color: ${({ theme }) => theme.primaryColor};
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  clip: rect(
    0px,
    calc(${({ theme }) => theme.width} / 2),
    ${({ theme }) => theme.height},
    0px
  );
`

export const HoldRight = styled.div`
  ${hold}
  z-index: 3;
  transform: rotate(180deg);

  & div {
    z-index: 3;
    animation: right 0.5s linear both;
    animation-delay: 1s;
  }

  @keyframes right {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(180deg);
    }
  }
`

export const FadeInImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${({ theme }) => theme.width};
  height: ${({ theme }) => theme.height};
  opacity: 0;
  animation: fade-in 2s forwards;
  animation-delay: 2s;

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`
