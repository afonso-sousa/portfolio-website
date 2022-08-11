import styled from 'styled-components'

export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`

export const Slider = styled.span`
    position: absolute;
    cursor: pointer;
    border-radius: 34px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.4s;
    display: flex;
    justify-content: space-between;

    & * {
        margin: 5px;
        height: auto;
        width: 1.4rem;
        transition: all 0.1s linear;
    }

    &::before {
        position: absolute;
        border-radius: 50%;
        content: "";
        height: 26px;
        width: 26px;
        left: 5px;
        bottom: 4px;
        background-color: white;
        transition: 0.4s;
`

export const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${Slider} {
    background-color: ${({ theme }) => theme.primary};
  }

  &:checked + ${Slider}:before {
    transform: translateX(26px);
  }
`
