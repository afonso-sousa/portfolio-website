import styled from 'styled-components'

export const Tabs = styled.div`
  display: grid;
  grid-template-columns: 40% 55%;
  gap: 5%;
  align-items: center;
  width: 80%;
  margin-top: 3rem;

  @media screen and (max-width: 600px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`

export const TabList = styled.ul`
  color: ${({ theme }) => theme.primaryText};
  position: relative;

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
