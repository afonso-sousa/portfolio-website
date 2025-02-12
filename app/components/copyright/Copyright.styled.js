import styled from 'styled-components'

export const Copyright = styled.div`
  margin-left: 6rem;
  padding-bottom: 3rem;

  @media screen and (max-width: 600px) {
    margin-left: 0rem;
    padding-bottom: 8rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const CopyrightIcons = styled.div`
  display: none;

  @media screen and (max-width: 600px) {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
`

export const Icon = styled.a`
    color: ${({ theme }) => theme.primaryAccent};
    font-size: 1.4rem;

    &:hover {
      transition: all 200ms ease;
      color: ${({ theme }) => theme.primary};
    }
  }
`