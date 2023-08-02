import { CurrencyDollarSimple, MapPin, Timer } from 'phosphor-react'
import Illustration from '../../assets/Illustration.png'
import {
  IconContainer,
  LineContainer,
  OrderInfo,
  SuccessHeader,
  WrapperContainer,
} from './styles'

export function Success() {
  return (
    <WrapperContainer>
      <SuccessHeader>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </SuccessHeader>

      <OrderInfo>
        <LineContainer>
          <IconContainer variant="purple">
            <MapPin size={16} weight="fill" />
          </IconContainer>
          <div>
            <p>
              Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
            </p>
            <p>Farrapos - Porto Alegre, RS</p>
          </div>
        </LineContainer>
        <LineContainer>
          <IconContainer variant="yellow">
            <Timer size={16} weight="fill" />
          </IconContainer>

          <div>
            <p>Previsão de entrega </p>
            <p>
              <strong>20 min - 30 min</strong>
            </p>
          </div>
        </LineContainer>
        <LineContainer>
          <IconContainer variant="yellow-dark">
            <CurrencyDollarSimple size={16} weight="fill" />
          </IconContainer>
          <div>
            <p>Pagamento na entrega</p>
            <p>
              <strong>Cartão de Crédito</strong>
            </p>
          </div>
        </LineContainer>
      </OrderInfo>

      <div>
        <img src={Illustration} alt="" width={492} />
      </div>
    </WrapperContainer>
  )
}
