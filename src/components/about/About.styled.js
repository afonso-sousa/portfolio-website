import styled from 'styled-components'

export const About = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 0 auto;
  width: ${({ theme }) => theme.containerWidthLg};

  h2 {
    display: flex;
    padding-bottom: 2rem;

    &::after,
    &::before {
      content: '';
      width: 5rem;
      height: 1px;
      background: ${({ theme }) => theme.primary};
      margin: 1rem;
    }
  }
`

export const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 30% 60%;
  gap: 10%;
  align-items: center;

  width: 80%;
`

export const AboutMe = styled.div`
  width: 80%;
  aspect-ratio: 1/1;
  border-radius: 2rem;
  background: linear-gradient(
    45deg,
    transparent,
    ${({ theme }) => theme.primary},
    transparent
  );
  display: flex;
  place-items: center;

  & img {
    border-radius: 2rem;
    overflow: hidden;
    transform: rotate(10deg);
    transition: all 400ms ease;

    &:hover {
      transform: rotate(0);
    }
  }

  @media screen and (max-width: 1024px) {
    width: 50%;
    margin: 2rem auto 4rem;
  }

  @media screen and (max-width: 600px) {
    width: 65%;
    margin: 0 auto 3rem;
  }
`

export const AboutContent = styled.div`
  & p {
    margin: 2rem 0 2.6rem;
    color: ${({ theme }) => theme.primaryText};
  }

  /* ============= Media Queries (Medium Devices) ============= */
  @media screen and (max-width: 1024px) {
    .about__container {
      grid-template-columns: 1fr;
      gap: 0;

      & p {
        margin: 1rem 0 1.5rem;
      }
    }
  }

  /* ============= Media Queries (Small Devices) ============= */
  @media screen and (max-width: 600px) {
    .about__content {
      text-align: center;

      & p {
        margin: 1.5rem 0;
      }
    }
  }
`

export const TechItemList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 1rem;
`

export const TechItem = styled.div`
  font-size: 0.8rem;
  display: flex;
  gap: 1rem;
`

export const Icon = styled.div`
  font-size: 0.5rem;
  color: ${({ theme }) => theme.primary};
  transform: rotate(90deg);
`
