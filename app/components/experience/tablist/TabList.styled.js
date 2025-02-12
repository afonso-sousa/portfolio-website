import styled from 'styled-components'

export const Tabs = styled.div`
  display: grid;
  grid-template-columns: 40% 55%;
  gap: 5%;
  align-items: stretch;
  width: 80%;
  margin-top: 3rem;

  @media screen and (max-width: 600px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0;  /* Remove gap in mobile view */
    margin-top: 2rem; /* Adjust margin for mobile view */
  }
`

export const TabList = styled.ul`
  color: ${({ theme }) => theme.primaryText};
  position: relative;
  list-style-type: none;
  padding: 0;  /* Remove padding */
  margin: 0;   /* Remove margin */

  @media screen and (max-width: 600px) {
    width: 100%;
    display: flex;
    overflow-x: scroll;
    padding-bottom: 2rem;
    font-size: 0.8rem;
  }
`

export const TabItem = styled.li`
  background: transparent;
  padding: 1rem;
  cursor: pointer;
  position: relative;
  color: ${({ theme }) => theme.primaryText};
  transition: all 400ms ease;
  flex-shrink: 0;

  &.active {
    color: ${({ theme }) => theme.primary};

    &:after {
      transform: scaleX(1);
    }
  }

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

export const TabContent = styled.div`
  display: block;
  padding: 15px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.secondaryBackground};
  width: 100%; /* Ensure it takes full width of its container */
  max-width: 100%;
  max-width: 1000px;
  min-height: 150px;
  height: 150px;
  word-wrap: break-word; /* Allow text to break inside the container */
  white-space: normal; /* Ensures text wraps properly */
  overflow-wrap: break-word;
  
  @media screen and (max-width: 600px) {
    min-width: 250px; /* Adjust for smaller screens */
  }

  & span {
    color: ${({ theme }) => theme.primary};
  }

  & p {
    margin-top: 1rem;
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
