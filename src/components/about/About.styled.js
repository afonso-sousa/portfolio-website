import styled from 'styled-components'

export const About = styled.div`
  height: 101vh;
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

      @media screen and (max-width: 600px) {
        width: 3rem;
      }
    }

    @media screen and (max-width: 600px) {
      font-size: 1.1rem;
    }
  }
`

export const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 30% 60%;
  gap: 10%;
  align-items: center;

  width: 80%;

  @media screen and (max-width: 600px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
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
    width: 50%;
    margin: 0 auto;
  }
`

export const AboutContent = styled.div`
  & p {
    margin: 2rem 0 2.6rem;
    color: ${({ theme }) => theme.primaryText};

    @media screen and (max-width: 600px) {
      font-size: 0.9rem;
      margin: 2rem 0 1rem;
    }
  }

  /* ============= Media Queries (Medium Devices) ============= */
  @media screen and (max-width: 1024px) {
  }
`

export const TechItemList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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
