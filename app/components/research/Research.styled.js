import styled from 'styled-components'

export const Research = styled.section`
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
`

export const ResearchIntro = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
  font-size: 1rem;
`

export const ResearchProjects = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const ProjectCard = styled.div`
  background: ${({ theme }) => theme.secondaryBackground};
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`

export const Publications = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

export const Publication = styled.li`
  margin-bottom: 0.5rem;
`

export const HoverEffectLink = styled.a`
  position: relative;
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  transition: all 200ms ease;

  /* Default underline animation for direct text */
  &:not(:has(div))::after {
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

  &:not(:has(div)):hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  /* Special behavior for links wrapping ProjectCard */
  &:has(div) {
    text-decoration: none; /* Ensure no underline for the card itself */
  }

  &:has(div) span {
    position: relative;
    display: inline-block;
  }

  &:has(div) span::after {
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

  &:has(div):hover span::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;
