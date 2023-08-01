import { styled } from 'styled-components'

export const HeaderComponent = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
`

export const LinksContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.75rem;
`

export const Location = styled.div`
  display: flex;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  color: ${(props) => props.theme.purple};
  background: ${(props) => props.theme['purple-light']};

  border-radius: 6px;
`

export const Cart = styled.div`
  display: flex;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;

  color: ${(props) => props.theme['yellow-dark']};
  background: ${(props) => props.theme['yellow-light']};

  border-radius: 6px;
`

export const TotalCartItems = styled.div`
  display: flex;
  width: 1.25rem;
  height: 1.25rem;
  justify-content: center;
  align-items: center;

  position: relative;
  top: -18px;
  right: 22px;

  text-align: center;
  font-size: 0.75rem;
  font-weight: bold;
  line-height: 1.3;
  letter-spacing: -0.72px;

  vertical-align: top;

  border-radius: 1000px;

  background: ${(props) => props.theme['yellow-dark']};
  color: ${(props) => props.theme.white};
`
