import styled from 'styled-components';

export const Nav = styled.nav`
  padding: 0.7rem 1.7rem;
  z-index: 2;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 2rem;
  gap: 0.5rem;

  background: rgba(0, 0, 0, 0.3);
  border-radius: 3rem;
  backdrop-filter: blur(15px);

  width: max-content;
  display: flex;
  justify-content: center;
  align-items: center;

  & a {
    background: transparent;
    padding: 0.9rem;
    border-radius: 50%;
    display: flex;
    color: white;
    font-size: 1rem;
  }

  & a:hover {
    background: rgba(0, 0, 0, 0.3);
  }

  & a.active {
    background: ${({ theme }) => theme.primary};
    // color: ${({ theme }) => theme.primaryText};
  }

  & div {
    border-left: 3px solid ${({ theme }) => theme.primary};
    border-radius: 1rem;
    height: 3rem;
  }
`

export const EntranceAnimation = styled.div`
  animation: fade-in 0.75s backwards;
  animation-delay: ${(props) => props.delay};

  @keyframes fade-in {
    0% {
      opacity: 0;
      transform: scale(0.8, 0.8);
    }
    100% {
      opacity: 1;
      transform: scale(1, 1);
    }
  }
`
