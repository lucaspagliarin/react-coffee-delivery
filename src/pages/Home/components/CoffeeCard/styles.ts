import { styled } from 'styled-components'

export const CoffeeCardContainer = styled.div`
  width: 256px;
  height: 310;
  flex-shrink: 0;
  padding: 1.25rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  border-radius: 6px 36px;
  background: ${(props) => props.theme['base-card']};

  img {
    width: 7.5rem;
    top: -2.5rem;
    position: relative;
  }

  h2 {
    margin-top: 1rem;
    color: ${(props) => props.theme['base-subtitle']};

    font-family: 'Baloo 2';
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.3;
  }

  p {
    text-align: center;
    margin-top: 0.5rem;

    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.3;
  }

  footer {
    width: 13rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 33px;
  }
`

export const PriceContainer = styled.div`
  font-size: 0.875rem;
  text-align: right;

  span {
    font-family: 'Baloo 2';
    font-size: 1.5rem;
    font-weight: 800;
    line-height: 1.3;
  }
`
export const ActionsContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  > a > button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props) => props.theme['purple-dark']};
    color: ${(props) => props.theme['base-card']};
    border: 0;
    padding: 0.5rem;
    border-radius: 6px;

    &:hover {
      background: ${(props) => props.theme.purple};
    }
  }
`

export const TagList = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  span {
    display: flex;
    padding: 0.25rem 0.5rem;

    color: ${(props) => props.theme['yellow-dark']};
    background: ${(props) => props.theme['yellow-light']};

    border-radius: 100px;

    font-size: 0.625rem;
    font-weight: 700;
    line-height: 1.3;
    text-transform: uppercase;
  }
`
