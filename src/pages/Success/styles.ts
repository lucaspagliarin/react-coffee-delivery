import { styled } from 'styled-components'

export const WrapperContainer = styled.div`
  padding-top: 5rem;
  display: grid;

  grid-template-columns: 32.875rem auto;
  row-gap: 2.5rem;
  column-gap: 6.375rem;
`

export const SuccessHeader = styled.header`
  grid-column: 1/3;

  h1 {
    font-family: 'Baloo 2';
    font-size: 2rem;
    font-weight: 800;
    line-height: 1.3;

    color: ${(props) => props.theme['yellow-dark']};
  }

  p {
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.3;
  }
`
export const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;

  padding: 2.5rem;
  width: 32.875rem;

  border: 1px solid blue;
  border-radius: 6px 36px;
`

interface IconProps {
  variant: 'purple' | 'yellow' | 'yellow-dark'
}

export const IconContainer = styled.div<IconProps>`
  border-radius: 1000px;
  background: ${(props) => props.theme[props.variant]};

  display: flex;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;

  color: ${(props) => props.theme.white};

  gap: 8px;
`

export const LineContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  justify-content: center;
`
