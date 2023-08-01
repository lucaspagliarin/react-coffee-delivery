import { styled } from 'styled-components'

interface ItemProps {
  variant: 'yellow-dark' | 'base-text' | 'yellow' | 'purple'
}

export const Item = styled.div<ItemProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0.5rem;
    gap: 0.5rem;

    color: ${(props) => props.theme.white};

    border-radius: 1000px;
    background: ${(props) => props.theme[props.variant]};
  }
`

export const IntroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 5.75rem 0;

  gap: 3.5rem;

  img {
    height: 22, 5rem;
    width: 476px;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-family: 'Baloo 2';
    font-size: 3rem;
    font-weight: 800;
    line-height: 1.3;
  }

  p {
    font-family: 'Roboto';
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.3;
  }
`

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 2.5rem;
  row-gap: 1.25rem;

  span {
    line-height: 1.3;
  }
`

export const InfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.125rem;
`
