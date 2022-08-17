import styled from 'styled-components'

export const Footer = styled.footer`
  height: 101vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: ${({ theme }) => theme.containerWidthLg};
  margin-bottom: 4rem;
  text-align: center;
  padding: 3rem 0;

  & h2 {
    display: flex;
    padding-bottom: 2rem;

    &::after,
    &::before {
      content: '';
      width: 5rem;
      height: 1px;
      background: ${({ theme }) => theme.primary};
      margin: 1rem;

      @media screen and (max-width: 600px) {
        width: 3rem;
      }
    }

    @media screen and (max-width: 600px) {
      font-size: 1.1rem;
    }
  }
`

export const FooterContainer = styled.div`
  width: 80%;

  @media screen and (max-width: 600px) {
    width: 100%;

    & p {
      font-size: 0.9rem;
    }
  }
`

export const HoverEffectLink = styled.a`
  position: relative;
  color: ${({ theme }) => theme.primary};
  transition: all 200ms ease;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 1px;
    bottom: 2px;
    left: 0;
    background-color: ${({ theme }) => theme.primary};
    transform-origin: bottom left;
    transition: transform 0.25s ease-out;
  }

  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`

export const EntranceAnimation = styled.div`
  animation: fade-in 0.75s backwards;
  animation-delay: ${(props) => props.delay};

  @keyframes fade-in {
    0% {
      opacity: 0;
      transform: scale(0.8, 0.8);
    }
    100% {
      opacity: 1;
      transform: scale(1, 1);
    }
  }
`
