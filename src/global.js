import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }

  body {
    background-color: ${({ theme }) => theme.primaryBg};
    color: ${({ theme }) => theme.primaryText};
    font-family: "Poppins", sans-serif;
    background-image: 
      radial-gradient(${({ theme }) => theme.bgVariant}, transparent 16%),
      radial-gradient(${({ theme }) => theme.bgVariant}, transparent 16%);
    background-size: 30px 30px;
    background-position: 0 0, 15px 15px;
    line-height: 1.7;
  }

  html {
    scroll-behavior: smooth;
  }

  // ::-webkit-scrollbar {
  //     display: none;
  // }

  h1, h2, h3, h4, h5 {
    font-weight: 500;
  }

  .btn {
    width: max-content;
    display: inline-block;
    color: ${({ theme }) => theme.primary};
    padding: 0.75rem 1.2rem;
    border-radius: 0.4rem;
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.primary};
    transition: all 400ms ease;

    &:hover {
      background: ${({ theme }) => theme.primary2};
    }
  }

  .swiper-button-next,
  .swiper-button-prev,
  .swiper-pagination-bullet-active {
    color: ${({ theme }) => theme.primary};
  }
`
