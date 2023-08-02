import { styled } from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;

  padding: 0.5rem 0.25rem;

  > span {
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.3;

    color: ${(props) => props.theme['base-text']};
  }
`
export const DetailsContainer = styled.div`
  display: flex;
  gap: 1.25rem;

  span {
    font-size: 1rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
  }

  > div {
    display: flex;
    flex-direction: column;

    gap: 0.5rem;
    align-items: flex-start;
  }
`

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;

  > button {
    display: inline-flex;
    height: 2rem;

    padding: 0rem 0.5rem;
    justify-content: center;
    align-items: center;

    gap: 0.25rem;

    border-radius: 6px;
    border: 0;

    font-size: 0.75rem;
    line-height: 1.6;
    text-transform: uppercase;

    background-color: ${(props) => props.theme['base-button']};
    color: ${(props) => props.theme['base-text']};

    svg {
      color: ${(props) => props.theme.purple};
    }

    &:hover {
      background-color: ${(props) => props.theme['base-hover']};
      color: ${(props) => props.theme['base-subtitle']};

      /* svg {
        color: ${(props) => props.theme['purple-dark']};
      } */
    }
  }
`
