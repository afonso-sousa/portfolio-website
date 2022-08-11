import styled from 'styled-components'

export const Experience = styled.div`
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

export const ExperienceContainer = styled.div`
  display: grid;
  grid-template-columns: 30% 60%;
  gap: 10%;
  align-items: center;
  width: 80%;
`
