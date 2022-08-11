import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'

export const Portfolio = styled.div`
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

export const PortfolioContainer = styled(Swiper)`
  width: 80%;
`

export const PortfolioItem = styled(SwiperSlide)`
  text-align: center;
  user-select: none;
  padding: 1.2rem;
  border-radius: 2rem;
  border: 1px solid transparent;
  transition: all 400ms ease;

  & h3 {
    color: ${({ theme }) => theme.secondaryText};
  }

  & img {
    width: 100%;
  }
`

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background: linear-gradient(${({ theme }) => theme.primary}, transparent);
  width: 20rem;
  aspect-ratio: 1/1;
  border-radius: 1.5rem;
  overflow: hidden;
  margin: 0 auto 1rem;
`

export const Summary = styled.small`
  color: ${({ theme }) => theme.primaryText};
  font-weight: 300;
  display: block;
  width: 80%;
  margin: 0.8rem auto 2rem;
`

export const IconContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  justify-content: center;
`

export const Icon = styled.a`
    position:absolute;
    bottom:1rem;
    right:2rem;
    color: ${({ theme }) => theme.primaryAccent};
    font-size: 1.4rem;

    &:hover {
      transition: all 200ms ease;
      color: ${({ theme }) => theme.primary};
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
