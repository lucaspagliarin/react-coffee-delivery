import { styled } from 'styled-components'

export const CounterContainer = styled.div`
  display: flex;
  height: 2rem;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  border-radius: 6px;
  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme.purple};

  button {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.purple};
    border: 0;
    background: ${(props) => props.theme['base-button']};

    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }
`
