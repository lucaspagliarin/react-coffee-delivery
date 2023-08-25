import { styled } from 'styled-components'

export const PageWrapperForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 28rem;
  gap: 2rem;
  align-items: flex-start;

  h1 {
    font-family: 'Baloo 2';
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};

    margin-bottom: 0.9375rem;
  }
`

export const AddressForm = styled.div`
  margin-top: 2rem;

  display: grid;
  grid-template-columns: 200px auto 60px;
  column-gap: 0.75rem;
  row-gap: 1rem;

  margin-bottom: 1rem;
`

export const LabelRadioInput = styled.label`
  display: flex;
  padding: 1rem;
  align-items: center;
  gap: 0.75rem;
  flex: 1 0 0;

  border-radius: 6px;

  border: 1px solid ${(props) => props.theme['base-button']};
  background: ${(props) => props.theme['base-button']};

  font-size: 0.75rem;
  line-height: 1.6;
  text-transform: uppercase;
`
export const RadioInput = styled.input`
  appearance: none;
  width: 0;
  height: 0;

  &:checked + ${LabelRadioInput} {
    border: 1px solid ${(props) => props.theme.purple};
    background: ${(props) => props.theme['purple-light']};
  }
`

export const FormInput = styled.input<{ gridColumn?: string }>`
  display: flex;
  align-items: center;
  padding: 0.75rem;
  gap: 4px;
  width: auto;

  border-radius: 4px;
  border: 1px solid ${(props) => props.theme['base-button']};
  background: ${(props) => props.theme['base-input']};

  font-size: 0.875rem;
  color: ${(props) => props.theme['base-text']};

  grid-column: ${(props) => props.gridColumn};

  &:focus {
    border: 1px solid ${(props) => props.theme['yellow-dark']};
  }
`
export const Divider = styled.hr`
  margin: 1.5rem 0;
  border-top: 1px solid ${(props) => props.theme['base-button']};
`

const BaseContainer = styled.div`
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;

  display: flex;
  flex-direction: column;

  header {
    display: flex;

    gap: 0.5rem;
  }

  h2 {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1rem;
    font-weight: 400;
  }

  p {
    color: ${(props) => props.theme['base-text']};
    font-size: 0.875rem;
  }
`

export const AddressContainer = styled(BaseContainer)`
  margin-bottom: 0.75rem;

  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }
`
export const PaymentContainer = styled(BaseContainer)`
  svg {
    color: ${(props) => props.theme.purple};
  }
`

export const SelectionContainer = styled(BaseContainer)`
  border-radius: 6px 44px;
`

export const MethodsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;
  align-self: stretch;

  div {
    display: flex;
    width: 100%;
  }

  margin-top: 2rem;
`
export const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  span {
    color: ${(props) => props.theme['base-text']};

    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.3;
    text-align: right;
  }

  strong {
    color: ${(props) => props.theme['base-subtitle']};

    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.3;
    text-align: right;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
  }
`
export const SubmitButton = styled.button`
  margin-top: 1.5rem;
  display: flex;

  padding: 0.75rem 0.5rem;
  justify-content: center;
  align-items: center;

  gap: 0.25rem;

  border-radius: 6px;
  border: 0;

  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.6;
  text-transform: uppercase;

  background-color: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};

  &:hover {
    background-color: ${(props) => props.theme['yellow-dark']};
  }
`
