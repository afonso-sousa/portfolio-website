import styled from 'styled-components'

export const Socials = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  left: 3rem;
  bottom: 0;

  &::after {
    content: '';
    width: 1px;
    height: 5rem;
    background: ${({ theme }) => theme.primaryAccent};
  }
`

export const Icon = styled.a`
    color: ${({ theme }) => theme.primaryAccent};
    font-size: 1.4rem;
    margin-bottom: 1rem;
    transition: all 200ms ease;

    &:hover {
      transition: all 200ms ease;
      color: ${({ theme }) => theme.primary};
      transform: translate(0, -5px);
    }
  }
`

export const Email = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  position: fixed;
  right: 3rem;
  bottom: 0;

  &::after {
    content: '';
    width: 1px;
    height: 5rem;
    background: ${({ theme }) => theme.primaryAccent};
  }

  a {
    writing-mode: vertical-rl;
    font-weight: 300;
    font-size: 1rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.primaryAccent};
    transition: all 200ms ease;

    &:hover {
      transition: all 200ms ease;
      color: ${({ theme }) => theme.primary};
      transform: translate(0, -5px);
    }
  }
`
