import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import {
  AddressContainer,
  AddressForm,
  Divider,
  FormContainer,
  FormInput,
  LabelRadioInput,
  MethodsContainer,
  PageWrapper,
  PaymentContainer,
  RadioInput,
  SelectionContainer,
  SubmitButton,
  TotalContainer,
} from './styles'
import { CoffeeCard } from './CoffeeCard'

export function Checkout() {
  return (
    <PageWrapper>
      <div>
        <h1>Complete seu pedido</h1>
        <FormContainer>
          <AddressContainer>
            <header>
              <MapPinLine size={22} />
              <div>
                <h2>Endereço de Entrega</h2>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </header>
            <AddressForm>
              <FormInput
                type="text"
                name="cep"
                placeholder="CEP"
                gridColumn="1/2"
              />
              <FormInput
                type="text"
                name="rua"
                placeholder="Rua"
                gridColumn="1/4"
              />
              <FormInput
                type="text"
                name="rua"
                placeholder="Número"
                gridColumn="1/2"
              />
              <FormInput
                type="text"
                name="rua"
                placeholder="Complemento"
                gridColumn="2/4"
              />
              <FormInput
                type="text"
                name="rua"
                placeholder="Bairro"
                gridColumn="1/2"
              />
              <FormInput
                type="text"
                name="rua"
                placeholder="Cidade"
                gridColumn="2/3"
              />
              <FormInput
                type="text"
                name="rua"
                placeholder="UF"
                gridColumn="3/4"
              />
            </AddressForm>
          </AddressContainer>
          <PaymentContainer>
            <header>
              <CurrencyDollar size={22} />
              <div>
                <h2>Pagamento</h2>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </header>
            <MethodsContainer>
              <div>
                <RadioInput type="radio" id="cc" name="payment" value="cc" />
                <LabelRadioInput htmlFor="cc">
                  <CreditCard size={16} />
                  Cartão de Crédito
                </LabelRadioInput>
              </div>
              <div>
                <RadioInput type="radio" id="cd" name="payment" value="cd" />
                <LabelRadioInput htmlFor="cd">
                  <Bank size={16} />
                  Cartão de Débito
                </LabelRadioInput>
              </div>
              <div>
                <RadioInput type="radio" id="dd" name="payment" value="dd" />
                <LabelRadioInput htmlFor="dd">
                  <Money size={16} /> Dinheiro
                </LabelRadioInput>
              </div>
            </MethodsContainer>
          </PaymentContainer>
        </FormContainer>
      </div>
      <div>
        <h1>Cafés selecionados</h1>
        <SelectionContainer>
          <CoffeeCard />
          <Divider />

          <CoffeeCard />
          <Divider />

          <TotalContainer>
            <div>
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </div>
            <div>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </div>
            <div>
              <strong>Total</strong>
              <strong>R$ 33,20</strong>
            </div>
          </TotalContainer>

          <SubmitButton>Confirmar Pedido</SubmitButton>
        </SelectionContainer>
      </div>
    </PageWrapper>
  )
}
