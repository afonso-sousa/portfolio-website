import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap");

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
    transition: all 0.25s linear;
  }

  html {
    scroll-behavior: smooth;
  }

  ::-webkit-scrollbar {
      display: none;
  }

  .container {
    width: ${({ theme }) => theme.containerWidthLg};
    margin: 0 auto;
  }

  h1, h2, h3, h4, h5 {
    font-weight: 500;
  }

  section {
    margin-top: 8rem;
  }

  section > h2, section > h5 {
    text-align: center;
    color: var(--color-light);
  }

  section > h2 {
    color: colors.$color-primary;
    margin-bottom: 3rem;
  }

  a {
    color: ${({ theme }) => theme.primary};
    transition: all 400ms ease;
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

  .btn-primary {
      background: colors.$color-primary;
      color: ${({ theme }) => theme.primaryBg};
  }

  img {
    display: block;
    width: 100%;
    object-fit: cover;
  }

  /* ============= Media Queries (Medium Devices) ============= */
  @media screen and (max-width: 1024px) {
    .container {
        width: ${({ theme }) => theme.containerWidthMd};
    }

    section {
        margin-bottom: 6rem;
    }
  }

  /* ============= Media Queries (Small Devices) ============= */
  @media screen and (max-width: 600px) {
    .container {
        width: ${({ theme }) => theme.containerWidthSm};
    }

    section > h2 {
        margin-bottom: 2rem;
    }
  }
`
