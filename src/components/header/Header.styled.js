import styled from 'styled-components'

export const Header = styled.header`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  /* ============= Media Queries (Medium Devices) ============= */
  @media screen and (max-width: 1024px) {
    header {
      height: 68vh;
    }
  }

  /* ============= Media Queries (Small Devices) ============= */
  @media screen and (max-width: 600px) {
    header {
      height: 100vh;
    }
  }
`

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 900px;
  transition: all 0.25s linear;

  & > h1 {
      font-size: 3rem;
  }

  & > p {
      margin: 2rem 0 2.6rem;
      color: ${({ theme }) => theme.primaryText};
  }

  & > h2 {
      color: ${({ theme }) => theme.primary};
      margin-bottom: 1rem;
  }

  & h1:nth-of-type(2) {
      color: ${({ theme }) => theme.secondaryText};
  }
}
`

export const HoverEffectLink = styled.a`
  position: relative;
  color: ${({ theme }) => theme.primary};
  transition: all 400ms ease;

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
