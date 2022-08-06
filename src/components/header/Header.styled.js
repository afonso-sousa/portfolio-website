import styled from 'styled-components'

export const Header = styled.header`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 900px;

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
