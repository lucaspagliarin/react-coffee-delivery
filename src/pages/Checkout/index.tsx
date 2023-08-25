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
  FormInput,
  LabelRadioInput,
  MethodsContainer,
  PageWrapperForm,
  PaymentContainer,
  RadioInput,
  SelectionContainer,
  SubmitButton,
  TotalContainer,
} from './styles'
import { CoffeeCard } from './CoffeeCard'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { OrderContext } from '../../contexts/OrderContext'

import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'

const newOrderFormValidationSchema = zod.object({
  cep: zod.string().min(1, 'Informe a tarefa'),
  street: zod.string(),
  number: zod.string(),
  comp: zod.string(),
  bairro: zod.string(),
  city: zod.string(),
  uf: zod.string(),
  paymentMethod: zod.enum(['credit', 'debit', 'money']),
})

type NewOrderFormData = zod.infer<typeof newOrderFormValidationSchema>

export function Checkout() {
  const navigate = useNavigate()
  const { getTotalCartValue, cart } = useContext(CartContext)
  const { createNewOrder, deliveryFee, getTotalValue } =
    useContext(OrderContext)

  const newOrderForm = useForm<NewOrderFormData>({
    resolver: zodResolver(newOrderFormValidationSchema),
  })

  function handleFormSubmit(data: NewOrderFormData) {
    createNewOrder(data)
    navigate('/success')
  }

  const { register, handleSubmit } = newOrderForm

  return (
    <PageWrapperForm onSubmit={handleSubmit(handleFormSubmit)}>
      <div>
        <h1>Complete seu pedido</h1>
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
              placeholder="CEP"
              gridColumn="1/2"
              {...register('cep')}
            />
            <FormInput
              type="text"
              placeholder="Rua"
              gridColumn="1/4"
              {...register('street')}
            />
            <FormInput
              type="text"
              placeholder="Número"
              gridColumn="1/2"
              {...register('number')}
            />
            <FormInput
              type="text"
              placeholder="Complemento"
              gridColumn="2/4"
              {...register('comp')}
            />
            <FormInput
              type="text"
              placeholder="Bairro"
              gridColumn="1/2"
              {...register('bairro')}
            />
            <FormInput
              type="text"
              placeholder="Cidade"
              gridColumn="2/3"
              {...register('city')}
            />
            <FormInput
              type="text"
              placeholder="UF"
              gridColumn="3/4"
              {...register('uf')}
            />
          </AddressForm>
        </AddressContainer>
        <PaymentContainer>
          <header>
            <CurrencyDollar size={22} />
            <div>
              <h2>Pagamento</h2>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </header>
          <MethodsContainer>
            <div>
              <RadioInput
                {...register('paymentMethod')}
                type="radio"
                id="cc"
                value="credit"
              />
              <LabelRadioInput htmlFor="cc">
                <CreditCard size={16} />
                Cartão de Crédito
              </LabelRadioInput>
            </div>
            <div>
              <RadioInput
                {...register('paymentMethod')}
                type="radio"
                id="cd"
                value="debit"
              />
              <LabelRadioInput htmlFor="cd">
                <Bank size={16} />
                Cartão de Débito
              </LabelRadioInput>
            </div>
            <div>
              <RadioInput
                type="radio"
                id="dd"
                value="money"
                {...register('paymentMethod')}
              />
              <LabelRadioInput htmlFor="dd">
                <Money size={16} /> Dinheiro
              </LabelRadioInput>
            </div>
          </MethodsContainer>
        </PaymentContainer>
      </div>
      <div>
        <h1>Cafés selecionados</h1>
        <SelectionContainer>
          {cart.map((item) => (
            <div key={item.Coffee.id}>
              <CoffeeCard {...item} />
              <Divider />
            </div>
          ))}

          <TotalContainer>
            <div>
              <span>Total de itens</span>
              <span>
                R${' '}
                {Intl.NumberFormat('pt-Br', {
                  style: 'decimal',
                  minimumFractionDigits: 2,
                }).format(getTotalCartValue(cart))}
              </span>
            </div>
            <div>
              <span>Entrega</span>
              <span>
                R${' '}
                {Intl.NumberFormat('pt-Br', {
                  style: 'decimal',
                  minimumFractionDigits: 2,
                }).format(deliveryFee)}
              </span>
            </div>
            <div>
              <strong>Total</strong>
              <strong>
                R${' '}
                {Intl.NumberFormat('pt-Br', {
                  style: 'decimal',
                  minimumFractionDigits: 2,
                }).format(getTotalValue())}
              </strong>
            </div>
          </TotalContainer>

          <SubmitButton>Confirmar Pedido</SubmitButton>
        </SelectionContainer>
      </div>
    </PageWrapperForm>
  )
}
